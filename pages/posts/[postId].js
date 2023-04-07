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
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();
  // const paths = data.map((post) => {
  //  return{
  //   params:{postId: `${post.id}`}
  //  }
  // });
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
};
