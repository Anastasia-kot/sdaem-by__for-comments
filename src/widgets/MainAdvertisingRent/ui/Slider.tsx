import React, { FC } from "react";
import Slider from "react-slick";
import { CatalogueType } from "../../../../types/catalogue_data";
import { CatalogueCard } from "../../../entities/CatalogueCard/CatalogueCard";
import styles from './MainAdvertisingRent.module.scss'



export const SimpleSlider: FC<{ data: CatalogueType[] }> = ({  data }) => {

    const SampleArrow = (props) => <button onClick={props.onClick} className={styles.slider__button} />

    const settings = {
        prevArrow: <SampleArrow />,
        nextArrow: <SampleArrow />,
        lazyLoad: true,
        slidesToShow: 3, infinite: true,
        accessibility: true,
        arrows: true,
        speed: 500,
        slidesToScroll: 1,

        responsive: [{
            breakpoint: 1440,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 935,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]

      
    };
 

    return (
        <div className={styles.cards}>
            <Slider {...settings} >
                {data && data.map(d => <div key={data.indexOf(d)}> <CatalogueCard data={d} style={'main'} /> </div>)}
            </Slider>
        </div>
    );
}