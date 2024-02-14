import React, { useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import styles from "./App.module.css";
import logo from "../logo.png";
// components
import SearchBar from "./search_work/searchBar";
import Posts from "./posts_work/posts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <div className={styles.App}>
          <header>
            <img src={logo} className={styles.logo} alt="reddit-logo" />
            <div className={styles.searchbar}>
              <SearchBar />
            </div>
          </header>

          <Posts />
        </div>
      }
    >
      <Route
        path=":hell"
        element={
          <div>{/* ТУТ будет компонент с постом(одним) и/или автором */}</div>
        }
      ></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} className={styles.App} />;
}

export default App;
