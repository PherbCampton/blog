type Props = {
  label: string;
  name: string;
};

export const Textarea = ({ label, name }: Props) => {
  return (
    <div>
      <label htmlFor={name} className="ml-2 mb-2 block text-sm font-semibold">
        {label}
      </label>
      <div className="relative">
        <textarea
          id={name}
          className="border-gel-background border px-6 py-4"
          rows={5}
          name={name}
        ></textarea>
      </div>
    </div>
  );
};
