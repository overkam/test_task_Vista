import React from "react";
import { NavLink } from "react-router-dom";
import "./Category.css";

const Category = (props) => {
  let presentCount;
  let quittingCount;

  if (props.state.presentPatients) {
    presentCount = props.state.presentPatients.length;
  }
  if (props.state.presentPatients) {
    quittingCount = props.state.quittingPatients.length;
  }

  return (
    <div className="category">
      <NavLink
        className="category_item"
        to="/present"
      >
        Присутствуют ({presentCount})
      </NavLink>
      <NavLink
        className="category_item"
        to="/quitting"
      >
        Выбывшие ({quittingCount})
      </NavLink>
    </div>
  );
};

export default Category;
