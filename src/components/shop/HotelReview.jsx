import StarIcon from '@iconify/icons-fa-solid/star'
import { Icon } from '@iconify/react'

const star = [1, 2, 3, 4, 5];

function HotelReview() {
    return (
        <div className="card" style={{ borderRadius: '20px', boxShadow: '2.5px 5px 15px -5px  rgba(0,0,0,.5)' }}>
            <div className="card-header text-white" style={{ borderTopRightRadius: '20px', borderTopLeftRadius: '20px', background: '#0070BA' }}>
                <span className="card-title font-weight-bold">Reviews</span>
            </div>
            <div className="card-body">
                <div className="row mb-3">
                    <div className="col-md-3 d-flex align-items-center">
                        <h4 className="mr-3 mb-0"><span className="badge badge-danger">0.0</span></h4>
                        <span className="text-primary">Belum di review</span>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex align-items-center">
                            <span>Urutkan</span>
                            <select className="ml-3 form-control">
                                <option>Paling membantu</option>
                                <option>Terbaru</option>
                                <option>Rating tertinggi</option>
                                <option>Rating terendah</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card mb-3">
                            <div className="card-body">
                                <li className="d-flex justify-content-between">
                                    <p className="mb-1">Kebersihan</p>
                                    <span>
                                        {star.map((item) => (
                                            <Icon key={item} icon={StarIcon} />
                                        ))}
                                    </span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="mb-1">Fasilitas</p>
                                    <span> {star.map((item) => (
                                        <Icon key={item} icon={StarIcon} />
                                    ))}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="mb-1">Lokasi</p>
                                    <span>{star.map((item) => (
                                        <Icon key={item} icon={StarIcon} />
                                    ))}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="mb-1">Layanan</p>
                                    <span>{star.map((item) => (
                                        <Icon key={item} icon={StarIcon} />
                                    ))}</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="mb-1">Kepantasan</p>
                                    <span>{star.map((item) => (
                                        <Icon key={item} icon={StarIcon} />
                                    ))}</span>
                                </li>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="card-body">
                                <li className="d-flex justify-content-between">
                                    <p className="mb-1">Pasangan</p>
                                    <b className="text-primary">0</b>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="mb-1">Keluarga</p>
                                    <b className="text-primary">0</b>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="mb-1">Solo</p>
                                    <b className="text-primary">0</b>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="mb-1">Grup</p>
                                    <b className="text-primary">0</b>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="mb-1">Liburan</p>
                                    <b className="text-primary">0</b>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="mb-1">Bisnis</p>
                                    <b className="text-primary">0</b>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="mb-1">Medis</p>
                                    <b className="text-primary">0</b>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="mb-1">Lainnya</p>
                                    <b className="text-primary">0</b>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-body">
                                <div className="kotakInfoReview">Ulasan belum tersedia</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HotelReview;