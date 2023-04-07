import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <>
      <h2>List of Posts</h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <p>{post.id}</p>
              <p>{post.title}</p>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default PostList;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data.slice(0,3),
    },
  };
};
