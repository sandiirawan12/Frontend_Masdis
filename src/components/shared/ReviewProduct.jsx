import { Icon } from "@iconify/react";
import MoreIcon from '@iconify/icons-eva/more-horizontal-fill';
import ThumsUpIcon from '@iconify/icons-fa-solid/thumbs-up';
import shopApi from "@/api/shop";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MDPagination from "./MDPagination";

function ReviewProduct(props) {
    const { id } = props;
    const [options, setOptions] = useState({
        page: 1,
        limit: 5,
        id_product: id,
        'rating[]': [],
        helpful: '',
        order: '',
        order_type: '',
        'review_type[]': []
    })

    const { access_token } = useSelector(state => state.token)
    const [reviews, setReviews] = useState([])
    const [meta, setMeta] = useState()

    const [reviewType, setReviewType] = useState([])

    useEffect(() => {
        shopApi.getReviews(access_token, options).then(res => {
            if (res.success) {
                setReviews(res.data)
                setMeta(res.meta)
            } else {
                setReviews([])
            }
        })
    }, [id, options]);

    useEffect(() => {
        shopApi.getReviewType(access_token).then(res => {
            if (res.success) {
                setReviewType(res.data)
            }
        })
    }, []);

    const handlePageChange = (page) => {
        setOptions(prev => ({ ...prev, page }))
    }

    const handleFilterReview = (e) => {
        const { value, checked, name } = e.target
        let arr = [...options[`${name}[]`]];

        if (checked) {
            arr.push(value);
            arr = [...new Set(arr)]
        } else {
            const indexOf = arr.indexOf(value)
            arr.splice(indexOf, 1);
        }
        setOptions(prev => ({ ...prev, [`${name}[]`]: arr }))
    }


    return (
        <div className="list-group mt-3 bg-white" style={{ borderRadius: '20px', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)' }}>
            <div className="list-group-item border-bottom py-3 bg-primary text-white"><b>Ulasan</b></div>
            <div className="list-group-item border-0 bg-transparent">
                <div className="row">
                    <div className="col-md-6">
                        <p><b>Peringkat dari wisatawan</b></p>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" name="rating" onChange={handleFilterReview} className="custom-control-input" id="rating1" value={5} />
                            <label className="custom-control-label" htmlFor="rating1">Luar Biasa</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" name="rating" onChange={handleFilterReview} className="custom-control-input" id="rating2" value={4} />
                            <label className="custom-control-label" htmlFor="rating2">Bagus Sekali</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" name="rating" onChange={handleFilterReview} className="custom-control-input" id="rating3" value={3} />
                            <label className="custom-control-label" htmlFor="rating3">Bagus</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" name="rating" onChange={handleFilterReview} className="custom-control-input" id="rating4" value={2} />
                            <label className="custom-control-label" htmlFor="rating4">Buruk</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" name="rating" onChange={handleFilterReview} className="custom-control-input" id="rating5" value={1} />
                            <label className="custom-control-label" htmlFor="rating5">Buruk Sekali</label>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <p><b>Jenis Kunjungan</b></p>
                        <div className="review-type-container">
                            {reviewType.map(item => (
                                <div className="custom-control custom-checkbox" key={item.id_review_type}>
                                    <input type="checkbox" name="review_type" onChange={handleFilterReview} value={item.slug_review_type} className="custom-control-input" id={item.id_review_type} />  <label className="custom-control-label" htmlFor={item.id_review_type}>{item.name_review_type}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-2'>
                {reviews.map(item => (
                    <div className="card mb-2">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">
                                    <h6 className='mb-0'>{
                                        item?.reviewer?.first
                                    }{" "}{
                                            item?.reviewer?.last
                                        }</h6>
                                    <small className='text-secondary mt-0'>{item?.date_added}</small>
                                </div>
                                <div className="col-8">
                                    <span className="badge badge-primary">
                                        <h6 className='d-inline'>{item?.rating}</h6>/5
                                    </span>
                                    <p>{item?.content_review}</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <button style={{ boxShadow: 'none' }} className='btn btn-transparent text-secondary d-flex p-0  align-items-center'>
                                            <Icon icon={ThumsUpIcon} className="mr-2" />Apa review ini membantu?
                                        </button>
                                        <button className='btn p-0  border-0 text-secondary' style={{ boxShadow: 'none' }}>
                                            <Icon icon={MoreIcon} style={{ fontSize: '25px' }} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {meta &&
                    <div className="mt-4 d-flex justify-content-end w-100">
                        <MDPagination onPageChange={handlePageChange} currentPage={meta.page} pageSize={meta.limit} totalCount={meta.total} className="pagination-bar" />
                    </div>
                }
            </div>
        </div>

    );
}

export default ReviewProduct;