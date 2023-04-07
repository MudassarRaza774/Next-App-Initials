import { getSession, signIn } from "next-auth/react";
import Router from "next/router";
import { useState, useEffect } from "react";
const DashboardAuth = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        // signIn();
        Router.push("/");
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  return (
    <div>{loading ? <h1>Loading...</h1> : <h1>Dashboard Auth Page</h1>}</div>
  );
};

export default DashboardAuth;
