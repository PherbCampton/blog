type Props = {
  text: string;
};

export const PrimaryBtn = ({ text }: Props) => {
  return (
    <button
      id="contact-send-button"
      className=" button button-action solid-primary w-full lg:w-auto lg:min-w-[200px] "
    >
      <span>
        <span className="button-action-icon text-primaryBackground ">&gt;</span>
        <span className="button-action-text text-primaryBackground">
          {text}
        </span>
      </span>
    </button>
  );
};
