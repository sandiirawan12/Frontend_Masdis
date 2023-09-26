import helpApi from "@/api/help";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Page() {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState()
    const [topics, setTopics] = useState([])

    const handleSetArticle = (item) => {
        setArticle(item)
    }

    useEffect(() => {
        if (router.isReady) {
            helpApi.getArticles(router.query.id).then(res => {
                if (res.success) {
                    setArticles(res.data)
                    setArticle()
                }
            })
        }
    }, [router.query])

    useEffect(() => {
        if (router.isReady) {
            helpApi.getTopics().then(res => {
                if (res.success) {
                    setTitle(res.data?.map(item => item.topics)?.reduce((a, b) => a.concat(b), [])?.find(item => item?.id == router.query.id).title)
                }
            })
        }
    }, [router.query.id])

    useEffect(() => {
        helpApi.getTopics().then(res => {
            if (res.success) {
                setTopics(res.data)
            }
        })
    }, [])


    return (
        <>
            <section className="py-4" style={{ background: '#f2f8ff' }}>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center">
                        <h3>Help Center</h3>
                    </div>
                </div>
            </section>

            <section className="py-3">
                <div className="container">
                    <div className="d-flex">
                        <span className="px-2">Pusat Bantuan</span> &gt;
                        <span className="px-2">{title}</span>
                        {article && <>
                            &gt;
                            <span className="px-2">{article.article_title}</span>
                        </>
                        }
                    </div>
                </div>
            </section>


            <div className="container my-5">
                <div className="row">
                    <div className="col-3 collapse d-md-flex" id="sidebar">
                        <ul className="nav flex-column flex-nowrap">
                            {topics.map(item => (
                                <li className="nav-item"> <a href="#" className="nav-link text-dark font-weight-bold"><b>{item.title}</b></a>
                                    <ul className="nav">
                                        {item?.topics?.map(topic => (
                                            <li className="nav-item w-100">
                                                <Link href={`/help/${topic.id}`}>
                                                    <a className="nav-link py-1 ml-3 text-dark"><span>{topic.title}<span> <i className="fa fa-angle-right" /></span></span></a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-9 pt-2">
                        {article ?
                            <>
                                <h2>{article.article_title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: article.article_content }} />
                            </>
                            : <>
                                <h2>{title}</h2>
                                <ul className="nav">
                                    {articles.map(item => (
                                        <li className="nav-item w-100 py-1">
                                            <a href="#" onClick={() => handleSetArticle(item)} className="text-dark lead">{item.article_title}<i className="fa fa-angle-right" /></a>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        }
                    </div>
                </div>
            </div>

        </>
    );
}

Page.Layout = Layout

export default Page;