import React, { useContext } from "react";
import { AppContext } from "../Services/context";

const Panel = ({ text,children }) => {
    const {tipoPessoa}=useContext(AppContext)
  return (
    <div className="Panel container-fluid">
     
      <div className="container">
      <h3 className="mt-3">{text}</h3>
      <hr />
      {children}
      </div>
    </div>
  );
};

export default Panel;
