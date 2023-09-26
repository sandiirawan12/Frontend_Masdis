import helpApi from '@/api/help';
import Layout from '@/components/Layout'
import { useEffect, useState } from 'react';
function Page() {
    const [categories, setCategories] = useState([]);
    const [articles, setArticles] = useState([])


    useEffect(() => {
        helpApi.getCategory().then(res => {
            if (res.success) {
                setCategories(res.data)
            }
        })
    }, [])

    useEffect(() => {
        helpApi.getTopics().then(res => {
            if (res.success) {
                setArticles(res.data)
            }
        })
    }, [])


    return (
        <>
            <section>
                <div className="container py-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-9">
                            <h1 className='font-weight-bold text-primary'>Apa yang bisa kami bantu?</h1>
                            <p className="lead">Dapatkan informasi tentang mengubah atau membatalkan reservasi Anda, dan banyak lagi.</p>
                        </div>
                        <div className="col-md-3">
                            <img className="img-fluid" src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/illustration/undraw_road_sign_mfpo.svg" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container py-5 border-bottom">
                    <div className="row">
                        {categories.map(item => (
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="p-3 img-card"><img className="img-fluid" src={item.icon} /></div>
                                    <div className="card-body border-top"><h5 className='font-weight-bold text-primary'>{item.title}</h5></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <h2 className="mb-3 font-weight-bold text-primary">Semua topik</h2>
                    <div className="row">
                        {articles.map(item => (
                            <div className="col-md-3 py-3">
                                <img src={item?.icon} className="serta-icon" />
                                <h5 className='font-weight-bold text-primary'>{item?.title}</h5>
                                <ul className="flex-column nav">
                                    {item?.topics?.map(item => (
                                        <li className='py-1'><a className='text-dark' href={`/help/${item.id}`}><span>{item.title}<span> <i className="fa fa-angle-right" /></span></span></a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </>
    );
}

Page.Layout = Layout

export default Page;