import classNames from "classnames";
import Link from "next/link";
import ReactPlaceholder from "react-placeholder";

function CategoryProduct(props) {
    const { data, isLoading } = props.data
    const dataFilter = data?.filter(item => !item.slug_product_category.includes('hotel') && !item.slug_product_category.includes('flight'));

    const makeUrl = (slug) => {
        if (slug.includes('hotels')) {
            return `/${slug}`
        } else if (slug.includes('flight')) {
            return `/flights`
        } else if (slug.includes('sports')) {
            return `/sports`
        } else if (slug.includes('office')) {
            return '/office'
        } else {
            return `/product/category/${slug}`
        }
    }
    return (
        <div className="card my-4" style={{ background: 'transparent', border: '0', borderRadius: '20px', }}>
            <div className="card-body p-0">
                <div className="row  pt-2">
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
                                <div style={{
                                    maxWidth:'100%',
                                    width:'19%'
                                }}
                                //  className={classNames({
                                //     'col-3': dataFilter?.length === 5,
                                //     // 'col-2': dataFilter?.length === 4,
                                //     // 'col-3': dataFilter?.length === 3,
                                //     // 'col-4': dataFilter?.length === 2,
                                //     // 'col-5': dataFilter?.length === 1,
                                // })}
                                ></div>
                            }
                            {dataFilter?.map(item => (
                                <div key={item.slug_product_category} className="col-2 p-0 m-0" style={{flex:'0 0 12.667% !important',maxWidth:'12.667%'}}>
                                    <Link href={makeUrl(item.slug_product_category)}><a>

                                        <div className="d-flex flex-column text-center align-items-center justify-content-center m-0">
                                            <div className="m-0" style={{ borderRadius: '50%', width: '80px', height: '80px', border: '8px solid white', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)', background: 'radial-gradient(50% 50% at 50% 50%, #E62E2E 0%, #AC0C0C 100%)' }}>
                                                <img style={{ width: '100%', height: '100%', filter: 'brightness(0) invert(1)' }} src={item.icon_product_category} alt="" />
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

export default CategoryProduct;