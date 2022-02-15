import React from "react";
import "./UsersStyles.scss";
import { IUsers } from "../../utils/types";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../query/user";

const Users = () => {
  const { data, loading } = useQuery(GET_ALL_USERS);

  const [users, setUsers] = React.useState<IUsers[]>([]);

  React.useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  if (loading) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <div className="UsersContainer">
      {users[0] && (
        <div>
          {users.map((user) => {
            return (
              <div className="UserContainer" key={user.id}>
                {user.id}. {user.username} {user.age}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Users;
