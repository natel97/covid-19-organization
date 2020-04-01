import React, { useState, useEffect } from "react";

export default ({ onSuccess, onError }) => {
  const [locationAccessState, setLocationAccessState] = useState("");
  const [requestAccess, setRequestAccess] = useState(
    navigator.geolocation && locationAccessState === "prompt"
  );

  useEffect(() => {
    setRequestAccess(navigator.geolocation && locationAccessState === "prompt");
  }, [locationAccessState]);

  useEffect(() => {
    navigator.permissions
      .query({ name: "geolocation" })
      .then(function(permissionStatus) {
        setLocationAccessState(permissionStatus.state);

        permissionStatus.onchange = function() {
          setLocationAccessState(this.state);
        };
      });
  }, []);

  return (
    <div>
      {locationAccessState === "denied" && (
        <div>
          User denied location access. To enable, click the lock in the URL bar.
        </div>
      )}

      <button onClick={() => getUserLocation(onSuccess, onError)}>
        {requestAccess ? "Grant Location Access" : "Get Location"}
      </button>
    </div>
  );
};

const getUserLocation = (successful, error) => {
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      successful(coords);
    },
    err => {
      error(err.message);
    },
    { timeout: 6000 }
  );
};
