const SearchFilterHandler = {
    type: "search",
    serialize: (value) => value,
    deserialize: (value) => value,
    isDefaultValue: (filter, value) => SearchFilterHandler.getDefaultValue() === value,
    getDefaultValue: () => '',
};

const CheckFilterHandler = {
    type: "check",
    serialize: (value) => value.join(","),
    deserialize: (value) => (value ? value.split(",") : []),
    isDefaultValue: (filter, value) => value.length === 0,
    getDefaultValue: () => [],
};
const RangeFilterHandler = {
    type: "range",
    serialize: (value) => value,
    deserialize: (value) => {
        return (value ? value.split(',') : RangeFilterHandler.getDefaultValue())
    },
    isDefaultValue: (filter, value) => value.split(',')[0] === RangeFilterHandler.getDefaultValue()[0] && value.split(',')[1] === RangeFilterHandler.getDefaultValue()[1],
    getDefaultValue: () => [0, 0],
};

const OptionButtonFilterHandler = {
    type: "option-button",
    serialize: (value) => value,
    deserialize: (value) => value,
    isDefaultValue: (value) => value === OptionButtonFilterHandler.getDefaultValue(),
    getDefaultValue: () => '',
};

const TimeFilterHandler = {
    type: "time",
    serialize: (value) => value.join(","),
    deserialize: (value) => (value ? value.split(",") : []),
    isDefaultValue: (filter, value) => value.length === 0,
    getDefaultValue: () => [],
};


const handlers = [
    SearchFilterHandler,
    CheckFilterHandler,
    RangeFilterHandler,
    OptionButtonFilterHandler,
    TimeFilterHandler
];

export default function getFilterHandler(filter) {
    return handlers.find((x) => x.type === filter.type);
}
