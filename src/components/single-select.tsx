import "../select.css";
import React from "react";
import Select from "react-select";
import { IoIosHelpCircleOutline } from "react-icons/io";

export type OptionType = { value: string; label: string };

export type SingleSelectProps = {
  options: OptionType[];
  selectedOption: OptionType | null;
  onChange: (selectedOption: OptionType) => void;
};

const SingleSelect: React.FC<SingleSelectProps> = ({
  options,
  onChange,
  selectedOption,
}) => {
  const handleChange = (selectedValue: OptionType | null) => {
    onChange(selectedValue as OptionType);
  };

  return (
    <div>
      <label htmlFor="theme" className="ml-2 mb-2 block text-sm font-semibold">
        Theme
      </label>
      <div className="flex gap-2 items-center text-xs text-gel-gray ml-2 mb-3">
        <IoIosHelpCircleOutline />
        <p className="text-xs text-gel-gray-2">
          Select your profile accent color
        </p>
      </div>
      <Select
        options={options}
        hideSelectedOptions
        value={selectedOption}
        onChange={handleChange}
        classNamePrefix="react-select"
        className="react-select-container"
        components={{
          ClearIndicator: undefined,
          IndicatorSeparator: undefined,
        }}
      />
    </div>
  );
};

export default SingleSelect;
