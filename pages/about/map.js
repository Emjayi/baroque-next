import { useEffect, useRef, useState } from 'react';

const Map = () => {
    const mapContainerRef = useRef(null);
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (!window.google) {
            console.error("Google Maps JavaScript API is not loaded.");
            return;
        }
        const newMap = new window.google.maps.Map(mapContainerRef.current, {
            center: { lat: 40.7128, lng: -74.006 },
            zoom: 10,
            styles: YOUR_CUSTOM_STYLE // Replace YOUR_CUSTOM_STYLE with the JSON code from Snazzy Maps
        });
        setMap(newMap);

        return () => {
            if (map) {
                map.dispose();
            }
        };
    }, []);

    return (
        <div
            ref={mapContainerRef}
            style={{ width: '100%', height: '400px', backgroundColor: 'gray' }}
        />
    );
};

export default Map;