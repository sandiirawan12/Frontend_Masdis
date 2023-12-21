import { Icon } from '@iconify/react'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { useState } from 'react';

function FilterCheck(props) {
    const { data, value, onChangeValue } = props;
    const [showMore, setShowMore] = useState(false);
    const [limit, setLimit] = useState(10)

    const handleShowMore = () => {
        if (!showMore) {
            setLimit(data.items.length)
        } else {
            setLimit(10)
        }
        setShowMore(prev => !prev)
    }

    const updateValue = (newValue) => {
        if (onChangeValue) {
            onChangeValue({ filter: data, value: newValue })
        }
    }
    const handleChange = (e) => {
        if (data.items.length < 2) {
            if (e.target.checked && !value.includes(e.target.value)) {
                updateValue([e.target.value])
            }

            if (!e.target.checked && value.includes(e.target.value)) { updateValue(value.filter(x => x !== e.target.value)) }
        } else {
            if (e.target.checked && !value.includes(e.target.value)) {
                updateValue([...value, e.target.value])
            }

            if (!e.target.checked && value.includes(e.target.value)) { updateValue(value.filter(x => x !== e.target.value)) }
        }
    }

    const itemList = data.items.slice(0, limit).map((item, index) => {
        let label;
        if (item.icon) {
            if (item.loop) {
                if (item.iconType) {
                    label = []
                    for (let index = 0; index < 1; index++) {
                        label[index] =
                            <div>
                                <Icon icon={item?.icon} style={{ width: '20px', height: '20px' }} />
                                <span className='ml-2'>{item.name}</span>
                            </div> 
                    }
                } else {
                    label = []
                    for (let index = 0; index < Number(item.slug); index++) {
                        if (item.isImg) {
                            label[index] = <div style={{ width: '30px', height: '30px', position: 'relative', display: 'inline-block' }}>
                                <Icon icon={item.icon} style={{ width: '20px', height: '20px' }} />
                            </div>
                        } else {
                            label[index] = <Icon icon={item.icon} style={{ width: '20px', height: '20px' }} />
                        }
                    }
                }
            } else {
                if (item.isImg) {
                    label[index] = <div style={{ width: '30px', height: '30px', position: 'relative', display: 'inline-block' }}>
                        <Icon icon={item.icon} style={{ width: '20px', height: '20px' }} />
                    </div>
                } else {
                    label[index] = <Icon icon={item.icon} style={{ width: '20px', height: '20px' }} />
                }
            }
        } else {
            if (item.imgType) {
                label =
                <div>
                    <img src={item.img} style={{ width: '20px', height: '20px' }} />
                    <span className='ml-2'>{item.name}</span>
                </div>
            } else {
                label = item.name
            }
        }

        return (
            <div key={item.slug} className="custom-control custom-checkbox mb-2">
                <input type="checkbox" className="custom-control-input" id={`${item.slug}_${index}`} name="transit" value={item.slug} checked={value.find(v => v == item.slug)} onChange={handleChange} />
                <label className="custom-control-label text-dark" htmlFor={`${item.slug}_${index}`}>{label}</label>
            </div>
        )
    })

    return (
        <>
            <h6 className='font-weight-bold mb-2' style={{ fontSize: '16px' }}>{data.name}</h6>
            {itemList}
            {(data.items.length >= limit && data.items.length > 10) &&
                <a className='d-flex justify-content-between align-items-center mt-4' href='javascript:void(0)' onClick={handleShowMore}>{showMore ? <>
                    <span className='font-weight-bold text-dark'>{'Lihat sedikit'}</span>
                    <Icon icon="line-md:chevron-up-circle-twotone" style={{ fontSize: '24px' }} className='text-primary' />
                </> : <>
                    <span className='font-weight-bold text-dark'>{`Lihat semua`}</span>
                    <Icon icon="line-md:chevron-down-circle-twotone" style={{ fontSize: '24px' }} className='text-primary' />
                </>
                }</a>
            }
        </>

    );
}

FilterCheck.propTypes = {
    data: PropTypes.array,
    value: PropTypes.string,
    onChangeValue: PropTypes.func,
    name: PropTypes.string
}

export default FilterCheck;