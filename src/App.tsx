import "./AppStyles.scss";
import Form from "./components/Form";
import Users from "./components/Users";

const App = () => {
  return (
    <div className="FormContainer">
      <Form />
      <Users />
    </div>
  );
};

export default App;
