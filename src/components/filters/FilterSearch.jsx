function FilterSearch(props) {
    const { data, value, onChangeValue } = props
    const updateValue = (newValue) => {
        onChangeValue({ filter: data, value: newValue });
    };

    return (
        <div className="form-group mb-0">
            <label className="font-weight-bold">{data.name}</label>
            <input type="text" id="cari-hotel" onChange={(e) => updateValue(e.target.value)} value={value} className="form-control" style={{
                border: '1px solid #e7e7e7',
                borderRadius: '10px'
            }} placeholder="Cari nama hotel ..." autoComplete="off" autoFocus />
        </div>

    );
}

export default FilterSearch;