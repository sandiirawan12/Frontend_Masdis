function AbouAccommodation({ hotel }) {

    function decodeHTMLEntities(text) {
        let textArea = document.createElement('textarea');
        textArea.innerHTML = text;
        return textArea.value;
    }
    return (
        <div className="card" style={{ borderRadius: '20px', boxShadow: '2.5px 5px 15px -5px  rgba(0,0,0,.5)' }}>
            <div className="card-header text-white" style={{ borderTopRightRadius: '20px', borderTopLeftRadius: '20px', background: '#0070BA' }}>
                <span className="card-title font-weight-bold">Tentang Akomodasi</span>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">Waktu check-in &amp; check-out</div>
                    <div className="col-md-9">
                        <p>Waktu check-in: {hotel?.detail?.checkInTime}. Waktu check-out: {hotel?.detail?.checkOutTime}</p>
                        <p>Mau check-in lebih awal? Atur waktu check-in dengan pihak akomodasi.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">Kebijakan</div>
                    <div className="col-md-9">
                        <div dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(hotel?.detail?.hotelPolicy) || '-' }}></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">Intruksi check-in</div>
                    <div className="col-md-9">
                        <div dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(hotel?.detail?.checkInInstruction) || '-' }}></div>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default AbouAccommodation;