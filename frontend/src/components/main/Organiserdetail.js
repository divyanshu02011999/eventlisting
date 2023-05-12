import React from "react";
import { useParams } from "react-router-dom";

const Organiserdetail = () => {
  const { id } = useParams();

  return (
    <div>
      <center>
        <h1>Organiserdetail</h1>
      </center>
    </div>
  );
};

export default Organiserdetail;
