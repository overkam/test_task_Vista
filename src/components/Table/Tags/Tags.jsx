import React from "react";
import { Route } from "react-router-dom";
import "./Tags.css";

const Tags = () => {
  return (
    <div className="tags">
      <div className="tags_number">№ ИБ</div>
      <div className="tags_name">ФИО</div>
      <Route path='/present' render = {() => <div className="tags_room">Палата</div>} />
      <Route path='/quitting' render = {() => <div className="tags_cause">Причина выбытия</div>} />
    </div>
  );
};

export default Tags;
