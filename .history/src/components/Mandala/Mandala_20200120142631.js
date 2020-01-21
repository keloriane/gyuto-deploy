import React, { useState, useEffect } from 'react';
import mandala from './assets/images/mandala.svg';
import { TweenMax } from 'gsap';
import { videos } from './data';
import { symbole, turnRight, newAnim } from './functions'
import Element from './Element'
import "./_mandala.scss"
import gsap from 'gsap';
import Vimeo from 'react-vimeo';
const Mandala = (props) => {
    const coordClick = () => {



    }

    useEffect(()=>{
        let hoverableDot = document.getElementsByClassName('hoverable')

    },[])
    return (
        <div className="bgc">
            <Vimeo videoId={ 279065288 } autoplay={true} />
            <Element />
        </div>
    )
}
export default Mandala