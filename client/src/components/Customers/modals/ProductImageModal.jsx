import "./ProductImageModal.css";

const ProductImageModal = ({ imageView, handleShowModal, singleImage }) => {
  return (
    <div className={`modal product-image ${imageView ? "active" : ""}`}>
      <div className="modal-wrapper">
        <div className="modal-contents-container">
          <button className="close-button" onClick={handleShowModal}>
            &times;
          </button>
          <div className="img-wrapper">
            <img src={singleImage} alt="Selected product view" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageModal;
