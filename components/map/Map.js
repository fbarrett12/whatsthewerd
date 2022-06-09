import { useState } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps"
import ReactTooltip from "react-tooltip";

const Map = props => {
    const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

    const [content, setContent] = useState("")

    const marker = {
        markerOffset: -15,
        name: props.city,
        coordinates: [props.longitude, props.latitude]
    }

    return (
        <>
        <ReactTooltip>{content}</ReactTooltip>
        <div className="map">
            <ComposableMap data-tip="">
                <ZoomableGroup zoom={1}>
                    {" "}
                    <Geographies geography={geoUrl}>
                        {({ geographies }) => 
                            geographies.map((geo) => (
                                <Geography 
                                key={geo.rsmKey}
                                geography={geo}
                                onMouseEnter={() =>{
                                    const { NAME } = geo.properties
                                    setContent(`${NAME}`)
                                }}
                                onMouseLeave={() => {
                                    setContent("")
                                }}
                                style={{
                                    hover: {
                                        fill: "#FBEC5D",
                                        outline: "none"
                                    }
                                }}
                                />
                            ))
                    
                        }

                    </Geographies>
                    <Marker key={marker.name} coordinates={marker.coordinates}>
                        <circle r={10} fill={"#00cba9"} stroke={"#fff"} strokeWidth={2}/>
                        <text textAnchor="middle" y={marker.markerOffset} style={{fontFamily: 'Urbanist', fill:"#fff"}}>
                            {marker.name}
                        </text>
                    </Marker>
                </ZoomableGroup>
            </ComposableMap>
        </div>
        </>
    )
}

export default Map