import React from "react";
import { Spinner } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const LoadingPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner color="primary" />
    </div>
  );
};

export default LoadingPage;