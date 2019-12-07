import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Slider from "./Slider/Slider";
import { TimelineMax, Power4 } from 'gsap';

import "./gallery.scss";

const sliderContent = [
    {
        id: 1,
        theme: "/MONASTERY",
        title: "GYUTO MONASTERY",
        images: [
            `${require("./../../assets/images/image22.jpg")}`,
            `${require("./../../assets/images/image32.jpg")}`,
            `${require("./../../assets/images/image30.jpg")}`,
            `${require("./../../assets/images/image29.jpg")}`,
            `${require("./../../assets/images/image2.jpg")}`,
            `${require("./../../assets/images/image27.jpg")}`
        ],
        alt: "Gyuto monastery image",
        quote: "lorem ipsum ",
        bgImage: `${require("./../../assets/images/image42.jpg")}`,
        active: true
    },
    {
        id: 2,
        theme: "/MANDALA",
        title: "/MANDALA DE TERRE",
        images: [
            `${require("./../../assets/images/image12.jpg")}`,
            `${require("./../../assets/images/image16.jpg")}`,
            `${require("./../../assets/images/image10.jpg")}`,
            `${require("./../../assets/images/image19.jpg")}`,
            `${require("./../../assets/images/image1.jpg")}`,
            `${require("./../../assets/images/image17.jpg")}`
        ],
        alt: "Gyuto monastery image",
        quote: "lorem ipsum ",
        bgImage: `${require("./../../assets/images/image32.jpg")}`,
        active: false
    },
    {
        id: 3,
        theme: "/SCHOOL",
        title: "/GYUTO SCHOOL",
        images: [
            `${require("./../../assets/images/image12.jpg")}`,
            `${require("./../../assets/images/image16.jpg")}`,
            `${require("./../../assets/images/image10.jpg")}`,
            `${require("./../../assets/images/image19.jpg")}`,
            `${require("./../../assets/images/image1.jpg")}`,
            `${require("./../../assets/images/image17.jpg")}`
        ],
        alt: "Gyuto monastery image",
        quote: "lorem ipsum ",
        bgImage: `${require("./../../assets/images/image33.jpg")}`,
        active: false
    },
    {
        id: 4,
        theme: "/SCHOOL",
        title: "/GYUTO SCHOOL",
        images: [
            `${require("./../../assets/images/image12.jpg")}`,
            `${require("./../../assets/images/image16.jpg")}`,
            `${require("./../../assets/images/image10.jpg")}`,
            `${require("./../../assets/images/image19.jpg")}`,
            `${require("./../../assets/images/image1.jpg")}`,
            `${require("./../../assets/images/image17.jpg")}`
        ],
        alt: "Gyuto monastery image",
        quote: "lorem ipsum ",
        bgImage: `${require("./../../assets/images/image33.jpg")}`,
        active: false
    },
    {
        id: 5,
        theme: "/SCHOOL",
        title: "/GYUTO SCHOOL",
        images: [
            `${require("./../../assets/images/image12.jpg")}`,
            `${require("./../../assets/images/image16.jpg")}`,
            `${require("./../../assets/images/image10.jpg")}`,
            `${require("./../../assets/images/image19.jpg")}`,
            `${require("./../../assets/images/image1.jpg")}`,
            `${require("./../../assets/images/image17.jpg")}`
        ],
        alt: "Gyuto monastery image",
        quote: "lorem ipsum ",
        bgImage: `${require("./../../assets/images/image33.jpg")}`,
        active: false
    },
];

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const letter = document.querySelectorAll('.letter')
        const loadedAnimation = new TimelineMax();
        loadedAnimation
            .staggerFrom(letter, 1, { y: "100%", yoyo: true, ease: Power4.easeOut }, "0.1")
            .staggerTo(letter, 0.2, { opacity: 0 }, "0.1")
            .to(".main-loader", 1, { width: 0 })
            .from(".information--navigation", 0.6, { opacity: 0, x: "-100%" })
            .from([".logo-icon", ".head-title-slider"], 0.5, {
                opacity: 0,
                x: "-100%",
                delay: -0.6
            })
            .from(".gallery-container", 1.1, {
                x: "-100%",
                opacity: 0,
                delay: -1
            })
            // .from(imageList.children, 0.7, {

            //   x: "-100%",
            //   ease: Power4.easeOut
            // })
            .from(".gallery-text", 1, { opacity: 0, delay: -0.8 })
            .from(".text-letter", 1, { opacity: 0, delay: -0.9 })
            .to("#main-img", 50, {
                x: -25,
                y: 75,
                rotationZ: 0.01,
                scale: 1.3,
                delay: -1
            });




    })
    const handleClick = index => {
        setCurrentIndex(index);
    };

    const gallery = sliderContent.map((slide, index) => {
        if (index === currentIndex) {
            return (
                <>

                    <div id="gallery">
                        <div id="main-img" style={{ backgroundImage: `url(${slide.bgImage})` }}>

                        </div>
                        <div id="main" className="monstery">
                            <Header title={slide.theme} id={slide.id} />
                            <div id="main-gallery">
                                <SideBar click={handleClick} />
                                <Slider slide={slide} />
                            </div>
                        </div>
                    </div>
                </>
            );
        } else return null;
    });

    return <>

        {gallery}
    </>;
}
