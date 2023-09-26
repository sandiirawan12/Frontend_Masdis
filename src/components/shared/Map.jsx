import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import BedIcon from '@iconify/icons-fa-solid/bed';
import { Icon } from '@iconify/react';
const markerStyle = {
    top: "100%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 25
};
function Map({ setCoordinates, coordinates, setChildClicked, places }) {
    return <div style={{ height: "70vh", width: "100%" }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyC_O0-LKyAboQn0O5_clZnePHSpQQ5slQU" }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={16}
            margin={[20]}
            options={''}
            onChange={e => {
                setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            }}
            onChildClick={child => { setChildClicked(child) }}
        >
            {places.map((place, index) => (
                // <PlaceStyled className='active' lng={Number(place.detail.longitude)} lat={Number(place.detail.latitude)} key={index}>
                //     <div className='label' style={{ fontSize: '12px' }}>
                //         {place.name}
                //     </div>
                //     <div className='price' style={{ fontSize: '12px' }}>
                //         Rp{place.price.toLocaleString().replaceAll(',', '.')}
                //     </div>
                //     <>
                //         <img style={markerStyle} src={"https://toppng.com/uploads/preview/simple-location-map-pin-icon-blue-location-icon-11562928973mg6jeytef4.png"} />

                //     </>
                // </PlaceStyled>


                <PlaceStyled className='active' lng={Number(place.detail.longitude)} lat={Number(place.detail.latitude)} >


                    <div className='label row' style={{ zIndex: 1000, position: 'absolute', borderRadius: 50, color: '#FFF', padding: 5, marginTop: -20, backgroundColor: place.price > 0 ? '#005EAA' : '#C74545', borderWidth: 0 }}>
                        <> <span style={{ color: '#FFF', fontSize: '12px', }}> <Icon icon={BedIcon} className="ml-1" /> </span> </>
                        <>
                            <span style={{ color: '#FFF', fontSize: '12px', marginLeft: '5px', display: place.price > 0 ? 'block' : 'none' }}> Rp{place.promoPrice.toLocaleString().replaceAll(',', '.')}</span>
                            <span style={{ color: '#FFF', fontSize: '12px', marginLeft: '5px', display: place.price < 1 ? 'block' : 'none' }}> Full Booking</span>
                        </>
                    </div>
                    <div className='label' style={{ marginLeft: -20 }} >
                        {place.price > 0 ?
                            <img style={markerStyle} src={"https://toppng.com/uploads/preview/simple-location-map-pin-icon-blue-location-icon-11562928973mg6jeytef4.png"} />
                            :
                            <img style={markerStyle} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Map_pin_icon.svg/564px-Map_pin_icon.svg.png"} />
                        }
                    </div>
                </PlaceStyled>


            ))}
        </GoogleMapReact>
    </div >
}

const PlaceStyled = styled.div`
width:135px;
position:absolute;
transform: translate(-50%, -50%);
padding:10px;
border-radius:50px; 
// border:1px solid red;
cursor:pointer;
&:hover{
    font-weight:bold;
    // border:3px solid red;
    z-index:1;
}
.label,.price{
    font-size:12px;
    color:red;
    text-align:center;
}

.price{
    margin-top:5px;
}


`

export default Map;