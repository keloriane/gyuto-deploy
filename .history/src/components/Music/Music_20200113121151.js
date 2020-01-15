import React from 'react';
import "music.scss";
export const Music = () => {


    return (
        <div className="music-page">
            <div className="album-container">
                <div className="yellow-album">
                    <img src="" alt=""/>
                </div>
                <div className="info-album">
                    <ol>
                        <li>Kailash</li>
                        <li>Lhasa</li>
                        <li>Tantric college</li>
                      
                    </ol>
                        <div className="line"></div>
                       <ol>
                           <li>Dalai Lama's long life</li>
                           <li>Heart sutra</li>
                           <li>Kundun</li>
                           <li>Le grand noir</li>
                       </ol>
                </div>
                <div className="dark-album"></div>
            </div>
        </div>
    )
}
