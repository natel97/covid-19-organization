import React, { useState } from "react";
import UserLocation from "../../Components/UserLocation";

export default ({ match }) => {
  const [userLocation, setUserLocation] = useState({
    latitude: null,
    longitude: null,
    accuracy: null,
    set: false
  });
  const [locationError, setLocationError] = useState("");
  return (
    <div className="flex-column full-height">
      <h3 className="text-center">{match.params.type} Details</h3>
      <h3 className="label info">Development Use: Accessing location?</h3>
      <UserLocation
        onSuccess={({ latitude, longitude, accuracy }) =>
          setUserLocation({ latitude, longitude, accuracy, set: true })
        }
        onError={err => setLocationError(err)}
      />
      {userLocation.set && (
        <ul>
          <li>Latitude: {userLocation.latitude}</li>
          <li>Longitude: {userLocation.longitude}</li>
          <li>Accuracy: {userLocation.accuracy}</li>
        </ul>
      )}
      {locationError && <div className="error label">{locationError}</div>}
      <h3 className="label warning">Coming Soon</h3>
    </div>
  );
};
