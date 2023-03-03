import React from "react";
import { useDispatch } from "react-redux";
import { filterChange } from "../reducers/filterReducer";

function VisibilityFilter() {
    const dispatch = useDispatch();

  return (
    <div>
      all{" "}
      <input
        type="radio"
        name="filter"
        onChange={(e) => dispatch(filterChange("ALL"))}
      />
      important{" "}
      <input
        type="radio"
        name="filter"
        onChange={() => dispatch(filterChange("IMPORTANT"))}
      />
      nonimportant{" "}
      <input
        type="radio"
        name="filter"
        onChange={() => dispatch(filterChange("NONIMPORTANT"))}
      />
    </div>
  );
}

export default VisibilityFilter;
