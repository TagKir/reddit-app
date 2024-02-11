import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./App.module.css";
import logo from "../logo.png";
// components
import SearchBar from "./search/searchBar";
import Posts from "./posts/posts";

function App() {
  return (
    <div className={styles.App}>
      <header>
        <img src={logo} className={styles.logo} alt="reddit-logo" />
        <div className={styles.searchbar}>
          <SearchBar />
        </div>
      </header>
      <Posts />
    </div>
  );
}

export default App;
