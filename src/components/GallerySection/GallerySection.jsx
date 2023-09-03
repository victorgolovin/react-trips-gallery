import React from "react";
import Heading from "../Heading/Heading";
import GalleryCart from "../GalleryCart/GalleryCart";
import "./GallerySection.css";
import imgPeople from "../../assets/imgPeople.png";

const GallerySection = () => {
  return (
    <div>
      <Heading level="h1" text="Галерея путешествий" />
      <div className="background-first-travel-card ">
        <GalleryCart
          transport="на автобусе"
          peopleNumber={10}
          city="Тбилиси"
          month="Апрель"
          price={83000}
        />
      </div>
      <div className="background-second-travel-card ">
        <GalleryCart
          transport="на самолете"
          peopleNumber={false}
          city="Стамбул"
          month="Март"
          price={110000}
        />
      </div>
      <div className="background-third-travel-card ">
        <GalleryCart
          transport="на самолете"
          peopleNumber={15}
          city="Дубай"
          month="июнь"
          price={220000}
        />
      </div>
      <div className="background-fourth-travel-card ">
        <GalleryCart
          transport="самолет + паром"
          peopleNumber={11}
          city="Пхукет"
          month="сентябрь"
          price={135000}
        />
      </div>
    </div>
  );
};

export default GallerySection;
