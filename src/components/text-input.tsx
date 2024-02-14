type Props = {
  label: string;
  name: string;
};

export const TextInput = ({ label, name }: Props) => {
  return (
    <div>
      <label htmlFor={name} className="ml-2 mb-2 block text-sm font-semibold">
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          className="pl-10 border-gel-background border px-6 py-4"
          name={name}
        />
      </div>
    </div>
  );
};
