import classNames from "classnames";
import { useEffect } from "react";

function Drawer(props) {
    const { open, children, toggle } = props
    useEffect(() => {
        if (open) {
            document.body.classList.add('drawer-open')
        } else {
            document.body.classList.remove('drawer-open')
        }
    }, [open])



    return <>
        <div className={classNames(`drawer fade`, {
            'show': open
        })} role='dialog' tabIndex={'-1'}>
            <div className="drawer-dialog">
                <div className="drawer-content" >
                    {children}
                </div>
            </div>
        </div>
        <div onClick={toggle} className={classNames("drawer-backdrop", { 'show': open })} />
    </>
}


export default Drawer;