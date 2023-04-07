import { useRouter } from "next/router";

const Post = ({ posts }) => {
  //if using fallback = true
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  /////////
  return (
    <>
      <h2>
        {posts.id} {posts.title}
      </h2>
      <h2>{posts.body}</h2>
    </>
  );
};

export default Post;

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { typecodeId: "1" },
      },
      {
        params: { typecodeId: "2" },
      },
      {
        params: { typecodeId: "3" },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/posts/${params.typecodeId}`
  );
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
    revalidate: 10,
  };
};
