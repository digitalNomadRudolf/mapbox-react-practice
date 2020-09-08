import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./App.scss";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const App = () => {
    const mapContainerRef = useRef(null);

    // initialize map on mount
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-104.9876, 39.7405],
            zoom: 12.5,
        });

        // zoom btn control
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

        // clean up on unmount
        return () => map.remove();
    }, []);

    return <div className="map-container" ref={mapContainerRef} />;
};

export default App;