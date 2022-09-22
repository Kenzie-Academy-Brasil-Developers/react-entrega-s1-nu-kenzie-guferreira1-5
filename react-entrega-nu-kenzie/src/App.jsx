import { useState } from "react";

import { HomePage } from "./home";
import { Form } from "./components/Form";

import "./App.css";

const App = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  return (
    <div className="App">
      {isOpenForm ? (
        <Form
          changePages={() => setIsOpenForm(!isOpenForm)}
        />
      ) : (
        <HomePage
          changePages={() => setIsOpenForm(!isOpenForm)}
        />
      )}
    </div>
  );
};

export default App;
