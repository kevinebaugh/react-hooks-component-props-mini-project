import React from "react";
import Article from "./Article"

function ArticleList({posts}) {
  const mainList = posts.map((post) => {
    return <Article key="post"/>
  })

  return (
    <main>
      {mainList}
    </main>
  );
}

export default ArticleList;
