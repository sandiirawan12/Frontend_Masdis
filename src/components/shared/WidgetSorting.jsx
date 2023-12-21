import SortButton from "../sorts/SortButton";
import SortSelect from "../sorts/SortSelect";

const sortComponents = {
    button: SortButton,
    select: SortSelect
}


function WidgetSorting(props) {
    const { data, dispatch, state } = props
    const SortComponent = sortComponents[data.type];

    return (
    <>
            <SortComponent sort={data.sorts} dispatch={dispatch} state={state} />
        </>
    );
}



export default WidgetSorting;