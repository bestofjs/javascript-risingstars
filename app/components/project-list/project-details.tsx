import { Trans } from "react-i18next/TransWithoutContext";
import { ProjectChart } from "./project-chart";
import { formatStarNumber } from "./project-shared";
import styles from "./project-list.module.css";
import { useTranslation } from "~/i18n";

type Props = {
  language: string;
  project: RisingStars.Project;
  tags: RisingStars.Tag[];
  year: number;
};
export async function ProjectDetails({ language, project, tags, year }: Props) {
  const { url, full_name, repository, stars } = project;
  const { t } = await useTranslation(language, year);


  return (
    <div className="project-details">
      <div className="project-details-inner">
        <Heading>
          <Trans i18nKey="common.view_project.trends" year={year} t={t}>
            Trends in {{ year }}
          </Trans>
        </Heading>
        {/* @ts-expect-error Server Component */}
        <ProjectChart project={project} language={language} year={year} />
        <Heading>
          <Trans i18nKey="common.view_project.data" t={t}>
            GitHub data
          </Trans>
        </Heading>
        <DataList>
          <DataListItem
            label={
              <Trans i18nKey="common.view_project.created" t={t}>
                Created
              </Trans>
            }
            data={<>{formatProjectCreationDate(project)}</>}
          />
          <DataListItem
            label={
              <Trans i18nKey="common.view_project.stars_total" t={t}>
                Total stars
              </Trans>
            }
            data={<>{formatStarNumber(stars, 1)}☆</>}
          />
        </DataList>
        <Heading>
          <Trans i18nKey="common.view_project.links" t={t}>
            Links
          </Trans>
        </Heading>
        <DataList>
          <DataListItem
            label={<>GitHub</>}
            data={<a href={repository}>{full_name}</a>}
          />
          {url && (
            <DataListItem
              label={
                <Trans i18nKey="common.view_project.homepage" t={t}>
                  Homepage
                </Trans>
              }
              data={<a href={url}>{formatURL(url)}</a>}
            />
          )}
        </DataList>
        <TagList project={project} tags={tags} />
      </div>
    </div>
  );
}

const TagList = ({
  project,
  tags: allTags,
}: Pick<Props, "project" | "tags">) => {
  const tags = allTags.filter(({ code }) => project.tags.includes(code));

  return (
    <div className={styles.group}>
      <a
        className={styles.detailsLink}
        href={`https://bestofjs.org/projects/${project.slug}`}
      >
        Best of JS
      </a>
      {tags.map((tag) => (
        <a
          key={tag.name}
          className={styles.tag}
          href={`https://bestofjs.org/tags/${tag.code}`}
        >
          {tag.name}
        </a>
      ))}
    </div>
  );
};

const Heading = ({ children }: { children: React.ReactNode }) => {
  return <h4 className={styles.heading}>{children}</h4>;
};

const DataList = ({ children }: { children: React.ReactNode }) => {
  return <ul className={styles.dataList}>{children}</ul>;
};

const DataListItem = ({
  label,
  data,
}: {
  label: React.ReactNode;
  data: React.ReactNode;
}) => {
  return (
    <li className={styles.dataListItem}>
      <div className={styles.label}>{label}</div>
      <div className={styles.data}>{data}</div>
    </li>
  );
};

// Don't use `new Date()` to avoid hydration errors with Next 13
function formatProjectCreationDate(project: RisingStars.Project) {
  const date = project.created_at;
  const yearAndMonth = date.slice(0, 7); // TODO format using i18n
  return yearAndMonth;
}

// Format a URL to be displayed, removing `http://` and trailing `/`
function formatURL(url: string) {
  const result = url.replace(/\/$/, "").toLowerCase();
  return result.replace(/^https?:\/\/(.*)$/, "$1");
}
