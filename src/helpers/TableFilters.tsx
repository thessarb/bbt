import React, { useState } from "react";

interface FilterDialogProps {
  options: string[];
  onFilterChange: (filter: {
    searchTerm: string;
    order: string;
    selectedOptions: string[];
  }) => void;
  closeFilter: () => void;
}

const FilterDialog: React.FC<FilterDialogProps> = ({
  options,
  onFilterChange,
  closeFilter,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("asc");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    handleFilterChange(e.target.value, order, selectedOptions);
  };

  const handleOrderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOrder = e.target.value;
    setOrder(selectedOrder);
    handleFilterChange(searchTerm, selectedOrder, selectedOptions);
  };

  const handleOptionChange = (option: string) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((opt) => opt !== option)
      : [...selectedOptions, option];
    setSelectedOptions(updatedOptions);
    handleFilterChange(searchTerm, order, updatedOptions);
  };

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(options);
    }
    setSelectAll(!selectAll);
    handleFilterChange(searchTerm, order, !selectAll ? options : []);
  };

  const handleFilterChange = (
    search: string,
    order: string,
    options: string[]
  ) => {
    onFilterChange({
      searchTerm: search,
      order: order,
      selectedOptions: options,
    });
  };

  return (
    <div className="filter-dialog">
      <label className="caption__regular">Wortfilter</label>
      <div className="filter-dialog__search">
        <div className="form__field">
          <input
            id="username"
            className="form__input body-normal__regular"
            type="email"
            name="username"
            placeholder="Nach Wort filtern"
            onChange={handleSearchChange}
            required
          />
          <span className="error-message caption__regular">Error message</span>
        </div>
      </div>
      <hr />
      <div className="filter-dialog__order">
        <label className="caption__regular">Reihenfolge</label>
        <div className="filter-dialog__order-options form-radio">
          <label className="body-normal__regular radio-button">
            <input
              className="radio-input"
              type="radio"
              value="asc"
              checked={order === "asc"}
              onChange={handleOrderChange}
            />
            Absteigend (A ⇔ Z)
          </label>
          <label className="body-normal__regular radio-button">
            <input
              className="radio-input"
              type="radio"
              value="desc"
              checked={order === "desc"}
              onChange={handleOrderChange}
            />
            Aufsteigend (Z ⇔ A)
          </label>
        </div>
      </div>
      <hr />
      <div className="filter-dialog__select-all">
        <label className="body-normal__regular form-checkbox">
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAllChange}
          />
          Alle auswählen
        </label>
      </div>
      <div className="filter-dialog__options">
        {options.map((option) => (
          <label key={option} className="body-normal__regular form-checkbox">
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterDialog;
