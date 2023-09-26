import classNames from "classnames";
import Link from "next/link";
import ReactPlaceholder from "react-placeholder";
function WidgetOthers(props) {
    const { data, isLoading } = props.data
    const dataFilter = data?.filter(item => !item.slug_product_category.includes('hotel') && !item.slug_product_category.includes('flight') && !item.slug_product_category.includes('office'));
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
                    {isLoading ?
                        [1, 2, 3, 5, 6, 4].map((item) => (
                            <div className="col-2 d-flex justify-content-center" key={item}>
                                <ReactPlaceholder showLoadingAnimation={true} type='round' style={{ width: 70, height: 70 }} />
                            </div>
                        ))
                        :
                        <>
                            {
                                dataFilter?.length < 6 &&
                                <div className={classNames({
                                    'col-1': dataFilter?.length === 5,
                                    'col-2': dataFilter?.length === 4,
                                    'col-3': dataFilter?.length === 3,
                                    'col-4': dataFilter?.length === 2,
                                    'col-5': dataFilter?.length === 1,
                                })}></div>
                            }
                            {dataFilter?.map(item => (
                                <div key={item.slug_product_category} className="col-md-2">
                                    <Link href={`/product/category/${item.slug_product_category}`}><a>
                                        <div className="d-flex flex-column text-center align-items-center justify-content-center">
                                            <div style={{ borderRadius: '50%', width: '60px', height: '60px', border: '8px solid white', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)' }}>
                                                <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={item.icon_product_category} alt={item.slug_product_category} />
                                            </div>
                                            <h6 className="text-dark font-weight-bold" style={{
                                                marginTop: '10px'
                                            }}>{item.name_product_category}</h6>
                                        </div>
                                    </a>
                                    </Link>
                                </div>
                            ))}
                        </>

                    }
                </div>
            </div>
        </div>
    );
}

export default WidgetOthers;