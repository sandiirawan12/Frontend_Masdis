import Link from "next/link";

const catalogs = [
    { name: "Run", img: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/running-white.png", slug: "run" },
    { name: "Cycle", img: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/bicycle.png", slug: "bicycle" },
    { name: "Golf", img: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/golf.png", slug: "golf" },
    { name: "Basketball", img: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/basketball.png", slug: "basket" },
    { name: "Badminton", img: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/badminton.png", slug: "badminton" },
    { name: "Soccer/Futsal", img: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/soccer-player.png", slug: "futsal" },
]
function WidgetSports() {
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
                        {catalogs?.map((item, index) => (
                            <div key={index} className="col-md-2">
                                <Link href={`/product/category/sports?filter_tag=${item.slug}`}><a>
                                    <div className="d-flex flex-column text-center align-items-center justify-content-center text-dark">
                                        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#0070BA', border: '8px solid white', padding: '8px', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)' }}>
                                            <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={item.img} />
                                        </div>
                                        <h6 className="mt-2 font-weight-bold">{item.name}</h6>
                                    </div>
                                </a>
                                </Link>
                            </div>
                        ))}
                    </>
                </div>
            </div>
        </div>
    );
}

export default WidgetSports;