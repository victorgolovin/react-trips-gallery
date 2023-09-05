import React from "react";
import Heading from "../Heading/Heading";
import GalleryCart from "../GalleryCart/GalleryCart";
import "./GallerySection.css";


const GallerySection = () => {
  return (
    <div>
      <Heading level="h1" text="Галерея путешествий" />
      <div className="background-first-travel-card ">
        <GalleryCart
          transport="на автобусе"
          peopleNumber={10}
          city="Тбилиси"
          month="апрель"
          price={'83.000'}
        />
      </div>
      <div className="background-second-travel-card ">
        <GalleryCart
          transport="на самолете"
          peopleNumber={false}
          city="Стамбул"
          month="Март"
          price={'110.000'}
        />
      </div>
      <div className="background-third-travel-card ">
        <GalleryCart
          transport="на самолете"
          peopleNumber={15}
          city="Дубай"
          month="июнь"
          price={'220.000'}
        />
      </div>
      <div className="background-fourth-travel-card ">
        <GalleryCart
          transport="самолет + паром"
          peopleNumber={11}
          city="Пхукет"
          month="сентябрь"
          price={'135.000'}
        />
      </div>
    </div>
  );
};

export default GallerySection;