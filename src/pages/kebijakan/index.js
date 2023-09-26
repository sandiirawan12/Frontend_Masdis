import Layout from '@/components/Layout'
import Link from 'next/link';
function Page() {
    return (
        <>
            <section id="kebijakan" className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Link href={'/kebijakan/pembatalan'}>
                                <a>
                                    <div className="card mb-4">
                                        <div className="card-body text-secondary">
                                            <img src="https://cdn.masterdiskon.com/masterdiskon/assets/icon/travel-line/003-backpack.svg" style={{ height: 50 }} className="mb-3" />
                                            <h4>Kebijakan Pembatalan</h4>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link href={'/kebijakan/komunikasi'}>
                                <a>
                                    <div className="card mb-4">
                                        <div className="card-body text-secondary">
                                            <img src="https://cdn.masterdiskon.com/masterdiskon/assets/icon/travel-line/003-backpack.svg" style={{ height: 50 }} className="mb-3" />
                                            <h4>Kebijakan Komunikasi</h4>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link href='/kebijakan/term-and-condition'>
                                <a>
                                    <div className="card mb-4">
                                        <div className="card-body text-secondary">
                                            <img src="https://cdn.masterdiskon.com/masterdiskon/assets/icon/travel-line/003-backpack.svg" style={{ height: 50 }} className="mb-3" />
                                            <h4>Syarat dan Ketentuan</h4>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link href={'/kebijakan/lain'}>
                                <a>
                                    <div className="card mb-4">
                                        <div className="card-body text-secondary">
                                            <img src="https://cdn.masterdiskon.com/masterdiskon/assets/icon/travel-line/003-backpack.svg" style={{ height: 50 }} className="mb-3" />
                                            <h4>Kebijakan Lain</h4>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

Page.Layout = Layout

export default Page;