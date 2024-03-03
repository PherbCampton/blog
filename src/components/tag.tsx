type Prop = {
  tag: string;
  color: string;
  isActive: boolean;
  onClick: () => void;
};
export const Tag = ({ tag, color, onClick, isActive }: Prop) => {
  return (
    <li>
      <button
        onClick={onClick}
        style={{ borderColor: color }}
        className={`${
          isActive ? "opacity-100" : "opacity-30"
        } whitespace-nowrap rounded-full border px-8 py-4 text-sm text-white transition-all hover:text-white hover:opacity-60`}
      >
        {tag}
      </button>
    </li>
  );
};
