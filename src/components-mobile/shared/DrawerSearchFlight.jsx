import { BottomSheet, SheetHeader } from "@biotic-ui/bottom-sheet";
import ReactPlaceholder from "react-placeholder/lib";
import styled from 'styled-components';

function DrawerSearchFlight(props) {
    const { options, handleChange, isLoading, open, onClose } = props;

    const arr = [1, 2, 3, 4, 5];


    return (
        <RootStyled open={open} onClose={onClose}>
            <SheetHeader style={{ display: 'block', position: 'sticky', left: 0, top: 0, zIndex: 1, background: 'white', paddingTop: '15px' }}>
                <div className="container">
                    <div className="d-flex justify-content-between mb-2 align-items-center">
                        <h5 className="font-weight-bold w-100">Pilih Kota atau Bandara</h5>
                        <h5 onClick={onClose}>
                            <i class="fas fa-times"></i>
                        </h5>
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={e => handleChange('keyword', e.target.value)} className="form-control" style={{ fontSize: '14x' }} placeholder="Search Airport" />
                    </div>
                </div>
            </SheetHeader>
            <div className="container">
                <ul class="list-group" style={{ height: '100%' }}>
                    {isLoading ? arr.map(item => (
                        <li className='d-flex justify-content-between align-items-center py-2 px-1'>
                            <ReactPlaceholder type='text' rows={1} />
                        </li>
                    )) :
                        options.map(item => (
                            <li onClick={() => handleChange('selected', item)} className="list-group-item border-0 p-0" style={{ borderBottom: '1px solid black' }}>
                                <small className="font-weight-bold m-0">{item.text} ({item.id})</small>
                                <small className="text-secondary d-block m-0">
                                    {item.city}, {item.country_name}</small>
                            </li>
                        ))
                    }

                </ul>
            </div>

        </RootStyled>
    );
}

const RootStyled = styled(BottomSheet)`
    /* padding-top:10px; */
    height:80vh;


`

export default DrawerSearchFlight;