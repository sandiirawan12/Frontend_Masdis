import Image from "next/image";
import styled from "styled-components";

function AccountPurchaseHotelDetail(props) {
    const { purchase } = props;

    return (
        <RootStyled className="card mb-2 mt-2">
            <div className="card-body p-2">
                <div className="row">
                    <div className="col-4 pr-0">
                        <ImageHotelStyled img={'https://cdn.masterdiskon.com/masterdiskon/product/hotel/img/featured/2021/1983203/a.jpg'} />
                    </div>
                    <div className="col-8">
                        <div className="row h-100 justify-content-between">
                            <div className="col-10">
                                <h5 className="title mb-0">{purchase.name}</h5>
                                <div className="d-flex align-items-center" style={{ fontSize: '12px' }}>
                                    <span className="d-flex">
                                        <div className="d-inline-block mr-1" style={{ width: '15px', height: '15px', position: 'relative' }}>
                                            <Image src={'https://cdn.masterdiskon.com/masterdiskon/icon/fe/location.png'} layout='fill' />
                                        </div>
                                    </span>
                                    <small style={{ fontSize: '10px', lineHeight: '15px', display: 'block' }}>
                                        {purchase.detail.address}
                                    </small>
                                </div>
                            </div>
                            <div className="col-12 d-flex flex-column justify-content-end">
                                <div style={{ fontSize: '12px' }} className="d-flex mb-0 justify-content-between align-items-center">
                                    <small className="d-block">Check in</small>
                                    <small className="d-block">{purchase.period.dateFrom}</small>
                                </div>
                                <div style={{ fontSize: '12px', marginTop: '-10px' }} className="d-flex justify-content-between align-items-center">
                                    <small className="d-block">Check out</small>
                                    <small className="d-block">{purchase.period.dateTo}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RootStyled>
    );
}


const ImageHotelStyled = styled.div`
background:url(${props => props.img});
background-size:cover;
background-position:center center;
background-repeat :no-repeat;
width:100%;
height:100%;
border-radius:15px;
`


const RootStyled = styled.div`
border-radius:15px;
box-shadow:5px 5px 15px -5px rgba(0,0,0,.5);
.title{
    width: 200px;
  white-space: wrap;
  font-size:16px;
  font-weight:bold;
  color:#0070BA;
  overflow: hidden;
  text-overflow: ellipsis;
}

`


export default AccountPurchaseHotelDetail;