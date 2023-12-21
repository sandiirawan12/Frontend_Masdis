import HeaderBack from '@/components-mobile/header/HeaderBack';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import EditIcon from '@iconify-icons/fa/edit';
import TrashIcon from '@iconify-icons/fa/trash';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const TextStyled = styled.span`
	text-transform: capitalize;

    @media screen and (max-width:1224px){
        font-size:14px;
    }

`
function AccountQuickpick(props) {
    const { data, deleteQuickpick } = props
    const router = useRouter()

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    const handleConfirmDelete = (id) => {
        Swal.fire({
            titleText: 'Hapus Penumpang Ini?',
            text: 'Dengan menghapus penumpang ini, detail penumpang tidak akan terisi secara otomatis di pemesanan berikutnya.',
            icon: 'error',
            confirmButtonColor: 'rgb(0, 112, 186)',
        }).then(res => {
            if (res.isConfirmed) {
                deleteQuickpick(id)
            }
        })
    }


    let listQuickpick = data?.map((item) => (
        <span className="qp-list" key={item}>
            <div className="card mb-3" style={{ borderRadius: '15px'}}>
                <div className="card-body py-3 d-flex justify-content-between">
                    <TextStyled className="card-title mb-0">
                        <Icon icon="solar:user-check-broken" className='mr-3 text-primary' style={{fontSize: '24px'}} />
                        {item.firstname} {item.lastname}
                    </TextStyled>
                    <div>
                        <Link href={`/user/quickpick/edit/${item.id}`}>
                            <a className="mx-2">
                                Edit
                            </a>
                        </Link>
                        <span onClick={() => handleConfirmDelete(item.id)} className="mx-2 text-danger" style={{cursor: 'pointer'}}>
                            Hapus
                        </span>
                    </div>
                </div>
            </div>
        </span>
    ))

    return (<>
        {isTabletOrMobile &&
            <HeaderBack title='Quickpick' onBack={() => router.back()} />
        }
        <div className={classNames('', {
            'p-3': isTabletOrMobile
        })}>
            {!isTabletOrMobile && <>
                <h4 className='text-primary font-weight-bold'>Daftar Penumpang</h4>
                <p>Tambahkan daftar ini untuk proses pemesanan yang lebih cepat</p>
            </>}
            {listQuickpick}
            <Link href="/user/quickpick/new">
                <a className="btn btn-block btn-primary my-3">Tambahkan penumpang</a>
            </Link>
        </div>



    </>)
}

AccountQuickpick.propTypes = {
    data: PropTypes.array
}

export default AccountQuickpick;