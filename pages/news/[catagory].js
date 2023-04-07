const ArticleListByCatagory = ({ articles, catagory }) => {
  return (
    <div>
      <h1>Showing news for catagory: {catagory}</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h3>
              {article.title} - {article.catagory}
              <hr/>
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleListByCatagory;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { catagory } = params;
  const response = await fetch(
    `http://localhost:4000/news?catagory=${catagory}`
  );
  const data = await response.json();
  return {
    props: {
      articles: data,
      catagory,
    },
  };
};
