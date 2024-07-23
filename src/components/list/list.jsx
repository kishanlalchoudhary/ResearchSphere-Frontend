import PropTypes from "prop-types";
import { useState } from "react";

const List = ({ list, addDataHandler, deleteDataHandler }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      addDataHandler(inputValue);
      setInputValue("");
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
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleAdd}
          className="input input-bordered w-full rounded"
        />
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
