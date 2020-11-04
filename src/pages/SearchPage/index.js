import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {entries_map, wordActions} from "../../store/wordSlice";
import Search from "../../components/Search";
import Button from "../../components/Button";
import CardList from "../../components/CardList";
import "./styles.css";
import {text_map} from "../../store/searchSlice";
import dictionary from "../../services/dictionary";
import SessionStorage from "../../util/SessionStorage";
import View from "../../components/View";

export default function SearchPage() {
  const [isLoading, setIsLoading] = useState(false);
  const entries = useSelector(entries_map);
  const text = useSelector(text_map);
  const dispatch = useDispatch();

  async function search(evt) {
    evt.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    try {
      const resp = await dictionary.get(`search?word=${text}`,
        {
          headers: {
            'Authorization': 'Bearer ' + SessionStorage.getSession(),
          }
        }
      );

      dispatch(wordActions.setEntries(resp.data));
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
    return null;
  }

  return (
    <View>
      <div className="container-search">
        <h2>Search words in Lingua Robot</h2>
        <form autoComplete="off">
          <Search />
          <Button onClick={search} type="submit" text={isLoading ? "...Loading" : "Search"} />
        </form>
        <div>{entries.length ? <CardList /> : null}</div>
      </div>
    </View>
  )
}
