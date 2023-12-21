import Image from 'next/image'
import { Icon } from "@iconify/react";
import Link from 'next/link';

let menus = []

function CategoryCard(props) {
    const { data } = props.data;

    const makeUrl = (slug) => {
        if (slug.includes('hotel')) {
            return `hotels`
        } else if (slug.includes('flight')) {
            return `/flights`
        } else if (slug.includes('train')) {
            return `/trains`
        }
    }

    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-4">
                    <center>
                        <Link href={makeUrl("flight")}>
                            <div>
                                <div style={{ width: '60px', height: '60px', padding: '15px', background: '#1A83C6', borderRadius: '50%' }} className="d-flex align-items-center justify-content-center">
                                    <Icon icon="mdi:flight" style={{ fontSize: '40px' }} className="text-white" />
                                </div>
                                <p className='mt-3'>Tiket <br /> Pesawat</p>
                            </div>
                        </Link>
                    </center>
                </div>
                <div className="col-4">
                    <center>
                        <Link href={makeUrl("hotel")}>
                            <div>
                                <div style={{ width: '60px', height: '60px', padding: '15px', background: '#EB4335', borderRadius: '50%' }} className="d-flex align-items-center justify-content-center">
                                    <Icon icon="icon-park-solid:hotel" style={{ fontSize: '40px' }} className="text-white" />
                                </div>
                                <p className='mt-3'>Tiket <br /> Hotel</p>
                            </div>
                        </Link>
                    </center>
                </div>
                <div className="col-4">
                    <center>
                        <Link href={makeUrl("train")}>
                            <div>
                                <div style={{ width: '60px', height: '60px', padding: '15px', background: '#34A853', borderRadius: '50%' }} className="d-flex align-items-center justify-content-center">
                                    <Icon icon="material-symbols:train" style={{ fontSize: '40px' }} className="text-white" />
                                </div>
                                <p className='mt-3'>Tiket <br /> Kereta Api</p>
                            </div>
                        </Link>
                    </center>
                </div>
            </div>
        </div>
    );
}

export default CategoryCard;