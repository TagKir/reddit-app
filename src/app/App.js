import React, { useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import styles from "./App.module.css";
import { useDispatch } from "react-redux";

// components
import Posts from "./posts/posts_work/posts_work";
import Header from "./header/header";
import PostPage from "./posts/postPage_work/postPage";

// soft
import { popular } from "../features/reddit/reddit_soft";
import Users from "./users/users_work/users_work";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(popular());
  }, [dispatch]);

  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route
            path="/"
            element={
              <div className={styles.App}>
                <Header />
                <Outlet />
              </div>
            }
          >
            <Route
              index
              element={
                <div className={styles.App}>
                  <Posts />
                </div>
              }
            />
            <Route
              path="/posts/:postId"
              element={
                <div className={styles.App}>
                  <PostPage />
                </div>
              }
            />
            <Route
              path="/users/:userId"
              element={
                <div className={styles.App}>
                  <Users />
                </div>
              }
            />
          </Route>
        )
      )}
    />
  );
}

export default App;
