import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import PostList from "./component/list/PostList";
import CommentList from "./component/list/CommentList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
        <PostList />
        <CommentList />
    </React.StrictMode>
);
