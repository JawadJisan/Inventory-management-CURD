import React from "react";

import Modal from "react-modal";

const customStyles = {
  content: {
    width: '50%',
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: 'rgb(30,215,96,0.6)'
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");


//don't worry its just a package for modal. just go and explore https://www.npmjs.com/package/react-modal

export default function UpdateModal({ id, setIsReload, isReload }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }


  const handleUpdate = (event) => {
    event.preventDefault();
    const productName = event.target.productName.value;
    const productType = event.target.productType.value;
    const price = event.target.price.value;
    const description = event.target.description.value;



    // console.log(userName, textData);
    fetch(`http://localhost:4000/note/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productName, productType, price, description }),
    })
      .then((res) => res.json())
      .then((data) => setIsReload(!isReload));

    closeModal();
    
    

  };

  return (
    <div >
      <button onClick={openModal} className="btn bg-amber-700 m-3 "
        type='button'>
        {" "}
        Update
      </button>
      <Modal

        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="text-right">
          <button onClick={closeModal} className="btn btn-warning m-3 text-center items-center"
            type='button'>
            close
          </button>
        </div>
        <div className="text-center text-2xl font-bold" >Update Details</div>
        <div className=" p-3 color-4D4C7D">
          <form className="container " onSubmit={handleUpdate}>
            <div className="input-group mb-3 mt-5" >
              <input
                required
                type="text"
                className="form-control m-2 p-2 rounded-xl"
                placeholder="Product Name"
                aria-label="productName"
                name="productName"
              />
            </div>
            <div className="input-group mb-3 " >
              <input
                required
                type="text"
                className="form-control m-2 p-2 rounded-xl"
                placeholder="Product Type"
                aria-label="productType"
                name="productType"
              />
            </div>
            <div className="input-group mb-3 " >
              <input
                required
                type="text"
                className="form-control m-2 p-2 rounded-xl"
                placeholder="Price"
                aria-label="price"
                name="price"
              />
            </div>

            <div className="input-group">
              <textarea
                required
                placeholder="Description"
                className="form-control"
                aria-label="With textarea"
                name="description"
              ></textarea>
            </div>
            <div className="mt-4 text-center">
              <input type="submit" value="submit" className="btn btn-info" />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
