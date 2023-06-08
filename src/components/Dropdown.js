import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

export default function Dropdown({ selected, setSelected }) {
  const [isActive, setActive] = useState(false);
  const options = ["Yes", "Probably Not"];
  return (
    <div className="dropdown">
      <h4>Should use a dropdown ?</h4>
      <span className="pad-10">{selected}</span>
      <div className="dropdown-btn" onClick={(e) => setActive(!isActive)}>
        Select <ArrowDropDownIcon />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
