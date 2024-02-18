type Props = {
  title: string;
  editable?: boolean;
  description: string;
};

export const DashboardCard = ({ title, description, editable }: Props) => {
  return (
    <div className="col-span-2 h-full w-full items-start justify-end overflow-hidden rounded-3xl p-10">
      <div className="relative">
        <div className="absolute -bottom-8 -left-8 -right-8 -top-8 rounded-3xl bg-primaryBackground"></div>
        <div className="relative z-10 mx-auto my-auto">
          <p className="pb-8 text-4xl font-bold">{title}</p>
          <p className="hero-text pb-12 text-lg text-gel-gray-2">
            {description}
          </p>
          <a
            href="https://discord.com/invite/ApbA39BKyJ"
            className="button solid-gradient outlined w-full border-gel-pink md:w-auto"
            target="_blank"
          >
            <span className="relative z-10">
              {editable ? "> View and update" : "> View"}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
