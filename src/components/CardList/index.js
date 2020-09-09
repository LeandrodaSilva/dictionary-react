import React from "react";
import "./styles.css";
import {useSelector} from "react-redux";
import {entries_map} from "../../store/wordSlice";
import Card from "../Card";

export default function CardList() {
  const entries = useSelector(entries_map);

  return (
    <div className="container-cards">
      {
        entries.map((entrie, index) => <Card key={index} entrie={entrie} />)
      }
    </div>
  )
}
