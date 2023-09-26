import shopApi from "@/api/shop";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function WidgetSports() {
    const [vendorOffice, setVendorOffice] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { access_token } = useSelector(state => state.token);

    useEffect(() => {
        setIsLoading(true)
        shopApi.getVendorOffices(access_token).then(res => {
            if (res.success) {
                setVendorOffice(res.data)
                setIsLoading(false)
            }

        })
    }, [])



    return (
        <div className="card" style={{
            padding: '7px',
            color: 'white',
            background: 'white',
            border: '13px solid #0070BA',
            borderRadius: '20px'
        }}>
            <div className="card-body p-0">
                <div className="row pt-2">
                    <>
                        {isLoading ?
                            [1, 2, 3].map((index) => (
                                <div key={index} className="col-md-2">
                                    <div className="d-flex flex-column text-center align-items-center justify-content-center text-dark">
                                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'gray', border: '8px solid white', padding: '5px', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)' }}>
                                        </div>
                                    </div>
                                </div>
                            ))
                            :
                            vendorOffice?.map((item, index) => (
                                <div key={index} className="col-md-2">
                                    <Link href={`/product/office/${item.id}`}><a>
                                        <div className="d-flex flex-column text-center align-items-center justify-content-center text-dark">
                                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'white', border: '8px solid white', padding: '5px', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)' }}>
                                                <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={item.icon} />
                                            </div>
                                            <h6 className="mt-2 font-weight-bold">{item.name}</h6>
                                        </div>
                                    </a>
                                    </Link>
                                </div>
                            ))
                        }
                    </>
                </div>
            </div>
        </div>
    );
}

export default WidgetSports;