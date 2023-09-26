import { Icon } from "@iconify/react";
import Link from "next/link";
import TwitterIcon from '@iconify-icons/fa/twitter';
import FacebookIcon from '@iconify-icons/fa/facebook-square';
import InstagramIcon from '@iconify-icons/fa/instagram';
import { useMediaQuery } from "react-responsive";

function BlogLayout({ children }) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });

    return (
        <>
            <nav className="navbar navbar-expand-lg w-100 navbar-white">
                <div className="container">
                    {isTabletOrMobile &&
                        <Link href='/'><a className="text-dark">
                            <i class="fas fa-arrow-left"></i>
                        </a></Link>
                    }
                    <Link href="/blogs">
                        <a className="navbar-brand mx-auto" >
                            <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo.png" />
                        </a>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="mr-auto" />
                        <ul className="navbar-nav">
                            <li className="nav-item mr-3">
                                <Link href="/">
                                    <a className="nav-link btn btn-primary" >Kembali ke Perjalanan</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {children}
            <footer className="pt-4" style={{ background: '#0F2131', letterSpacing: '1.6px' }}>
                <div className="container text-center">
                    <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo.png" />
                    <div className="my-3">
                        <a href="https://www.facebook.com/masterdiskonint/">
                            <Icon icon={FacebookIcon} style={{ color: 'white', fontSize: '1.4rem', width: '40px' }} />
                        </a>
                        <a href="https://www.instagram.com/master.diskon">

                            <Icon icon={InstagramIcon} style={{ color: 'white', fontSize: '1.4rem', width: '40px' }} />
                        </a>
                        <a href="https://twitter.com/masterdiskonid">
                            <Icon icon={TwitterIcon} style={{ color: 'white', fontSize: '1.4rem', width: '40px' }} />
                        </a>
                    </div>
                    <div className="text-center text-muted pb-2">
                        © 2022 Master Diskon Internasional
                    </div>
                </div>
            </footer>


        </>
    );
}

export default BlogLayout;