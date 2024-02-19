import { Spinner } from "./spinner";

type Props = {
  text: string;
  loading?: boolean;
  onClick?: () => void;
  type: "submit" | "button" | "reset";
};

export const PrimaryBtn = ({ text, onClick, type, loading = false }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`button button-action solid-primary w-full lg:w-auto lg:min-w-[200px] ${
        loading ? "opacity-60 pointer-events-none" : ""
      }`}
    >
      {!loading ? (
        <span>
          {/* <span className="button-action-icon text-primaryBackground ">
            &gt;
          </span> */}
          <span className="button-action-text text-primaryBackground">
            {text}
          </span>
        </span>
      ) : (
        <Spinner />
      )}
    </button>
  );
};
