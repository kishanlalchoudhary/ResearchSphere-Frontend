import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import PropTypes from "prop-types";

const MultiSelectInput = ({ data, dataHandler }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState(null);

  useEffect(() => {
    const Objects = [];
    console.log(data);
    data.map((obj) => {
      Objects.push({ value: obj.name, label: obj.name });
    });
    console.log(Objects);
    setOptions(Objects);
  }, [data]);

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
    console.log(selectedOptions);
    setSelectedOptions(selectedOptions);
    dataHandler(selectedOptions);
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
};

export default MultiSelectInput;
