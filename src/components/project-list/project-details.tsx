import tinytime from "tinytime";
import { FormattedMessage } from "react-intl";

import { ProjectChart } from "./project-chart";
import { formatStarNumber } from "./project-shared";

const templateMonthYear = tinytime("{YYYY}/{Mo}");

type Props = {
  project: RisingStars.Project;
  tags: RisingStars.Tag[];
  year: number;
  isOpen: boolean;
};
export const ProjectDetails = ({ project, isOpen, tags, year }: Props) => {
  const { url, full_name, repository, stars } = project;
  return (
    <div className={`project-details ${isOpen ? "is-open" : "is-closed"}`}>
      <div className="project-details-inner">
        <Heading>
          <FormattedMessage
            id="common.view_project.trends"
            defaultMessage={"Trends in {year}"}
            values={{ year }}
          />
        </Heading>
        <ProjectChart project={project} />
        <Heading>
          <FormattedMessage
            id="common.view_project.data"
            defaultMessage={"GitHub data"}
          />
        </Heading>
        <DataList>
          <DataListItem
            label={
              <FormattedMessage
                id="common.view_project.created"
                defaultMessage={`Created`}
              />
            }
            data={templateMonthYear.render(new Date(project.created_at))}
          />
          <DataListItem
            label={
              <FormattedMessage
                id="common.view_project.stars_total"
                defaultMessage={"Total stars"}
              />
            }
            data={<>{formatStarNumber(stars, 1)}☆</>}
          />
        </DataList>
        <Heading>
          <FormattedMessage
            id="common.view_project.links"
            defaultMessage={"Links"}
          />
        </Heading>
        <DataList>
          <DataListItem
            label={<>GitHub</>}
            data={<a href={repository}>{full_name}</a>}
          />
          {url && (
            <DataListItem
              label={
                <FormattedMessage
                  id="common.view_project.homepage"
                  defaultMessage={`Homepage`}
                />
              }
              data={<a href={url}>{formatURL(url)}</a>}
            />
          )}
        </DataList>
        <TagList project={project} tags={tags} />
      </div>
    </div>
  );
};

const TagList = ({
  project,
  tags: allTags,
}: Pick<Props, "project" | "tags">) => {
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
          href={`https://bestofjs.org/tags/${tag.code}`}
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
            border: 1px solid var(--activeLinkColor);
          }
          .details:hover {
            background-color: rgba(228, 91, 18, 0.04);
          }
          .tag {
            color: var(--darkgrey);
            border: 1px solid var(--light-border-color);
          }
          .tag:hover {
            background-color: var(--bg-color);
            color: inherit;
          }
        `}
      </style>
    </div>
  );
};

const Heading = ({ children }) => {
  return (
    <h4>
      {children}
      <style jsx>
        {`
          h4 {
            width: 100%;
            margin-bottom: 10px;
            border: 1px dashed var(--grey3);
            text-align: center;
            font-size: var(--smallish-font);
            color: var(--mediumgrey);
            padding: 2px 0;
          }
        `}
      </style>
    </h4>
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
