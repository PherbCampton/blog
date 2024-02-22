type Props = {
  size?: string;
};

export const Spinner = ({ size = "24" }: Props) => {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center opacity-50">
      <div
        style={{ width: size + "px", height: size + "px" }}
        className=" border-[3px] text-blue-400 text-lg animate-spin border-gray-300 flex items-center justify-center border-t-primaryBackground rounded-full"
      ></div>
    </div>
  );
};
