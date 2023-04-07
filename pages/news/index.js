const NewsArticleList = ({ articles }) => {
  return (
    <div>
      <h1>News Article List</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h3>
              {article.id} - {article.title} 👉 {article.catagory}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default NewsArticleList;

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
};
