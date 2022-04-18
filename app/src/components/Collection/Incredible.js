import styles from "./Collection.module.css";
import lightOak from "../../assets/images/light_oak.jpg";
import lightOakRoom from "../../assets/images/light_oak_1.jpg";
import silverRustic from "../../assets/images/silver_rustic.jpg";
import silverRusticRoom from "../../assets/images/silver_rustic_1.jpg";
import toasted from "../../assets/images/toasted.jpg";
import toastedRoom from "../../assets/images/toasted_1.jpg";
import antique from "../../assets/images/antique.jpg";
import antiqueRoom from "../../assets/images/antique_1.jpg";
import wheatfeild from "../../assets/images/wheatfeild.jpg";
import wheatfeildRoom from "../../assets/images/wheatfeild_1.jpg";
import dawn from "../../assets/images/dawn.jpg";
import dawnRoom from "../../assets/images/dawn_1.jpg";
import weathered from "../../assets/images/weathered.jpg";
import weatheredRoom from "../../assets/images/weathered_1.jpg";
import twine from "../../assets/images/twine.jpg";
import twineRoom from "../../assets/images/twine_1.jpg";
import { Link } from "react-router-dom";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Incredible = ({ color }) => {
  SwiperCore.use([Navigation]);

  return (
    <div>
      <Swiper
        style={{
          height: 550,
          paddingTop: 15,
          paddingBottom: 50,
          paddingLeft: 5,
          paddingRight: 5,
        }}
        slidesPerView={"auto"}
        spaceBetween={35}
        navigation
      >
        {color !== "light oak" && (
          <SwiperSlide className={styles.slideContainer}>
            <div className={styles.productContainer}>
              <img src={lightOak} className={styles.image} />
              <div className={styles.infoContainer}>
                <p className={styles.title}>Light Oak</p>
                <div className={styles.buttonContainer}>
                  <Link to="/" className={styles.buyNowBtn}>
                    Buy Now
                  </Link>
                  <Link
                    to="/overview"
                    className={styles.detailsBtn}
                    state={{
                      style: "incredible",
                      closeImg: lightOak,
                      roomImg: lightOakRoom,
                      color: "light oak",
                    }}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        {color !== "silver rustic oak" && (
          <SwiperSlide className={styles.slideContainer}>
            <div className={styles.productContainer}>
              <img src={silverRustic} className={styles.image} />
              <div className={styles.infoContainer}>
                <p className={styles.title}>Silver Rustic Oak</p>
                <div className={styles.buttonContainer}>
                  <Link to="/" className={styles.buyNowBtn}>
                    Buy Now
                  </Link>
                  <Link
                    to="/overview"
                    className={styles.detailsBtn}
                    state={{
                      style: "incredible",
                      closeImg: silverRustic,
                      roomImg: silverRusticRoom,
                      color: "silver rustic oak",
                    }}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        {color !== "toasted barnboard" && (
          <SwiperSlide className={styles.slideContainer}>
            <div className={styles.productContainer}>
              <img src={toasted} className={styles.image} />
              <div className={styles.infoContainer}>
                <p className={styles.title}>Toasted Barnboard</p>
                <div className={styles.buttonContainer}>
                  <Link to="/" className={styles.buyNowBtn}>
                    Buy Now
                  </Link>
                  <Link
                    to="/overview"
                    className={styles.detailsBtn}
                    state={{
                      style: "incredible",
                      closeImg: toasted,
                      roomImg: toastedRoom,
                      color: "toasted barnboard",
                    }}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        {color !== "antique oak" && (
          <SwiperSlide className={styles.slideContainer}>
            <div className={styles.productContainer}>
              <img src={antique} className={styles.image} />
              <div className={styles.infoContainer}>
                <p className={styles.title}>Antique Oak</p>
                <div className={styles.buttonContainer}>
                  <Link to="/" className={styles.buyNowBtn}>
                    Buy Now
                  </Link>
                  <Link
                    to="/overview"
                    className={styles.detailsBtn}
                    state={{
                      style: "incredible",
                      closeImg: antique,
                      roomImg: antiqueRoom,
                      color: "antique oak",
                    }}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        {color !== "wheatfeild" && (
          <SwiperSlide className={styles.slideContainer}>
            <div className={styles.productContainer}>
              <img src={wheatfeild} className={styles.image} />
              <div className={styles.infoContainer}>
                <p className={styles.title}>Wheatfeild</p>
                <div className={styles.buttonContainer}>
                  <Link to="/" className={styles.buyNowBtn}>
                    Buy Now
                  </Link>
                  <Link
                    to="/overview"
                    className={styles.detailsBtn}
                    state={{
                      style: "incredible",
                      closeImg: wheatfeild,
                      roomImg: wheatfeildRoom,
                      color: "wheatfeild",
                    }}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        {color !== "dawn's early light" && (
          <SwiperSlide className={styles.slideContainer}>
            <div className={styles.productContainer}>
              <img src={dawn} className={styles.image} />
              <div className={styles.infoContainer}>
                <p className={styles.title}>Dawn's Early Light</p>
                <div className={styles.buttonContainer}>
                  <Link to="/" className={styles.buyNowBtn}>
                    Buy Now
                  </Link>
                  <Link
                    to="/overview"
                    className={styles.detailsBtn}
                    state={{
                      style: "incredible",
                      closeImg: dawn,
                      roomImg: dawnRoom,
                      color: "dawn's early light",
                    }}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        {color !== "weathered barnboard" && (
          <SwiperSlide className={styles.slideContainer}>
            <div className={styles.productContainer}>
              <img src={weathered} className={styles.image} />
              <div className={styles.infoContainer}>
                <p className={styles.title}>Weathered Barnboard</p>
                <div className={styles.buttonContainer}>
                  <Link to="/" className={styles.buyNowBtn}>
                    Buy Now
                  </Link>
                  <Link
                    to="/overview"
                    className={styles.detailsBtn}
                    state={{
                      style: "incredible",
                      closeImg: weathered,
                      roomImg: weatheredRoom,
                      color: "weathered barnboard",
                    }}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        {color !== "light twine" && (
          <SwiperSlide className={styles.slideContainer}>
            <div className={styles.productContainer}>
              <img src={twine} className={styles.image} />
              <div className={styles.infoContainer}>
                <p className={styles.title}>Light Twine</p>
                <div className={styles.buttonContainer}>
                  <Link to="/" className={styles.buyNowBtn}>
                    Buy Now
                  </Link>
                  <Link
                    to="/overview"
                    className={styles.detailsBtn}
                    state={{
                      style: "incredible",
                      closeImg: twine,
                      roomImg: twineRoom,
                      color: "light twine",
                    }}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        <div className={styles.viewVinylBtnContainer}>
          <Link to="/" className={styles.viewVinylBtn}>
            View all Vinyl
          </Link>
        </div>
      </Swiper>
    </div>
  );
};

export default Incredible;
