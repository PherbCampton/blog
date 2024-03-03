import { TableOfContentsItem } from "../pages/post";

type Props = {
  tableOfContents: TableOfContentsItem[];
  scrollToHeading: (id: string) => void;
};

export const Outline = ({ tableOfContents, scrollToHeading }: Props) => {
  return (
    <div className="sticky top-10">
      <ul className="outline-list flex flex-col gap-1">
        {tableOfContents?.map((item) => (
          <li
            key={item.id}
            style={{ marginLeft: `${(item.level - 2) * 10}px` }}
          >
            <a
              href={`#${item.id}`}
              className={`text-lg ${
                item.level === 2
                  ? "h2"
                  : item.level === 3
                  ? "h3"
                  : item.level === 4
                  ? "h4"
                  : item.level === 5
                  ? "h5"
                  : item.level === 6
                  ? "h6"
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToHeading(item.id);
              }}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
