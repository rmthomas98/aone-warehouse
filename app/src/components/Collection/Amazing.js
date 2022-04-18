import styles from "./Collection.module.css";
import arcticOak from "../../assets/images/arctic_oak.jpg";
import arcticOakRoom from "../../assets/images/arctic_oak_1.jpg";
import espressoOak from "../../assets/images/espresso_oak.jpg";
import espressoOakRoom from "../../assets/images/espresso_oak_1.jpg";
import smokeyOak from "../../assets/images/smokey_oak.jpg";
import smokeyOakRoom from "../../assets/images/smokey_oak_1.jpg";
import tavernOak from "../../assets/images/tavern_oak.jpg";
import tavernOakRoom from "../../assets/images/tavern_oak_1.jpg";
import carbonizedOak from "../../assets/images/carbonized_oak.jpg";
import carbonizedOakRoom from "../../assets/images/carbonized_oak_1.jpg";
import oiledOak from "../../assets/images/oiled_oak.jpg";
import oiledOakRoom from "../../assets/images/oiled_oak_1.jpg";
import heritageOak from "../../assets/images/heritage_oak.jpg";
import heritageOakRoom from "../../assets/images/heritage_oak_1.jpg";
import nickelFinished from "../../assets/images/nickel_finished.jpg";
import nickelFinishedRoom from "../../assets/images/nickel_finished_1.jpg";
import { Link } from "react-router-dom";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Amazing = ({ color }) => {
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
        {color !== "arctic oak" && (
          <SwiperSlide className={styles.slideContainer}>
            <div className={styles.productContainer}>
              <img src={arcticOak} className={styles.image} />
              <div className={styles.infoContainer}>
                <p className={styles.title}>Arctic Oak</p>
                <div className={styles.buttonContainer}>
                  <Link to="/" className={styles.buyNowBtn}>
                    Buy Now
                  </Link>
                  <Link
                    to="/overview"
                    className={styles.detailsBtn}
                    state={{
                      style: "amazing",
                      closeImg: arcticOak,
                      roomImg: arcticOakRoom,
                      color: "arctic oak",
                    }}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        {color !== "espresso oak" && (
          <SwiperSlide className={styles.slideContainer}>
            <div className={styles.productContainer}>
              <img src={espressoOak} className={styles.image} />
              <div className={styles.infoContainer}>
                <p className={styles.title}>Espresso Oak</p>
                <div className={styles.buttonContainer}>
                  <Link to="/" className={styles.buyNowBtn}>
                    Buy Now
                  </Link>
                  <Link
                    to="/overview"
                    className={styles.detailsBtn}
                    state={{
                      style: "amazing",
                      closeImg: espressoOak,
                      roomImg: espressoOakRoom,
                      color: "espresso oak",
                    }}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        {color !== "smokey oak" && (
          <SwiperSlide className={styles.slideContainer}>
            <div className={styles.productContainer}>
              <img src={smokeyOak} className={styles.image} />
              <div className={styles.infoContainer}>
                <p className={styles.title}>Smokey Oak</p>
                <div className={styles.buttonContainer}>
                  <Link to="/" className={styles.buyNowBtn}>
                    Buy Now
                  </Link>
                  <Link
                    to="/overview"
                    className={styles.detailsBtn}
                    state={{
                      style: "amazing",
                      closeImg: smokeyOak,
                      roomImg: smokeyOakRoom,
                      color: "smokey oak",
                    }}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        {color !== "tavern oak" && (
          <SwiperSlide className={styles.slideContainer}>
            <div className={styles.productContainer}>
              <img src={tavernOak} className={styles.image} />
              <div className={styles.infoContainer}>
                <p className={styles.title}>Tavern Oak</p>
                <div className={styles.buttonContainer}>
                  <Link to="/" className={styles.buyNowBtn}>
                    Buy Now
                  </Link>
                  <Link
                    to="/overview"
                    className={styles.detailsBtn}
                    state={{
                      style: "amazing",
                      closeImg: tavernOak,
                      roomImg: tavernOakRoom,
                      color: "tavern oak",
                    }}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        {color !== "carbonized oak" && (
          <SwiperSlide className={styles.slideContainer}>
            <div className={styles.productContainer}>
              <img src={carbonizedOak} className={styles.image} />
              <div className={styles.infoContainer}>
                <p className={styles.title}>Carbonized Oak</p>
                <div className={styles.buttonContainer}>
                  <Link to="/" className={styles.buyNowBtn}>
                    Buy Now
                  </Link>
                  <Link
                    to="/overview"
                    className={styles.detailsBtn}
                    state={{
                      style: "amazing",
                      closeImg: carbonizedOak,
                      roomImg: carbonizedOakRoom,
                      color: "carbonized oak",
                    }}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        {color !== "naturally oiled oak" && (
          <SwiperSlide className={styles.slideContainer}>
            <div className={styles.productContainer}>
              <img src={oiledOak} className={styles.image} />
              <div className={styles.infoContainer}>
                <p className={styles.title}>Naturally Oiled Oak</p>
                <div className={styles.buttonContainer}>
                  <Link to="/" className={styles.buyNowBtn}>
                    Buy Now
                  </Link>
                  <Link
                    to="/overview"
                    className={styles.detailsBtn}
                    state={{
                      style: "amazing",
                      closeImg: oiledOak,
                      roomImg: oiledOakRoom,
                      color: "naturally oiled oak",
                    }}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        {color !== "heritage oak" && (
          <SwiperSlide className={styles.slideContainer}>
            <div className={styles.productContainer}>
              <img src={heritageOak} className={styles.image} />
              <div className={styles.infoContainer}>
                <p className={styles.title}>Heritage Oak</p>
                <div className={styles.buttonContainer}>
                  <Link to="/" className={styles.buyNowBtn}>
                    Buy Now
                  </Link>
                  <Link
                    to="/overview"
                    className={styles.detailsBtn}
                    state={{
                      style: "amazing",
                      closeImg: heritageOak,
                      roomImg: heritageOakRoom,
                      color: "tavern oak",
                    }}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        {color !== "nickel finished oak" && (
          <SwiperSlide className={styles.slideContainer}>
            <div className={styles.productContainer}>
              <img src={nickelFinished} className={styles.image} />
              <div className={styles.infoContainer}>
                <p className={styles.title}>Nickel Finished Oak</p>
                <div className={styles.buttonContainer}>
                  <Link to="/" className={styles.buyNowBtn}>
                    Buy Now
                  </Link>
                  <Link
                    to="/overview"
                    className={styles.detailsBtn}
                    state={{
                      style: "amazing",
                      closeImg: nickelFinished,
                      roomImg: nickelFinishedRoom,
                      color: "nickel finished oak",
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

export default Amazing;
