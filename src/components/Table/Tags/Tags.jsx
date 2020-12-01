import React from "react";
import { Route } from "react-router-dom";
import "./Tags.css";

const Tags = () => {
  return (
    <div className="tags">
      <div>№ ИБ</div>
      <div>ФИО</div>
      <Route path='/present' render = {() => <div>Палата</div>} />
      <Route path='/quitting' render = {() => <div>Причина выбытия</div>} />
    </div>
  );
};

export default Tags;
