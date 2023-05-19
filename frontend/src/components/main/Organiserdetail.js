import React from "react";
import { useParams } from "react-router-dom";

const Organiserdetail = () => {
  const { id } = useParams();

  return (
    <div>
      <center>
        <h1>Organiserdetail</h1>
        <p>Ceremony, an event of ritual significance, performed on a special occasion
Convention (meeting), a gathering of individuals engaged in some common interest
Event management, the organization of events
Festival, an event that celebrates some unique aspect of a community
Happening, a type of artistic performance
Media event, an event created for publicity
Party, a social, recreational or corporate events held
Sporting event, at which athletic competition takes place
Virtual event, a gathering of individuals within a virtual environment</p>
        <img src="https://www.weddingsutra.com/images/Vendor_Images/Wedding_Planners/Version-Events-and-Weddings/version-events-thumb.jpg"></img>
      </center>
    </div>
  );
};

export default Organiserdetail;
