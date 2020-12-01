import React from "react";
import Category from "./Category/Category";
import Present from "./Present/Present";
import Quitting from "./Quitting/Quitting";
import "./Table.css";
import Tags from "./Tags/Tags";
import { Route } from "react-router-dom";

const Table = (props) => {
  return (
    <div className='table-content'>
      <Category state={props.state}/>
      <Tags />
      <Route path='/present' render = {() => <Present state={props.state}/>} />
      {/* <Route path='/quitting' render = {() => <Quitting state={props.state}/>} /> */}
    </div>
  );
};

export default Table;
