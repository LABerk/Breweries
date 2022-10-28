import React from "react";
import GoogleMapReact from "google-map-react";
import { Pin } from "./Pin";

export const MapView = (props) => {
  const defaultProps = {
    center: {
      lat: 43.0389,
      lng: -87.9065,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        // center={props.center}
      >
        <Pin lat={props.lat} lng={props.lon} />
      </GoogleMapReact>
    </div>
  );
};
