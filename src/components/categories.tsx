type Props = {
  category: string;
  onClick: () => void;
};

export const Categories = ({ category, onClick }: Props) => {
  return (
    <li className="flex items-center gap-2 text-sm text-gel-gray-2">
      <p
        aria-current="page"
        className="router-link-active router-link-exact-active opacity-70 hover:opacity-50 cursor-pointer"
        onClick={onClick}
      >
        {category}
      </p>
    </li>
  );
};
