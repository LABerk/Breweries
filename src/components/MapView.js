import React from "react";
import GoogleMapReact from "google-map-react";
import { Pin } from "./Pin";
import "../styles.css";

export const MapView = (props) => {
  const defaultProps = {
    center: {
      lat: 43.0389,
      lng: -87.9065,
    },
    zoom: 10,
  };

  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals={true}
        bootstrapURLKeys={{
          key: "",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={props.center}
        zoom={15}
      >
        <Pin lat={props.lat} lng={props.lng} text={props.text} />
      </GoogleMapReact>
    </div>
  );
};
