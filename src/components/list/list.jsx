import PropTypes from "prop-types";
import { useState } from "react";

const List = ({ list, addDataHandler, deleteDataHandler }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      addDataHandler(inputValue);
      setInputValue(""); 
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-wrap items-center border border-gray-300 p-2 rounded-lg">
      <div className="flex flex-wrap items-center gap-2 w-full">
        {list.map((data, index) => (
          <span
            key={index}
            className="flex items-center bg-gray-200 rounded px-2 py-1"
          >
            {data}
            <button
              type="button"
              className="ml-2 text-red-600"
              onClick={() => deleteDataHandler(index)}
            >
              &times;
            </button>
          </span>
        ))}
        <div className="flex w-full gap-1">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="input input-bordered w-5/6 rounded"
          />
          <button className="bg-primary text-white w-1/6 rounded" onClick={handleAdd}>+</button>
        </div>
      </div>
    </div>
  );
};

List.propTypes = {
  list: PropTypes.array.isRequired,
  addDataHandler: PropTypes.func.isRequired,
  deleteDataHandler: PropTypes.func.isRequired,
};

export default List;
