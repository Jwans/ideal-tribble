import React, { useState, useEffect } from "react";

export default function Location({ setLocation }) {
  const [loc, setLoc] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setLoc(coords);
        setLocation(coords);
      },
      (err) => {
        setLoc({ error: "Location access denied" });
        setLocation(null);
      }
    );
  }, [setLocation]);

  if (!loc) return <div>Detecting location...</div>;
  if (loc.error) return <div>{loc.error}</div>;
  return <div>Your location: {loc.lat.toFixed(3)}, {loc.lng.toFixed(3)}</div>;
}