import Link from "next/link";

function ButtonChekout(props) {
    const { total, onSubmit, isLoading } = props
    return (
        <div className="fixed-bottom justify-content-around align-items-center py-2 px-5 border-top bg-white">
            <div className="row">
                <div className="col-md-9 d-flex align-items-center">
                    <h4 className="mt-2">Total</h4>
                    <h3 className="ml-4 text-primary font-weight-bold mr-4 mt-2">Rp{total?.toLocaleString()}</h3>
                    <small>
                        Dengan mengeklik tombol di bawah, Anda
                        menyetujui <Link href="" >Syarat dan Ketentuan</Link> <br /> serta
                        <Link href=""> Kebijakan Privasi</Link> dari Masterdiskon.
                    </small>
                </div>
                <div className="col-md-3">
                    <button id="submit-cart" style={isLoading ? {
                        opacity: 0.8,
                        pointerEvents: 'none'
                    } : {}} onClick={onSubmit} className="btn btn-lg btn-primary submit-book d-inline float-right mr-2">
                        {isLoading ? 'Loading...' : 'PESAN SEKARANG'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ButtonChekout;