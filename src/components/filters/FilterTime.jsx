import { Icon } from "@iconify/react";
import MoonIcon from '@iconify/icons-fa-regular/moon';
import MoonSolidIcon from '@iconify/icons-fa-solid/moon';
import SunIcon from '@iconify/icons-fa-regular/sun';
import SunSolidIcon from '@iconify/icons-fa-solid/sun';
import classNames from "classnames";

const icon = {
    moonRegular: MoonIcon,
    sunRegular: SunIcon,
    moonSolid: MoonSolidIcon,
    sunSolid: SunSolidIcon,
}

function FilterTime(props) {
    const { data, value, onChangeValue } = props


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

    return (
        <>
            <h6 className="font-weight-bold">{data.name}</h6>
            <div className="form-row mb-0 pb-0">
                {data.items.map(item => (
                    <div className="col-6 py-2" key={`${item.slug}_${data.slug}`}>
                        <label style={{ fontSize: '11px', width: '100%' }} className={classNames("btn btn-light border form-check-label", {
                            'btn-primary': value.includes(item.slug),
                            'btn-light': value.includes(item.slug)
                        })}>
                            <input type="checkbox" value={item.slug} onChange={handleChange} style={{ opacity: 0, width: '100%', height: '100%', marginTop: '-15%', cursor: 'pointer' }} className="form-check-input bg-danger p-0 check_box filter-check" autoComplete="off" />
                            <span style={{ fontSize: '11px' }}>{item.name}</span> <br />
                            <span className="font-weight-bold" style={{ fontSize: '14px', color: value.includes(item.slug) ? '#fff' : '#0070ba' }}>{item.slug}</span>
                        </label>
                    </div>
                ))}
            </div>
        </>

    );
}

export default FilterTime;