import tinytime from "tinytime";
// import { FormattedMessage } from "react-intl";

import { ProjectChart } from "./project-chart";
import { formatStarNumber } from "./project-shared";
import { useAppData } from "app-data";

const templateMonthYear = tinytime("{YYYY}/{Mo}");

type Props = {
  project: RisingStars.Project;
  year: number;
  isOpen: boolean;
};
export const ProjectDetails = ({ project, isOpen, year }: Props) => {
  const { url, full_name, repository, stars } = project;
  return (
    <div className={`project-details ${isOpen ? "is-open" : "is-closed"}`}>
      <div className="project-details-inner">
        <Separator>Trends in {year}</Separator>
        <ProjectChart project={project} />
        <Separator>GitHub Data</Separator>
        <DataList>
          <DataListItem
            label={<>Created:</>}
            data={templateMonthYear.render(new Date(project.created_at))}
          />
          <DataListItem
            label={<>Total stars:</>}
            data={<>{formatStarNumber(stars, 1)}☆</>}
          />
        </DataList>
        <Separator>Links</Separator>
        <DataList>
          <DataListItem
            label={<>GitHub</>}
            data={<a href={repository}>{full_name}</a>}
          />
          {url && (
            <DataListItem
              label={<>Homepage</>}
              data={<a href={url}>{formatURL(url)}</a>}
            />
          )}
        </DataList>
        <TagList project={project} />
      </div>
    </div>
  );
};

const TagList = ({ project }: { project: RisingStars.Project }) => {
  const { tags: allTags } = useAppData();
  const tags = allTags.filter(({ code }) => project.tags.includes(code));

  return (
    <div className="group">
      <a
        className="details"
        href={`https://bestofjs.org/projects/${project.slug}`}
      >
        Best of JS
      </a>
      {tags.map((tag) => (
        <a
          key={tag.name}
          className="tag"
          href={`https:/bestofjs.org/tags/${tag.code}`}
        >
          {tag.name}
        </a>
      ))}
      <style jsx>
        {`
          .group {
            display: flex;
            flex-wrap: wrap;
            margin: -5px;
          }
          a {
            margin: 5px;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: var(--smallish-font);
            color: inherit;
          }
          .details {
            color: var(--linkColor);
            border: 1px solid var(--light-border-color);
          }
          .details:hover {
            background-color: rgba(228, 91, 18, 0.04);
          }
          .tag {
            background-color: #eee;
          }
          .tag:hover {
            background-color: #ddd;
          }
        `}
      </style>
    </div>
  );
};

const Separator = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        border: "1px dashed var(--grey3)",
        textAlign: "center",
        marginBottom: 10,
        fontSize: "var(--smallish-font)",
        // textTransform: "uppercase",
        color: "var(--mediumgrey)",
        padding: "2px 0",
      }}
    >
      {children}
    </div>
  );
};

const DataList = ({ children }) => {
  return (
    <ul>
      {children}
      <style jsx>
        {`
          ul {
            margin: 0 0 5px;
            padding-left: 0px;
            font-size: var(--smallish-font);
          }
        `}
      </style>
    </ul>
  );
};

const DataListItem = ({ label, data }) => {
  return (
    <li>
      <div className="label">{label}</div>
      <div className="data">{data}</div>
      <style jsx>
        {`
          li {
            list-style: none;
            padding-bottom: 4px;
            display: flex;
            align-items: center;
          }
          .data {
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .label {
            flex-basis: 100px;
            flex-shrink: 0;
          }
        `}
      </style>
    </li>
  );
};

// Format a URL to be displayed, removing `http://` and trailing `/`
function formatURL(url: string) {
  const result = url.replace(/\/$/, "").toLowerCase();
  return result.replace(/^https?:\/\/(.*)$/, "$1");
}
