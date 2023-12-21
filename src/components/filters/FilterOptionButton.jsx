import classNames from "classnames";

function FilterOptionButton(props) {
    const { data, value, onChangeValue } = props

    const updateValue = (newValue) => {
        if (onChangeValue) {
            onChangeValue({ filter: data, value: newValue })
        }
    }

    const items = data.items.map((item) => (
        <button type="button" onClick={() => updateValue(item.slug)} className={classNames("btn btn-block", {
            'btn-primary': value === item.slug,
            'btn-secondary': value !== item.slug
        })}>{item.name}</button>
    ))

    return (
        <>
            <h6>{data.name}</h6>
            {items}
        </>
    );
}

export default FilterOptionButton;