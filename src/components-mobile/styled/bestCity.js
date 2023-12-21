import ReactPlaceholder from "react-placeholder"
import styled from "styled-components"

export const CardStyle = styled.div`
/* background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${props => props.img}); */
/* background-size:cover;
background-repeat:no-repeat;
background-position:center center; */
min-height:230px;//
min-height:170px;//moblie
width:100%;
/* border-radius:10px; */
color:white;
position: relative;
z-index:1;
border-radius:15px;
border:none;
/* box-shadow:2px 5px 15px rgba(0,0,0,.5); */
transition: background-position .2s linear;
.label-name,.label-price{
    @media screen and (max-width:1224px){
        font-size:12px;
    }
}
.label-price{
    .label-price__text{
        font-size:15px;
        @media screen and (max-width:1224px){
            font-size:12px;
        }
    }
    .label-price__price{
        font-size:17px;
        @media screen and (max-width:1224px){
            font-size:14px;
        }
    }
    @media screen and (max-width:1224px){
    p:nth-child(1){
        margin-bottom:-5px !important;
    }
        
    }
}

`

export const CardImage = styled.div`
&:hover {
    background-image: url(${props => props.image});
}
/* background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.image}); */

background:  url(${props => props.image});
width: 100%;
height: 300px;
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
border-radius: 10px 10px 0px 0px;
@media screen and (max-width:1224px){
    height: 200px; 
}
`

export const CardLoading = styled(ReactPlaceholder)`
  min-height: 270px;
  width: 100%;
  border-radius: 15px;
  
  @media screen and (max-width:1224px){
    min-height: 130px;
}
`