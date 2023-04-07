import Link from "next/link";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      {/* <Link href="/blog">Blogs</Link>
      <Link href="/product">Products</Link>
      <Link href="/docs">Docs</Link>
      <Link href="/posts">Posts</Link> */}
      <h1 style={{ textAlign: "center" }}>
        {" "}
        {session ? `${session.user.name.split(" ")[0]}, ` : ""}Welcome to Home
        Page
      </h1>
    </div>
  );
};

export default Home;
