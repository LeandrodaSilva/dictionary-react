import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {entries_map, wordActions} from "../../store/wordSlice";
import Search from "../../components/Search";
import Button from "../../components/Button";
import CardList from "../../components/CardList";
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {text_map} from "../../store/searchSlice";
import dictionary from "../../services/dictionary";

export default function SearchPage() {
  const entries = useSelector(entries_map);
  const text = useSelector(text_map);
  const dispatch = useDispatch();

  async function search(evt) {
    evt.preventDefault();
    const resp = await dictionary.get(`search?word=${text}`);

    dispatch(wordActions.setEntries(resp.data));
  }

  return (
    <>
      <Header />
      <main>
        <form autoComplete="off">
          <Search />
          <Button onClick={search} type="submit" text="Search" />

          {entries.length ? <CardList /> : null}
        </form>
      </main>
      <Footer />
    </>
  )
}
