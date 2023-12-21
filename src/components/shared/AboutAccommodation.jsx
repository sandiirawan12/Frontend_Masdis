import { Icon } from '@iconify/react'

function AboutAccommodation({ hotel }) {
    function decodeHTMLEntities(text) {
        let textArea = document.createElement('textarea');
        textArea.innerHTML = text;
        return textArea.value;
    }
    return (
        <div className="card" style={{ borderRadius: '20px', boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)' }}>
            <div className="card-header text-dark" style={{ borderTopRightRadius: '20px', borderTopLeftRadius: '20px' }}>
                <span className="card-title font-weight-bold">Kebijakan Akomodasi & Informasi Umum</span>
            </div>
            <div className="card-body">
                <div className="row p-3 m-2 rounded" style={{ background: '#ecf8ff'}}>
                    <p>
                        <Icon icon="emojione-v1:double-exclamation-mark" className="mr-2" />
                        <span className='mt-1 text-primary font-weight-bold'>Catatan Penting</span>
                    </p>
                    <small className='text-dark' dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(hotel?.detail?.description) || '' }}></small>
                </div>
                <div className="row ">
                    <div className="col-md-12">
                        <div className="d-flex align-items-center">
                            <Icon icon="pajamas:clock" className="mr-3 text-primary" style={{fontSize: '20px'}} />
                            <div className='mt-3'>
                                <span className='font-weight-bold'>Waktu Check-in / Check-out</span>
                                <p>
                                    <span className='mr-3'>Check-in: Dari {hotel?.detail?.checkInTime}</span>
                                    <span>Check-out: Sebelum {hotel?.detail?.checkOutTime}</span>
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(hotel?.detail?.checkInInstruction) || '' }}></div>
                        <hr />
                        <div>
                            <div className='mt-3'>
                                <span className='font-weight-bold'>Kebijakan Tambahan</span>
                                <div dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(hotel?.detail?.hotelPolicy) || '' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AboutAccommodation;