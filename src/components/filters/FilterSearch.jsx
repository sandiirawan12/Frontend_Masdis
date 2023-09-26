function FilterSearch(props) {
    const { data, value, onChangeValue } = props
    const updateValue = (newValue) => {
        onChangeValue({ filter: data, value: newValue });
    };

    return (
        <div className="form-group mb-0">
            <label className="font-weight-bold">{data.name}</label>
            <input type="text" id="cari-hotel" onChange={(e) => updateValue(e.target.value)} value={value} className="form-control" style={{
                border: '1px solid black',
                borderRadius: '0'
            }} placeholder="Cari hotel impian anda ..." autoComplete="off" autoFocus />
        </div>

    );
}

export default FilterSearch;