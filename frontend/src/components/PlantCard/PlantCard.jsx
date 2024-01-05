/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardContent from "../CardContent/CardContent";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import { register } from "swiper/element/bundle";

register();

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const PlantCard = ({ listagemTotal = false, filter }) => {
  //const [slides, setSlides] = useState(4);
  const plants = useSelector((state) => state.plants.plants);

  const navigate = useNavigate();

  const handleProductDetails = (id) => {
    navigate(`/products/${id}`);
  };

  //responsividade
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 720) {
  //       setSlides(1);
  //     }else{
  //       setSlides(4)
  //     }
  //   };

  //   handleResize()
  //   window.addEventListener("resize", handleResize)

  //   return() => {
  //     window.removeEventListener("resize", handleResize)
  //   }
  // }, []);

  return (
    <Swiper
      spaceBetween={50}
      className={styles.swiperContainer}
      onReachEnd={(teste) => {
        console.log(teste);
      }}
      breakpoints={{
        1700: {
          slidesPerView: 4.5,
        },
        1440: {
          slidesPerView: 3.25,
        },
        1300: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 2.5,
        },
        769: {
          slidesPerView: 2.25,
          spaceBetween: 35,
        },
        568: {
          slidesPerView: 1.75,
          spaceBetween: 25,
        },
        425: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },

        320: {
          slidesPerView: 1.15,
          spaceBetween: 15,
        },
        0: {
          slidesPerView: 1.05,
          spaceBetween: 10,
        },
      }}
    >
      {plants
        .filter((plant) => (listagemTotal ? true : plant.isInSale === filter))
        .map((plant) => (
          <SwiperSlide key={plant.id} className={styles.slideContainer}>
            <div className={styles.productList}>
              <button onClick={() => handleProductDetails(plant.id)}>
                <CardContent
                  id={plant.id}
                  name={plant.name}
                  price={plant.price}
                  label={plant.label[1]}
                  discont={plant.discountPercentage}
                  isInSale={plant.isInSale}
                  img={plant.img}
                />
              </button>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default PlantCard;
