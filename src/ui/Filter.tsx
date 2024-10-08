import { useSearchParams } from "react-router-dom";

type filterProp = {
  filterField: string;
  options: {
    label: string;
    value: string;
  }[];
};
const Filter = ({ filterField, options }: filterProp) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const currentFilter = searchParam.get(filterField) || options[0].value;
  const handleClick = (value: string) => {
    searchParam.set(filterField, value);
    setSearchParam(searchParam);
  };
  return (
    <div className="flex rounded-md gap-1 overflow-auto text-white border border-gray-500 ">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleClick(option.value)}
          className={`${
            currentFilter === option.value && "bg-yellow-600 "
          } border-none rounded-sm px-2 py-1  hover:bg-yellow-600`}
          disabled={currentFilter === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
