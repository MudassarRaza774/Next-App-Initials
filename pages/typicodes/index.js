import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <>
      <h2>List of Posts</h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/typicodes/${post.id}`}>
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
  const response = await fetch("http://localhost:4000/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
};
