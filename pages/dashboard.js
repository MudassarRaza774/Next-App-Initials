import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(true);
  useEffect(() => {
    const fetchDashboardData = async () => {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    };
    fetchDashboardData();
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h3 style={{ textAlign: "center", fontFamily:'sans-serif' }}>FETCH</h3>
      <div
        style={{
          textAlign: "center",
          margin: "30px 30px",
          borderStyle: "solid",
          borderRadius: "20px",
          padding: "30px",
        }}
      >
        Posts: {dashboardData.posts}
        <hr />
        Likes: {dashboardData.likes}
        <hr />
        Followers: {dashboardData.followers}
        <hr />
        Following: {dashboardData.following}
        <hr />
      </div>
    </div>
  );
};

export default Dashboard;
