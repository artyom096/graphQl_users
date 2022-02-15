import React from "react";
import "./FormStyles.scss";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../query/user";
import { CREATE_USER } from "../mutations/user";

const Form = () => {
  const [userName, setUserName] = React.useState<string>("");
  const [userAge, setUserAge] = React.useState<number>(0);

  const { refetch } = useQuery(GET_ALL_USERS);
  const [addUser, { data: updatedData }] = useMutation(CREATE_USER);

  React.useEffect(() => {
    refetchData();
  }, [updatedData]);

  const refetchData = async (e?: React.FormEvent) => {
    e && e.preventDefault();
    try {
      refetch();
    } catch (e) {
      console.log(e);
    }
  };

  const createUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName && userAge) {
      try {
        addUser({
          variables: {
            input: {
              username: userName,
              age: userAge,
            },
          },
        });
      } catch (e) {
        console.log(e);
      } finally {
        setUserAge(0);
        setUserName("");
      }
    }
  };

  return (
    <form className="Form">
      <div className="InputContainer">
        <label htmlFor="Name">Имя:</label>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserName(e.target.value)
          }
          value={userName}
          id="Name"
          type="text"
          className="Input"
        />
      </div>
      <div className="InputContainer">
        <label htmlFor="Age">Возраст:</label>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserAge(Number(e.target.value))
          }
          value={userAge}
          id="Age"
          type="number"
          className="Input"
        />
      </div>
      <div className="ButtonContainer">
        <button onClick={(e) => refetchData(e)} className="Button ButtonGet">
          Получить
        </button>
        <button onClick={(e) => createUser(e)} className="Button">
          Создать
        </button>
      </div>
    </form>
  );
};

export default Form;
