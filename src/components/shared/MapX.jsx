import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import styled from 'styled-components';

function MapX({ setCoordinates, coordinates, setChildClicked, places }) {
    return <div style={{ height: "70vh", width: "100%" }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyC_O0-LKyAboQn0O5_clZnePHSpQQ5slQU" }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={''}
            onChange={e => {
                setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            }}
            onChildClick={child => { setChildClicked(child) }}
        >

            <PlaceStyled className='active' lng={Number(place.detail.longitude)} lat={Number(place.detail.latitude)} key={index}>
                <div className='label' style={{ fontSize: '12px' }}>
                    {place.name}
                </div>
                <div className='price' style={{ fontSize: '12px' }}>
                    Rp{place.price.toLocaleString().replaceAll(',', '.')}
                </div>
            </PlaceStyled>

        </GoogleMapReact>
    </div>
}

const PlaceStyled = styled.div`
width:200px;
position:absolute;
transform: translate(-50%, -50%);
padding:5px;
background:white;
border-radius:10px;
border:1px solid red;
cursor:pointer;
&:hover{
    font-weight:bold;
    border:3px solid red;
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

export default MapX;