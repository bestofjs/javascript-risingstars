import { useIntl } from "react-intl";

import { formatStarNumber } from "./project-shared";

type Props = {
  project: RisingStars.Project;
};
export const ProjectChart = ({ project }: Props) => {
  const intl = useIntl();
  if (!project.monthly || project.monthly.length === 0)
    return (
      <div style={{ fontStyle: "italic", marginBottom: ".5rem" }}>
        No data available
      </div>
    );

  const months = intl
    .formatMessage({
      id: `common.view_project.months`,
      defaultMessage: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec",
    })
    .split(" ");
  const monthlyDeltas = (project.monthly || [])
    .concat([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) // fill with 0 for missing data
    .slice(0, 12)
    .reverse(); // sort by date ascending (from January to December)
  const monthlyDeltaMax = monthlyDeltas.reduce((a, b) => Math.max(a, b), 0);

  return (
    <div>
      <div className="project-chart">
        <div className="project-chart-columns">
          {monthlyDeltas.map((d, i) => (
            <div key={i} className="project-chart-column">
              {d > 0 ? (
                <div
                  className="project-chart-bar"
                  style={{
                    height: `${Math.round((d * 100) / monthlyDeltaMax)}%`,
                  }}
                >
                  <div className="project-chart-stars">
                    {d > 0 && <span>{formatStarNumber(d, 1)}</span>}
                  </div>
                </div>
              ) : (
                <NotAvailable key={i} />
              )}
            </div>
          ))}
        </div>
        <div className="project-chart-months">
          {months.map((m, i) => (
            <div key={i} className="project-chart-month">
              {m}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const NotAvailable = () => (
  <div>
    N/A
    <style jsx>
      {`
        div {
          font-size: var(--smaller-font);
          color: var(--light-text-color);
          text-align: center;
          border-bottom: 2px dashed var(--chart-bar-bg-color);
          padding-bottom: 5px;
        }
      `}
    </style>
  </div>
);
