import React from 'react';
import './Map.css';

const Map = () => {
    return (
        <div id="map" className="Cadre">
            <div className="left">
                <h1>Localisation</h1>
            </div>
            <div className="MapContent">
                <div className="Map">
                    <iframe
                        width="100%"
                        height="500"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://maps.google.com/maps?hl=en&q=46.232193,2.209667&z=2&markers=46.232193,2.209667&markers=23.8862915,46.6753&ie=UTF8&t=m&iwloc=B&output=embed"
                        title="World Map with Markers"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Map;
