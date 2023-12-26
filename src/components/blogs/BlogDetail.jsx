import { Icon } from '@iconify/react';
import WhatsappIcon from '@iconify-icons/fa/whatsapp';
import BookmarkIcon from '@iconify-icons/fa/book';
import ThumbUpIcon from '@iconify/icons-fa-solid/thumbs-up';
import TwitterIcon from '@iconify/icons-eva/twitter-fill';
import FacebookIcon from '@iconify/icons-eva/facebook-fill';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import moment from 'moment'
import { useSelector } from 'react-redux';
import blogsApi from '@/api/blogs';
import Head from "next/head"

import ReactGA from 'react-ga';
ReactGA.initialize('G-56R5954QCE');

function BlogDetail() {
    const router = useRouter()
    const { access_token } = useSelector(state => state.token)
    const [blog, setBlog] = useState({})

    useEffect(() => {
        if (router.isReady) {
            blogsApi.getBlog(access_token, router.query.slug).then(res => {
                if (res.success) {
                    setBlog(res.data)
                    ReactTitle(res.data)
                }
            })
        }
    }, [router.query.slug]);

    function ReactTitle(text) {

        document.title = text?.title + ' -  Harga Tiket Pesawat dan Hotel Promo Spesial di Masterdiskon.com';
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    return (
        <>

            <Head>
                <meta charSet="UTF-8" />
                <title>{blog?.title + ' -  Masterdiskon.com'}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={'Artikel mengenai ' + blog?.title + ' bersama Masterdiskon'} />
                <meta property="og:title" content={blog?.title + ' -  Masterdiskon.com'} />
                <meta property="og:type" content="Website" />
                <meta property="og:url" content="https://masterdiskon.com/blogs" />

            </Head>
            <div style={{ background: '#f5f6fa' }}>
                <div className="container container-blog py-3">
                    <section>
                        <div className="blog-post my-3">
                            <span className="badge badge-warning mb-1 name_blog_category">{blog?.category?.name_blog_category}</span>
                            <h4 className="blog-post-title text-primary font-weight-bold">{blog?.title} </h4>
                            <div className="row my-3">
                                <div className="media col-md-6">
                                    <img className="mr-3 rounded-circle img_author" style={{ height: 47, width: 47, objectFit: 'contain' }} src={blog?.author?.img} alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <h5 className="mb-0 font-weight-bold">{blog?.author?.namalengkap}</h5>
                                        <p className="text-secondary mb-0 tanggal_posting">{moment(blog?.date_added).format('DD MMMM YYYY')}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 share-btn-container">
                                    <a className="share-btn btn btn-warning text-white" href={`https://twitter.com/share?url=${encodeURIComponent(document.location)}`} title="Share on Twitter">
                                        <Icon icon={TwitterIcon} />
                                    </a>
                                    <a className="share-btn btn btn-warning text-white" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(document.location)}`} title="Share on Facebook">
                                        <Icon icon={FacebookIcon} />
                                    </a>
                                    <a className="share-btn btn btn-warning text-white" href={`https://api.whatsapp.com/send?text=${blog?.title} - ${encodeURIComponent(document.location)}`} title="More share options">
                                        <Icon icon={WhatsappIcon} />
                                    </a>
                                    <div className="btn btn-warning text-white">
                                        <Icon icon={BookmarkIcon} /> <span className="read_times">{blog?.read_times}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="featured-banner p-1 bg-white" style={{
                                boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)',
                                borderRadius: '15px',
                                height: 'auto'
                            }}>
                                <img src={blog?.img} className="card-img-top featured_image" style={{ objectFit: 'cover', borderRadius: '15px' }} />
                                <span className="imgSource"><span className="sumber-foto px-2">Sumber foto: <a target="_blank" href={blog?.image_source_url}>{blog?.image_source}</a></span></span>
                            </div>
                            <div className="content_blog py-5 text-justify" dangerouslySetInnerHTML={{ __html: blog?.content_blog }} />
                        </div>
                    </section>
                    <section>
                        <div className="container container-blog">
                            {/* <div className="my-5 text-center thisClap"><button className="btn text-white btn-clap border bayang" style={{
                            borderRadius: '50%',
                            width: '70px', height: '70px', background: 'rgb(74,110,170)'
                        }}><Icon style={{ fontSize: '35px' }} icon={ThumbUpIcon} className="icon-clap" /></button></div> */}
                            <div className=" text-center">
                                <div className="hastag"><span className="badge badge-grey p-2 mb-1">#vaksinasi</span><span className="badge badge-grey p-2 mb-1"># covid 19</span><span className="badge badge-grey p-2 mb-1"># tips</span></div>
                            </div>
                            <div className="my-3 text-center">
                                <div className>
                                    <a className="share-btn btn-sm btn btn-outline-dark mb-1" href={`https://twitter.com/share?url=${encodeURIComponent(document.location)}&text=${blog?.title}`}>
                                        <i className="lab la-twitter" />
                                        <span className="share-btn-text-sr">Twitter</span>
                                    </a>
                                    <a className="share-btn btn btn-sm btn-outline-dark mb-1" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(document.location)}`} title="Share on Facebook">
                                        <i className="lab la-facebook" />
                                        <span className="share-btn-text-sr">Facebook</span>
                                    </a>
                                    <a className="share-btn btn btn-sm btn-outline-dark mb-1" href={`https://api.whatsapp.com/send?text=${blog?.title} - ${encodeURIComponent(document.location)}`} title="Share via whatsapp">
                                        <i className="lab la-whatsapp" />
                                        <span className="share-btn-text-sr">Whatsapp</span>
                                    </a>
                                </div>
                            </div>
                            <div className="media ava-bloger p-3 mt-5 shadow rounded">
                                <img className="mr-3 rounded-circle img-thumbnail img_author" style={{ height: 80, width: 80, objectFit: 'contain' }} src={blog?.author?.img} alt="Generic placeholder image" />
                                <div className="media-body">
                                    <h5 className="mb-0">{blog?.author?.namalengkap}</h5>
                                    <p className="text-secondary mb-0 tanggal_posting">{moment(blog?.date_added).format('DD MMMM YYYY')}</p>
                                    <p className="badge badge-danger mb-1">Content Writer</p>
                                </div>
                            </div>
                        </div>
                    </section></div>
            </div>
        </>

    );
}

export default BlogDetail;