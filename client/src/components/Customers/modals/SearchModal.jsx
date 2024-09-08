import React from "react";

import "./SearchModal.css";

import { useSelector, useDispatch } from "react-redux";

import { closeSearchModal } from "../../../Redux/Features/SearchSlice";

import ModalTestingImage from "../../../assets/images/assets/food_11.png";

const SearchModal = () => {
  const dispatch = useDispatch();

  const displaySearchModal = useSelector(
    (state) => state.search.displaySearchModal
  );

  const handleCloseModal = () => {
    dispatch(closeSearchModal());
  };

  return (
    <div
      className={`modal search-modal ${displaySearchModal ? "active" : null} `}
    >
      <div className="modal-wrapper">
        <button className="close-button" onClick={handleCloseModal}>
          &times;
        </button>
        <div className="modal-contents-container">
          <p className="small-header">{"SEARCH RESULTS"}</p>
          <div className="grid">
            <div className="card">
              <div className="img-wrapper">
                <img src={ModalTestingImage} alt="" />
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
            <div className="card">
              <div className="img-wrapper">
                <img src={ModalTestingImage} alt="" />
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
            <div className="card">
              <div className="img-wrapper">
                <img src={ModalTestingImage} alt="" />
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
            <div className="card">
              <div className="img-wrapper">
                <img src={ModalTestingImage} alt="" />
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
            <div className="card">
              <div className="img-wrapper">
                <img src={ModalTestingImage} alt="" />
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
            <div className="card">
              <div className="img-wrapper">
                <img src={ModalTestingImage} alt="" />
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
