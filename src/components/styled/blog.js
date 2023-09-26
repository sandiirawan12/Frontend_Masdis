import styled from "styled-components"


export const CardStyle = styled.div`
    background:white;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
    min-height:210px;
    width:100%;
    border-radius: 30px 30px 10px 10px !important;
    position: relative;
    z-index:1;
    border: 1px solid #f8f9fa;
    box-shadow: -1px 3px 11px -7px rgba(156,156,156,0.75);
    // box-shadow: -1px 3px 14px -10px rgba(173,173,173,0.75);
    .label-name{
        font-weight:500;
        font-size:16px;
    }
    .content{
        height:80px;
        overflow:hidden;
    }

    @media screen and (max-width:1224px){
        min-height: 130px; 
        .content{
            height:42px;
        }
        .label-name{
            font-weight:500;
            font-size:10px;
            line-height:15px;
        }
                        }
`


export const WrapperImage = styled.div`
width:100%;
height:160px;
position:relative;
padding:0;
img{
    padding:0;
    height:100%;
    width:100%;
    object-fit:cover;
    border-radius: 30px 30px 0 0 !important;
}

@media screen and (max-width:1224px){
    height:100px;
    p{
        font-size:12px;
    }
    img{
        border-radius: 30px 30px 0 0 !important;

    }
}
`

export const TitleStyled = styled.h4`
font-family:blogger-sans,sans-serif;
color:#414042;
margin-bottom: 25px
px;
@media screen and (max-width:1224px){
    font-size:14px;
}

`