import Link from "next/link";
import styled from "styled-components";


const LogoStyled = styled.img`
    height:50px;
    vertical-align:middle;
`


function Header() {
    return (
        <nav className="navbar sticky-top bg-white navbar-expand-lg shadow p-0">
            <div className="container d-flex justify-content-center align-items-center pl-3">
                <Link href='/' >
                    <a className="navbar-brand">
                        <LogoStyled placeholder='blur' src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo_big.png" />
                    </a>
                </Link>
            </div>
        </nav >
    );
}

export default Header;