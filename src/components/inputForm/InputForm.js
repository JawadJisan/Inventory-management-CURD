import React from "react";
import './Input.css'

const inputForm = ({ handlePost }) => {



  return (
    <div className=" p-3 abccc " style={{ backgroundColor: 'rgb(77,76,125)' }}>
      <form className="container text-center" onSubmit={handlePost}>
        <div className="input-group mb-3 mt-5  ">
          <input
            required
            type="text"
            className="form-control "
            placeholder="Product Name"
            aria-label="userName"
            name="productName"
          />
        </div>
        <div className="input-group mb-3">
          <input
            required
            type="text"
            className="form-control"
            placeholder="Product Type"
            aria-label="userName"
            name="productType"
          />
        </div>
        <div className="input-group mb-3  text-center">
          <input
          required
            type="number"
            className="form-control "
            placeholder="Price"
            aria-label="userName"
            name="price"
          />
        </div>

        <div className="input-group  abc">
          <span className="input-group-text">Description</span>
          <textarea
          required
            className="form-control "
            aria-label="With textarea"
            name="description"
          ></textarea>
        </div>
        <div className="mt-4 text-center">
          <input type="submit" value="submit" className="btn btn-info w-2/4" />
        </div>
      </form>
    </div>
  );
};

export default inputForm;
