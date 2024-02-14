type Prop = {
  tag: string;
  color: string;
};
export const Tag = ({ tag, color }: Prop) => {
  return (
    <li>
      <button
        className="opacity-100 whitespace-nowrap rounded-full border px-8 py-4 text-sm text-white transition-all hover:text-white hover:opacity-60"
        style={{ borderColor: color }}
      >
        {tag}
      </button>
    </li>
  );
};
