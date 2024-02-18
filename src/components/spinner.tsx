export const Spinner = () => {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-6 h-6 border-[3px] text-blue-400 text-lg animate-spin border-gray-300 flex items-center justify-center border-t-primaryBackground rounded-full"></div>
    </div>
  );
};
