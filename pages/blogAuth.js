import { useState, useEffect } from "react";
import { getSession, signIn, useSession } from "next-auth/react";
import Router from "next/router";

const BlogAuth = ({ data }) => {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const securePage = async () => {
  //     const session = await getSession();
  //     !session ? Router.push("/") : setLoading(false);
  //   };
  //   securePage();
  // }, []);
  // return <div>{loading ? <h1>Loading...</h1> : <h1>{data}</h1>}</div>;
  return <h1 style={{ textAlign: "center" }}>{data}</h1>;
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination:
          "/api/auth/signin?callbackUrl=http://localhost:3000/blogAuth",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
      data: session ? "Premium Stuff 👍" : "Free Stuff 👎",
    },
  };
};

export default BlogAuth;
