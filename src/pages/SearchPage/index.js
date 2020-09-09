import React from "react";
import {useSelector} from "react-redux";
import {entries_map} from "../../store/wordSlice";
import Search from "../../components/Search";
import Button from "../../components/Button";
import CardList from "../../components/CardList";
import "./styles.css";

export default function SearchPage() {
  const entries = useSelector(entries_map);

  return (
    <main>
      <form autoComplete="off">
        <Search />
        <Button />

        {entries.length ? <CardList /> : null}
      </form>
    </main>
  )
}
