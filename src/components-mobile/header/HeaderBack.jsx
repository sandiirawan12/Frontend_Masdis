import { Icon } from "@iconify/react";
import ArrowIcon from '@iconify/icons-fa-solid/arrow-left';
import PropTypes from 'prop-types';

function HeaderBack(props) {
    const { title, onBack, children, style } = props

    return (
        <nav className="navbar sticky-top navbar-expand-sm d-flex justify-content-center align-items-center navbar-light py-3" style={{ background: '#006FB9',color:'white',
            ...style,
        }}>
            <div className="row" style={{ width: '100%', margin: '-8px 0' }}>
                <div className="col-2 d-flex align-items-center">
                    <Icon icon={ArrowIcon} onClick={onBack} />
                </div>
                {title ?
                    <div style={{ textAlign: 'center' }} className="col-8 d-flex justify-content-center align-items-center">
                        <div className="font-weight-bold">{title}</div>
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