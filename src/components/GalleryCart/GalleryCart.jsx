import React from "react";
import "./GalleryCart.css";

const GalleryCart = (props) => {
  return (
    <>
      <div className="cart-inner-top-info">
        <div className="cart-inner-top-transport-wrapper">
          <p className="cart-inner-top-transport">{props.transport}</p>
        </div>
        <div className="cart-inner-top-info-people-wrapper">
          {props.peopleNumber && (
            <p className="cart-inner-top-info-people-number">
              {props.peopleNumber}
            </p>
          )}
        </div>
      </div>
      <div className="cart-inner-bottom-info">
        <p className="cart-inner-bottom-info-text">
          {props.city}, {props.month} — {props.price}
        </p>
      </div>
    </>
  );
};

export default GalleryCart;
