import "../select.css";
import React from "react";
import Select, { MultiValue } from "react-select";
import { IoIosHelpCircleOutline } from "react-icons/io";

export type OptionType = { value: string; label: string };

export type MultiSelectProps = {
  maxSelected: number;
  options: OptionType[];
  selectedOptions: OptionType[];
  onChange: (selectedOptions: OptionType[]) => void;
};

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  onChange,
  maxSelected,
  selectedOptions,
}) => {
  const handleChange = (selectedValues: MultiValue<OptionType>) => {
    if (Array.isArray(selectedValues)) {
      if (selectedValues.length <= maxSelected) {
        onChange(selectedValues);
      }
    }
  };

  return (
    <div>
      <label
        htmlFor="interest"
        className="ml-2 mb-2 block text-sm font-semibold"
      >
        Interests
      </label>
      <div className=" flex gap-2 items-center text-xs text-gel-gray ml-2 mb-3">
        <IoIosHelpCircleOutline />
        <p className="text-xs text-gel-gray-2">Select at most four interests</p>
      </div>
      <Select
        isMulti
        options={options}
        hideSelectedOptions
        value={selectedOptions}
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

export default MultiSelect;
