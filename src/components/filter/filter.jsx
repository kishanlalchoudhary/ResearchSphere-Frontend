import { useState } from "react";

const Filter = () => {
  //hooks
  const [selectedDomain, setSelectedDomain] = useState("");
  const [selectedDuration, setSelectedDuration] = useState(1);

  //functions
  const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
  };
  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };

  return (
    <div className="lg:mx-4 lg:p-6 border border-secondary rounded-lg shadow-md bg-accent flex flex-col">
      <h2 className="text-2xl font-semibold mb-4 w-full text-center lg:flex hidden">
        Filter
      </h2>
      <div className="collapse bg-base-200 lg:hidden rounded-none">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-accent text-primary peer-checked:bg-secondary peer-checked:text-secondary-content">
          <h2 className="text-lg font-semibold w-full text-center">
            Apply Filters
          </h2>
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <div className="flex-1 py-4">
            <label htmlFor="domain" className="block mb-1 text-sm font-medium">
              Domain
            </label>
            <select
              className="select select-primary w-full "
              id="domain"
              value={selectedDomain}
              onChange={handleDomainChange}
            >
              <option value="">All Domains</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="AI/ML">AI/ML</option>
              <option value="Data Science">Data Science</option>
              <option value="IOT">IOT</option>
            </select>
          </div>
          {/* Duration Filter */}
          <div className="flex-1">
            <label
              htmlFor="duration"
              className="block mb-1 text-sm font-medium"
            >
              Duration (Months)
            </label>
            <input
              type="range"
              min={1}
              max={6}
              onChange={handleDurationChange}
              value={selectedDuration}
              className="range range-primary"
              step={1}
            />
            <div className="w-full flex justify-between text-xs px-2">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex hidden lg:flex-col">
        {/* Domain Filter */}
        <div className="flex-1 py-4">
          <label htmlFor="domain" className="block mb-1 text-sm font-medium">
            Domain
          </label>
          <select
            className="select select-primary w-full "
            id="domain"
            value={selectedDomain}
            onChange={handleDomainChange}
          >
            <option value="">All Domains</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="AI/ML">AI/ML</option>
            <option value="Data Science">Data Science</option>
            <option value="IOT">IOT</option>
          </select>
        </div>
        {/* Duration Filter */}
        <div className="flex-1">
          <label htmlFor="duration" className="block mb-1 text-sm font-medium">
            Duration (Months)
          </label>
          <input
            type="range"
            min={1}
            max={6}
            onChange={handleDurationChange}
            value={selectedDuration}
            className="range range-primary"
            step={1}
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;
