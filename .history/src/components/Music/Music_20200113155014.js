import React from 'react';
import "./music.scss";

const Music = () => {


    return (
        <div className="music-page">
            <div className="album-container">
                <div className="yellow-album">
                    <img src="" alt=""/>
                </div>
                <div className="info-album">
                    <ol>
                        <li className="list-items-song">Kailash</li>
                        <li className="list-items-song">Lhasa</li>
                        <li className="list-items-song" className="active">Tantric college</li>
                      
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
export default Music;