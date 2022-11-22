import GoogleMapReact from "google-map-react";
import mapStyle from "./styled.map.json";
import marker from "./assets/images/marker.svg";

const AnyReactComponent = (text: any) => <img src={marker} alt="marker" />;

type TProps = {
  lat: number;
  long: number;
};
type TDefaultProps = {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
};
export const SimpleMap = (props: TProps) => {
  const defaultProps: TDefaultProps = {
    center: {
      lat: props.lat,
      lng: props.long,
    },
    zoom: 12,
  };

  return (
    <div style={{ height: "218px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_SECRET_KEY_GOOGLE}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{
          styles: mapStyle,
        }}
      >
        <AnyReactComponent lat={props.lat} lng={props.long} />
      </GoogleMapReact>
    </div>
  );
};
