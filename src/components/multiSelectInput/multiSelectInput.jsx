import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";

const MultiSelectInput = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState([
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    // ... other existing options
  ]);

  const handleCreateOption = (inputValue) => {
    if (inputValue.trim() === "") return;

    const newOption = {
      value: inputValue.toLowerCase(),
      label: inputValue,
    };

    setOptions([...options, newOption]);
    setSelectedOptions([...selectedOptions, newOption]);
  };

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  return (
    <div >
      <CreatableSelect

        isMulti
        value={selectedOptions}
        options={options}
        onChange={handleSelectChange}
        onCreateOption={handleCreateOption}
        formatCreateLabel={(inputValue) => `"${inputValue}"`}
      />
    </div>
  );
};

export default MultiSelectInput;
