// Imports
import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import PropTypes from "prop-types";

const MultiSelectInput = ({ data, dataHandler, selectedData }) => {
  // States
  const [selectedOptions, setSelectedOptions] = useState(null);
  const [options, setOptions] = useState(null);

  useEffect(() => {
    const SelectedObjects = [];
    // console.log(selectedData);
    selectedData.map((obj) => {
      SelectedObjects.push({ value: obj.name, label: obj.name });
    });
    // console.log(SelectedObjects);
    setSelectedOptions(SelectedObjects);
    const Objects = [];
    // console.log(data);
    data.map((obj) => {
      Objects.push({ value: obj.name, label: obj.name });
    });
    // console.log(Objects);
    setOptions(Objects);
  }, [data, selectedData]);

  // New Option Handler
  const handleCreateOption = (inputValue) => {
    if (inputValue.trim() === "") return;

    const newOption = {
      value: inputValue.toLowerCase(),
      label: inputValue,
    };

    setOptions([...options, newOption]);
    setSelectedOptions([...selectedOptions, newOption]);
  };

  // Selected Options Handler
  const handleSelectChange = (selectedOptions) => {
    // console.log(selectedOptions);
    dataHandler(selectedOptions);
    setSelectedOptions(selectedOptions);
  };

  return (
    <div>
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

MultiSelectInput.propTypes = {
  data: PropTypes.array.isRequired,
  dataHandler: PropTypes.func.isRequired,
  selectedData: PropTypes.array.isRequired,
};

export default MultiSelectInput;
