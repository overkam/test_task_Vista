import React from "react";
import { NavLink } from "react-router-dom";
import "./Category.css";

const Category = (props) => {
  return (
    <div className="category">
      <NavLink to='/present'>Присутствуют ({props.state.presentPatients})</NavLink>
      <NavLink to='/quitting'>Выбывшие ({props.state.quittnigPatients})</NavLink>
    </div>
  );
};

export default Category;
