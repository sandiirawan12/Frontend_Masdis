import Image from 'next/image'
import Link from 'next/link';
let menus = []
function CategoryCard(props) {
    const { data } = props;

    const makeUrl = (slug) => {
        if (slug.includes('hotels') || slug.includes('sports')) {
            return `/${slug}`
        } else if (slug.includes('flight')) {
            return `/flights`
        } else if (slug.includes('sports')) {
            return `/sports`
        }else if (slug.includes('office')) {
            return `/product/office`
        } else {
            return `/product/category/${slug}`
        }
    }

    const changeMenus = () => {
        menus = data
        
        const indexFlight = menus?.findIndex(item => item.slug_product_category.includes('flight'));
        const elFlight = menus?.splice(indexFlight, 1)[0];

        const indexHotel = menus?.findIndex(item => item.slug_product_category.includes('hotels'));
        const elHotel = menus?.splice(indexHotel, 1)[0];

        const indexSport = menus?.findIndex(item => item.slug_product_category.includes('sports'));
        const elSport = menus?.splice(indexSport, 1)[0];

        menus?.splice(0,0,elFlight)
        menus?.splice(1,0,elHotel)
        menus?.splice(2,0,elSport)

        return menus;
    }



    return (<div className="container-blog">
        <div className="container-list p-0 bg-transparent">
            <div className="list">
                {changeMenus()?.map(item => (
                    <Link href={makeUrl(item.slug_product_category)}><a className='list-item bg-transparent p-0 m-0 mr-1'>
                        <div style={{ background: 'rgb(253,191,73)', width: '100%', padding: '2px', paddingRight: '15px !important', boxShadow: '2px 2px 5px -3px rgb(0, 0, 0.5)', borderRadius: '10px', color: '#414042' }} className='d-inline-block pr-2'>
                            <div className="d-flex align-items-center justify-content-center">
                                <div style={{
                                    width: '30px',
                                    height: '30px',
                                    position: 'relative',
                                    filter: 'brightness(0) invert(0)'
                                }}>
                                    <img style={{ width: '100%', height: '100%',objectFit:'contain' }} src={item.icon_product_category} alt={item.slug_product_category} />
                                </div>
                                <small style={{ fontSize: '11px', display: 'inline-block', whiteSpace: 'nowrap' }} className='font-weight-bold'>{item.name_product_category}</small>
                            </div>
                        </div>
                    </a></Link>
                ))}
            </div>
        </div>
    </div>

    );
}

export default CategoryCard;