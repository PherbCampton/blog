import { GiSelfLove } from "react-icons/gi";

type Props = {
  interest: string;
  theme: string | undefined;
};
export const Interest = ({ interest, theme }: Props) => {
  return (
    <li className="flex items-center gap-2 text-sm text-gel-gray-2">
      <i style={{ color: "red" }}>
        <GiSelfLove fontSize={"24px"} style={{ fill: theme, opacity: "0.5" }} />
      </i>
      <p
        aria-current="page"
        className="router-link-active router-link-exact-active"
      >
        {interest}
      </p>
    </li>
  );
};
