import User from "../Components/User";

const Users = ({ users }) => {
  return (
    <>
      <h3>List of Users</h3>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user}/>
          </div>
        );
      })}
    </>
  );
};
export default Users;

//get static props with data
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
};
