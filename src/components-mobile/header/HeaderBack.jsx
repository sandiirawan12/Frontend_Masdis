import { Icon } from "@iconify/react";
import PropTypes from 'prop-types';

function HeaderBack(props) {
    const { title, onBack, children, style } = props

    return (
        <nav className="navbar sticky-top navbar-expand-sm d-flex justify-content-center align-items-center navbar-light py-4" style={{ background: '#fff', color:'#2182c3',
            ...style,
        }}>
            <div className="row" style={{ width: '100%', margin: '-8px 0' }}>
                <div className="col-2 d-flex align-items-center">
                    <Icon icon="tabler:chevron-left" onClick={onBack} style={{fontSize: '24px'}} />
                </div>
                {title ?
                    <div style={{ textAlign: 'center' }} className="col-8 d-flex justify-content-center align-items-center">
                        <span className="font-weight-bold">{title}</span>
                    </div>
                    : children}
            </div>
        </nav>

    );
}

HeaderBack.propTypes = {
    onBack: PropTypes.func,
    title: PropTypes.string
}

export default HeaderBack;