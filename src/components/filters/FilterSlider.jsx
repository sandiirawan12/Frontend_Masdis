import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const { createSliderWithTooltip } = Slider;
const Range = (Slider.Range);

function FilterSlider(props) {
    const { data, value, onChangeValue } = props

    const updateValue = (newValue) => {
        if (onChangeValue) {
            onChangeValue({ filter: data, value: newValue.toString() })
        }
    }

    function formatRupiah(angka) {
        var number_string = String(angka).replace(/[^,\d]/g, '').toString(),
            split = number_string.split(','),
            sisa = split[0].length % 3,
            rupiah = split[0].substr(0, sisa),
            ribuan = split[0].substr(sisa).match(/\d{3}/gi);
        if (ribuan) {
            let separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }
        return `Rp. ${rupiah}`
    }

    return (
        <>
            <h6 className='mb-1 font-weight-bold'>{data.name}</h6>
            <div className='flex-column'>
                <small>{formatRupiah(value[0])}</small>
                <small className='float-right'>{formatRupiah(value[1])}</small>
            </div>
            <br />
            <div style={{ margin: '0 35px' }}>
                {/* <Range autoFocus value={value.length > 0 ? value : data.defaultValue} defaultValue={data.defaultValue} onChange={updateValue} tipProps={{ visible: true }} tipFormatter={value => `${formatRupiah(value)}`} allowCross={false} min={data.defaultValue[0]} max={data.defaultValue[1]}
                /> */}

                <Range defaultValue={data.defaultValue} onChange={updateValue} min={data.defaultValue[0]} max={data.defaultValue[1]}
                />
            </div>
        </>
    );
}

export default FilterSlider;