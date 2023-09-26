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
                label = []
                for (let index = 0; index < Number(item.slug); index++) {
                    if (item.isImg) {
                        label[index] = <div style={{ width: '20px', height: '20px', position: 'relative', display: 'inline-block' }}>
                            <Image src={item.icon} layout='fill' objectFit='cover' />
                        </div>
                    } else {
                        label[index] = <Icon icon={item.icon} className={item.className} />
                    }
                }
            } else {
                if (item.isImg) {
                    label[index] = <div style={{ width: '20px', height: '20px', position: 'relative', display: 'inline-block' }}>
                        <Image src={item.icon} layout='fill' objectFit='cover' />
                    </div>
                } else {
                    label = <Icon icon={item.icon} className={item.className} />
                }
            }
        } else {
            label = item.name
        }

        return (
            <div key={item.slug} className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id={`${item.slug}_${index}`} name="transit" value={item.slug} checked={value.find(v => v == item.slug)} onChange={handleChange} />
                <label className="custom-control-label" htmlFor={`${item.slug}_${index}`}>{label}</label>
            </div>
        )
    })

    return (
        <>
            <h6 className='font-weight-bold'>{data.name}</h6>
            {itemList}
            {(data.items.length >= limit && data.items.length > 10) &&
                <a className='text-white mt-4 d-flex align-items-center' href='javascript:void(0)' onClick={handleShowMore}>{showMore ? <>
                    {'Lihat sebagian'}
                    <i className="fas fa-angle-up ml-2 mt-1"></i>
                </> : <>
                    {`Lihat semua (${data.items.length})`}

                    <i class="fas fa-angle-down ml-2 mt-1"></i>
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