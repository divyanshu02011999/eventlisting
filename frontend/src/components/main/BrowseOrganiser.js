import React, { useEffect, useState } from "react";
import app_config from "../../config";
import { NavLink } from "react-router-dom";

const BrowseOrganiser = () => {
  const { apiUrl } = app_config;
  const [orgList, setOrgList] = useState([]);

  const getEventData = async () => {
    const response = await fetch(`${apiUrl}/event/getall`);
    const data = await response.json();
    console.log(data);
    setOrgList(data);
  };

  useEffect(() => {
    getEventData();
  }, []);

  const displayEventList = () => {
    if (orgList.length) {
      return orgList.map((Organizer, index) => (
        <div className="col-md-4 mb-3">
          <div className="card" style={{ borderRadius: 15 }}>
            <div
              className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/12.webp"
                style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
                className="img-fluid"
                alt="Laptop"
              />
              <a href="#!">
                <div className="mask" />
              </a>
            </div>
            <div className="card-body pb-0">
              <div className="d-flex justify-content-between">
                <div>
                  <p>
                    <a href="#!" className="text-dark" style={{ fontWeight: 'bold' }}>
                      {Organizer.title}
                    </a>
                  </p>
                  <p className="small text-muted">Event</p>
                </div>
                <div>
                  <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p className="small text-muted">Rated 4.0/5</p>
                </div>
              </div>
            </div>
            <hr className="my-0" />
            <div className="card-body pb-0">
              <div className="d-flex justify-content-between">
                <p>
                  <a href="#!" className="text-dark-bold">
                   
                  </a>
                </p>
                <p className="text-dark"></p>
              </div>
              <p className="small text-muted"></p>
            </div>
            <hr className="my-0" />
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                <a href="#!" className="text-dark fw-bold">
                  Cancel
                </a>
                <NavLink to={'/main/organiserdetail/'+Organizer._id} className="btn btn-primary">
                  More Details
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ));
    } else {
      return <p>No Data Found</p>;
    }
  };

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row justify-content-center">{displayEventList()}</div>
      </div>
    </section>
  );
};

export default BrowseOrganiser;
