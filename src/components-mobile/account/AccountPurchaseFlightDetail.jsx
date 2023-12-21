import styled from 'styled-components';
import moment from 'moment';
function AccountPurchaseFlightDetail(props) {
    const { purchase } = props;

    return (
        <div className="card-container card-container-contact">
            <p className="font-weight-bold text-primary mb-1 title">Flight</p>

            <p className='font-weight-bold mt-2 mb-0 text-primary ml-1'>Departure</p>
            <div className="d-flex justify-content-between align-items-center">
                <span>{purchase?.detail?.onwardFlight?.from?.code} <i class="fas fa-arrow-right  mx-1  "></i> {purchase?.detail?.onwardFlight?.to?.code}</span>
                <span><i class="fas fa-clock    "></i> {purchase?.detail?.onwardFlight?.flight[0].flyTime}</span>
            </div>
            {purchase?.detail?.onwardFlight?.flight?.map(item => (
                <TimeLineStyled className="mb-2">
                    <>
                        <li>
                            <div className="position-absolute" style={{ left: '-90px' }}>
                                <h6 className="mb-0">{moment(item?.departure?.time, 'HH:mm:ss').format('HH.mm')}</h6>
                                <small>{item?.departure?.date}</small>
                            </div>
                            <p className="mb-0">{item?.departure?.name} ({item?.departure?.code})</p>
                            <p className="py-2 mb-0">{item?.code} . {item?.class}</p>
                        </li>
                        <li className>
                            <div className="position-absolute" style={{ left: '-90px' }}>
                                <h6 className="mb-0">{moment(item?.arrival?.time, 'HH:mm:s').format('HH.mm')}</h6>
                                <small>{item?.arrival?.date}</small>
                            </div>
                            <p className="mb-0">{item?.arrival?.name} ({item?.arrival?.code})</p>
                        </li>
                    </>
                </TimeLineStyled>
            ))}

            {purchase?.detail?.returnFlight &&
                <>
                    <p className='font-weight-bold mt-2 mb-0 text-primary ml-1'>Return</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>{purchase?.detail?.returnFlight?.from?.code} <i class="fas fa-arrow-right  mx-1  "></i> {purchase?.detail?.returnFlight?.to?.code}</span>
                        <span><i class="fas fa-clock"></i> {purchase?.detail?.returnFlight?.flight[0].flyTime}</span>
                    </div>
                    {purchase?.detail?.returnFlight?.flight?.map(item => (
                        <TimeLineStyled className="mb-2">
                            <>
                                <li>
                                    <div className="position-absolute" style={{ left: '-90px' }}>
                                        <h6 className="mb-0">{moment(item?.departure?.time, 'HH:mm:ss').format('HH.mm')}</h6>
                                        <small>{item?.departure?.date}</small>
                                    </div>
                                    <p className="mb-0">{item?.departure?.name} ({item?.departure?.code})</p>
                                    <p className="py-2 mb-0">{item?.code} . {item?.class}</p>
                                </li>
                                <li className>
                                    <div className="position-absolute" style={{ left: '-90px' }}>
                                        <h6 className="mb-0">{moment(item?.arrival?.time, 'HH:mm:s').format('HH.mm')}</h6>
                                        <small>{item?.arrival?.date}</small>
                                    </div>
                                    <p className="mb-0">{item?.arrival?.name} ({item?.arrival?.code})</p>
                                </li>
                            </>
                        </TimeLineStyled>
                    ))}
                </>
            }
        </div>
    );
}



const TimeLineStyled = styled.ul`
    position:relative;
    margin-top:15px;
    li{
        margin-left: 50px;
        min-height: 33px;
        position: relative;
        background-color: #fff;
        list-style: none;
    }

    li:nth-last-child(0n+1)::before{
        width:0;
        border:0;
    }

    li::before{
	content: '';
	position: absolute;
    border:1.8px dashed #FFC107;
	left: -18.5px;
	background-color: #E7E7E7;
	top: 3px;
	bottom: 0;
	height: 100%;

    }
    
    li::after {
	text-align: center;
	z-index: 10;
	content: '';
	position: absolute;
	width: 25px;
	height: 25px;
	border: 3px solid #fff;
	background-color: #036cb4;
	border-radius: 50%;
	top: 0;
	left: -30px;
}
`

export default AccountPurchaseFlightDetail;