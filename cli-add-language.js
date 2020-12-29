const fs = require("fs-extra");
const path = require("path");
const settings = require("./data/settings.json");
const fetch = require("node-fetch");
// const data = require("./data/index");

async function main() {
  const params = process.argv.slice(2);
  if (params.length !== 2)
    throw new Error(`2 parameters are expected: year and language`);

  const [year, language] = params;

  await createMessageFile({ year, language });
  await createAllMdFiles({ year, language });
}

async function createMessageFile({ year, language }) {
  const filepath = path.resolve(
    process.cwd(),
    `./i18n/messages/${year}/${language}.json`
  );
  const fileExists = await fs.pathExists(filepath);
  if (fileExists) {
    console.log(`The file already exists`, filepath);
    return;
  }
  await fs.outputJSON(filepath, {});
  console.log(`JSON file created`, filepath);
}

async function createAllMdFiles({ year, language }) {
  const categories = await fs.readJson(
    path.resolve(process.cwd(), `./data/${year}/categories.json`)
  );

  await createFile({
    year,
    language,
    relativePath: `/`,
    key: `introduction`,
  });

  await createFile({
    year,
    language,
    relativePath: `/`,
    key: `conclusion`,
  });

  for (const item of categories) {
    await createFile({
      year,
      language,
      relativePath: `/categories/`,
      key: item.key,
    });
    if (item.guest) {
      await createFile({
        year,
        language,
        relativePath: `/guests/`,
        key: item.guest,
      });
    }
  }
}

async function createFile({ year, language, relativePath, key }) {
  const filepath = path.resolve(
    process.cwd(),
    `./i18n/md/collections/${year}/${language}${relativePath}${key}.md`
  );
  const fileExists = await fs.pathExists(filepath);
  if (fileExists) {
    console.log(`The file already exists`, filepath);
    return;
  }
  const mdContent = await fetchMdContent({ year, language, relativePath, key });
  const fileContent = generateFileContent(language, key, mdContent);
  await fs.outputFile(filepath, fileContent);
  console.log(`MD File created`, filepath);
}

function generateFileContent(language, id, content) {
  return `---
id: ${id}  
language: ${language}
---

${content}
`;
}

async function fetchMdContent({ year, language, relativePath, key }) {
  const root = `https://raw.githubusercontent.com/bestofjs/javascript-risingstars/master`;
  const url = `${root}/i18n/${year}${relativePath}${key}/${language}.md`;
  const content = await fetch(url).then((r) => r.text());
  // console.log(content);
  return content;
}

main();
