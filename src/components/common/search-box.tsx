import React from "react";

interface SearchBoxProps {

}

export default class SearchBox ({value: any, onChange: () => void}, {}) {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3"
      placeholder="Search..."
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};
