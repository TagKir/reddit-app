import React, { useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import styles from "./App.module.css";
import { useDispatch } from "react-redux";

// components
import Posts from "./posts/posts_work/posts_work";
import Header from "./header/header";
import PostPage from "./posts/postPage_work/postPage";

// soft
import { popular } from "../features/reddit/reddit_soft";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(popular());
  }, [dispatch]);

  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/">
            <Route
              index
              element={
                <div className={styles.App}>
                  <Header />
                  <Posts />
                </div>
              }
            />
            <Route
              path="/:postId"
              element={
                <div className={styles.App}>
                  <Header />
                  <PostPage />
                </div>
              }
            />
          </Route>
        )
      )}
      className={styles.App}
    />
  );
}

export default App;
