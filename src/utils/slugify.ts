export function slugify(source: string) {
  return source
    .trim()
    .replace(/\W/g, replaceSpecialChar)
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function replaceSpecialChar(char: string) {
  return charMap.has(char) ? (charMap.get(char) as string) : "-";
}

const charMap = new Map([
  [".", ""],
  ["'", ""],
  ["&", "and"],
  ["$", "$"], // keep `$` characters (for `$mol` project)
]);
