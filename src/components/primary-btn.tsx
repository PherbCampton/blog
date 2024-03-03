import { Spinner } from "./spinner";

type Props = {
  text: string;
  loading?: boolean;
  className?: string;
  spinnerSize?: string;
  onClick?: () => void;
  type: "submit" | "button" | "reset";
};

export const PrimaryBtn = ({
  text,
  type,
  onClick,
  className = "",
  loading = false,
  spinnerSize = "24",
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`button button-action solid-primary w-full lg:w-auto lg:min-w-[200px] ${className} ${
        loading ? "opacity-60 pointer-events-none" : ""
      }`}
    >
      {!loading ? (
        <span>
          <span className="button-action-text text-primaryBackground">
            {text}
          </span>
        </span>
      ) : (
        <Spinner size={spinnerSize} />
      )}
    </button>
  );
};
