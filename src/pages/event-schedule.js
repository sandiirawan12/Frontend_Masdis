import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import Layout from '@/components/Layout';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import HeaderBack from '@/components-mobile/header/HeaderBack';
import { useRouter } from 'next/router';
import { BottomSheet, SheetContent } from '@biotic-ui/bottom-sheet';
import shopApi from '@/api/shop';
import { useSelector } from 'react-redux';

const localizer = momentLocalizer(moment);

function Page() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' })
    const [eventSelected, setEventSelected] = useState('');
    const [openFilter, setOpenFilter] = useState(false)

    const [tags, setTags] = useState([])
    const [schedule, setSchedule] = useState([])
    const router = useRouter();

    const { access_token } = useSelector(state => state.token);
    const [isLoadingTags, setIsLoadingTags] = useState(true);
    const [isLoadingEvents, setIsLoadingEvents] = useState(true);

    useEffect(() => {
        setIsLoadingTags(true)
        shopApi.getTagEvent(access_token).then(res => {
            if (res.success) {
                setTags(res.data)
                setIsLoadingTags(false)
            }
        })

    }, [])

    useEffect(() => {
        setIsLoadingEvents(true)
        shopApi.getEventSchedule(access_token, 'run').then(res => {
            if (res.success) {
                setSchedule(res.data.map(item => ({
                    title: item.event,
                    start: moment(item.date_event).toDate(),
                    end: moment(item.date_event).toDate(),
                })))
                setIsLoadingEvents(false)
            }
        })
    }, [])

    if (isLoadingEvents && isLoadingTags) {
        return <div style={{
            height: '50vh',
            marginBottom: '5rem'
        }} className="d-flex flex-column align-items-center justify-content-center">
            <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg" />
            <h4>Sedang menyiapkan data...</h4>
        </div>
    }

    return (
        <>
            {isTabletOrMobile &&
                <HeaderBack title='Event Schedule' onBack={() => router.push('/')} />
            }
            <div className='container my-4'>
                <div className="row">
                    {!isTabletOrMobile &&
                        <div className="col-md-4">
                            <h5 className='font-weight-bold text-primary'>Kategori</h5>
                            <NavRoot>
                                {tags?.map(item =>
                                    <li>{item?.name}</li>
                                )}
                            </NavRoot>

                        </div>
                    }
                    {isTabletOrMobile &&
                        <div className='col-12 d-flex justify-content-end'>
                            <button onClick={() => setOpenFilter(o => !o)} type="button" className="btn btn-primary mb-3 btn-sm btn-outline">
                                <i className="fas fa-filter fa-1x mr-2" />
                                Filter</button>
                        </div>}
                    <div className='col-12 col-md-8'>
                        <div className="card" style={{ boxShadow: '10px 10px 10px -10px rgba(0,0,0,0.5)', borderRadius: '15px' }}>
                            <div className="card-body">
                                <Calendar
                                    localizer={localizer}
                                    events={schedule}
                                    onSelectEvent={(event) => setEventSelected(event)}
                                    style={{ height: 500 }}
                                    popup
                                />

                                {eventSelected &&
                                    <h6 className='mt-3 font-weight-bold'> {eventSelected?.title} - {moment(eventSelected?.start).format('dddd, DD MMMM YYYY')}</h6>
                                }
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <BottomSheet open={openFilter} onClose={() => setOpenFilter(o => !o)}>
                <SheetContent className='pt-3 pl-3 pr-3 pb-5'>
                    <div className='d-flex align-items-center mb-3 justify-content-between'>
                        <h6 className='font-weight-bold mb-0'>Kategori</h6>
                        <div onClick={() => setOpenFilter(o => !o)}><i className="fas fa-times  fa-1x  "></i></div>
                    </div>
                    <hr />
                    <ul className="list-group pl-0 bg-danger">
                        {tags?.map(item => (
                            <li className="list-group-item border-0 py-2 pl-0 text-primary font-weight-bold my-0">{item.name}</li>
                        ))}
                    </ul>
                </SheetContent>
            </BottomSheet>
        </>
    );
}

const NavRoot = styled.ul`
min-height:500px;
width:100%;
background:rgb(93, 156, 209);
border-radius:15px;
box-shadow:10px 10px 10px -10px rgba(0,0,0,.5);
padding:15px;
list-style-type:none;
font-size:16px;

li{
color:#0070BA;
font-weight:bold;    
margin:10px 0;
background: white;
padding:10px;
border-radius:15px;
cursor:pointer;
transition: all ease .3s;
text-transform:capitalize;
&:hover{
    color:white;
    background:#0070BA;
}

}


`

Page.Layout = { desktop: Layout, mobile: React.Fragment }


export default Page;