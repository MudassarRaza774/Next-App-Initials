import useSWR from "swr";

const fetchDashboardData = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

const DashboardSWR = () => {
  const { data, error } = useSWR("dashboardData", fetchDashboardData);

  return (
    <div>
      <h3 style={{ textAlign: "center", fontFamily: "sans-serif" }}>S-W-R</h3>
      {!data ? (
        "Loading"
      ) : error ? (
        "An error occured"
      ) : (
        <div
          style={{
            textAlign: "center",
            margin: "30px 30px",
            borderStyle: "solid",
            borderRadius: "20px",
            padding: "30px",
          }}
        >
          Posts: {data.posts}
          <hr />
          Likes: {data.likes}
          <hr />
          Followers: {data.followers}
          <hr />
          Following: {data.following}
          <hr />
        </div>
      )}
    </div>
  );
};

export default DashboardSWR;
