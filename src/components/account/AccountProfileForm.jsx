import userApi from "@/api/user";
import { changeUser } from "@/store/user/userActions";
import moment from 'moment';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { toast } from "react-toastify";
import styled from "styled-components";

const LabelStyled = styled.label`
    font-size:16px;
    font-weight:bold;
    @media screen and (max-width:1224px){
        margin-bottom:1px;
        font-size:12px;
    }
    
    `

const ButtonStyled = styled.button`
    @media screen and (max-width:1224px){
        width:100%;
    }
`

function AccountProfileForm(props) {
    const { user, handleOpen } = props

    const [phoneCodes, setPhoneCodes] = useState([]);
    const dispatch = useDispatch();
    const [updateUser, setUpdateUser] = useState(user ?? {});
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const { access_token } = useSelector(state => state.token)

    useEffect(() => {
        userApi.getCountries().then(res => {
            if (res.success) {
                setPhoneCodes(res.data.map(item => ({ code: item.phone, country: item.country_name })))
            }
        })
    }, []);

    const handleChangeUpdateUser = (e) => {
        const { value, name } = e.target
        setUpdateUser(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => {
        updateUser.birthdate = updateUser?.birthdate?.replaceAll('-', '')
        
        userApi.updateProfile(access_token, { ...updateUser, birthdate: updateUser?.birthdate ? moment(updateUser?.birthdate).format('YYYY-MM-DD') : "" }).then(res => {
            if (res.success) {
                toast.success('Profile berhasil diubah')
                dispatch(changeUser(updateUser))
                handleOpen()
            } else {
                toast.error(res.message)
            }
        })
    }

    return (
        <RootStyled>
            <div className={"form-row"}>
                <div className="col-md-12">
                    <div className="form-group">
                        <LabelStyled>Nama Pengguna</LabelStyled>
                        <input type="text" name="username" className="form-control" value={(updateUser.username == '' ? updateUser.email : updateUser.username)} readOnly />
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group">
                        <LabelStyled>Panggilan/Sebutan</LabelStyled>
                        <select onChange={handleChangeUpdateUser} value={updateUser.title} name="title" className="form-control gender">
                            <option value="Mr" selected="selected">Mr.</option>
                            <option value="Mrs">Mrs.</option>
                            <option value="Ms">Ms.</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-5 col-xs-12">
                    <div className="form-group">
                        <LabelStyled>Nama Depan</LabelStyled>
                        <input onChange={handleChangeUpdateUser} type="text" name="first" className="form-control" value={updateUser.first} />
                    </div>
                </div>
                <div className="col-md-5 col-xs-12">
                    <div className="form-group">
                        <LabelStyled>Nama Keluarga/Belakang</LabelStyled>
                        <input onChange={handleChangeUpdateUser} type="text" name="last" className="form-control" value={updateUser.last} />
                    </div>
                </div>
                <div className="col-md-6 col-xs-12">
                    <div className="form-group">
                        <LabelStyled>Tanggal Lahir</LabelStyled>
                        <input type="date" name="birthdate" className="form-control datepickertest " onChange={handleChangeUpdateUser} value={moment(updateUser.birthdate).format('YYYY-MM-DD')} />
                    </div>
                </div>
                <div className="col-md-6 col-xs-12">
                    <div className="form-group">
                        <LabelStyled>Surel</LabelStyled>
                        <input required readOnly type="text" name="email" className="form-control" value={updateUser.email} />
                    </div>
                </div>
                <div className="col-md-6 col-xs-12">
                    <div className="form-group">
                        <LabelStyled>Kode Telepon</LabelStyled>
                        <div className="input-group" style={{ width: '100%' }}>
                            <select onChange={handleChangeUpdateUser} value={updateUser.phoneCode} name="phoneCode" className="form-control" style={{ width: '30%' }}>
                                {phoneCodes.map(pc => (
                                    <option key={pc.code} value={pc.code}>[{pc.country}]{' '} {pc.code}</option>
                                ))}
                            </select>
                            <input type="number" onChange={handleChangeUpdateUser} name="phone" className="form-control" value={updateUser.phone} style={{ width: '70%' }} />
                        </div>
                    </div>
                </div>



                {isTabletOrMobile ?
                    <div style={{
                        background: '#F5F6FA'
                    }} className="col-md-12 d-flex justify-content-end fixed-bottom p-3">
                        <ButtonStyled type="submit" onClick={handleSubmit} className="btn btn-primary btn-save">Simpan Perubahan</ButtonStyled>
                    </div>
                    : <div className="col-md-12 d-flex justify-content-end">
                        <ButtonStyled onClick={handleSubmit} type="submit" className="btn btn-primary btn-save">Simpan Perubahan</ButtonStyled>
                    </div>

                }
            </div>
        </RootStyled>
    );
}

const RootStyled = styled.div`
    @media screen and (max-width:1224px){
        padding-bottom:3rem;
        input,select,button{
            font-size:12px;
        }
    }
`

export default AccountProfileForm;