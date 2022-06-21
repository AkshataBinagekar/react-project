import React from "react";
import Lable from "./Lable";
import Input from "./Input";
const Form = () => {
  return (
    <div className="form">
      <form>
        <Lable for="Username" />
        <Input type="Username" />

        <br />
        <br />
        <Lable for="Password" />
        <Input type="Password" />
        <br />
        <br />
        <Lable for="Email" />
        <Input type="Email" />
        <br />
        <br />
        <div className="Button">
          <button>login</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
