import { BottomSheet, SheetContent } from "@biotic-ui/bottom-sheet";
import classNames from "classnames";

function DrawerClassFlight(props) {
    const { open, onClose, value, handleChange } = props;

    return (
        <BottomSheet open={open} onClose={onClose}>
            <SheetContent>
                <ul className="list-group">
                    <li className={classNames("list-group-item", {
                        'text-primary': value === 'E'
                    })} onClick={() => handleChange('E')}>
                        ECONOMY CLASS
                    </li>
                    <li className={classNames("list-group-item", {
                        'text-primary': value === 'S'
                    })} onClick={() => handleChange('S')}>
                        PREMIUM ECONOMY
                    </li>
                    <li className={classNames("list-group-item", {
                        'text-primary': value === 'B'
                    })} onClick={() => handleChange('B')}>
                        BUSINESS CLASS
                    </li>
                    <li className={classNames("list-group-item", {
                        'text-primary': value === 'F'
                    })} onClick={() => handleChange('F')}>
                        FIRST CLASS
                    </li >
                </ul >
            </SheetContent >
        </BottomSheet >
    );
}

export default DrawerClassFlight;