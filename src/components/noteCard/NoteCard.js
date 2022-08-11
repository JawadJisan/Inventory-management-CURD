import React from 'react';
import UpdateModal from '../updateModal/UpdateModal';


const customStyles = {
  position: "absolute",
  top: "-40px",
  left: "43%",
  height: "70px",
  width: "70px",
};

const NoteCard = ({ note, handleDelete, isReload, setIsReload }) => {
  console.log('from Note Card', note)
  return (
    <div className="col mt-5" style={{ position: "relative", backgroundColor: 'rgb(122,208,167)', margin: '10px', borderRadius: '40px' }}>
      <div className="rounded h-100 color-060930 note-card m-10">
        <div
          className=" bg-warning  rounded-circle mx-auto mt-2"
          style={customStyles}
        >
          <p className="text-center p-2  fs-2 fw-bold text-dark">
            {" "}
            {note?.productName?.substring(0, 1)}
          </p>
        </div>
        {/* productName, productType, price, description */}
        <div className="card-body mt-5">
          <h2 className="font-bold" style={{ fontSize: '25px' }}>Product Name : {note?.productName}</h2>
          <h2 className="text-2xl">Product Type : {note?.productType}</h2>
          <p className="text-2xl font-semibold">Price: {note?.price}</p>
          <p className="text-2xl">Description: {note?.description}</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <div>
            <button
              className="btn bg-red-600 m-3 "
              type='button'

              onClick={() => handleDelete(note?._id)}
            >
              delete
            </button>
          </div>
          <UpdateModal setIsReload={setIsReload} isReload={isReload} id={note._id} />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;