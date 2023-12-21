import styled from "styled-components";
import Link from "next/link";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";

function CardProductGeneral(props) {
    const { data } = props
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' }); 

    return (
        <Link href={`/product/category/detail/${data?.slug_product}`}><a className='text-dark'>
            <CardStyled className="card">
                <ContainerImage>
                    <ImgStyled src={data?.img_featured || 'https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-picture-coming-creative-vector-png-image_40968940.jpg'} className="card-img-top  rounded-top" alt="Gambar Masterdiskon"></ImgStyled>
                </ContainerImage>
                <CardDesc className="card-body">
                    <span className="badge badge-primary label-flash mb-2">{data?.product_category?.name_product_category}</span>
                    <p className="md-product-name">{data?.product_name}</p>
                    <div className="d-flex justify-content-end align-items-end flex-column">
                        {(data?.product_detail?.discount != 0) &&
                            <span className="badge badge-danger md-label-discount">Diskon {data?.product_detail?.discount}%</span>
                        }
                        {data?.product_detail?.normal_price !== data?.product_detail?.price &&
                            <small className={classNames('', { 'd-block': isTabletOrMobile })}>
                                <s>
                                    Rp{data?.product_detail?.normal_price.toLocaleString() || 0}
                                </s>
                            </small>
                        }
                        <h6 className="text-danger font-weight-bold">Rp{data?.product_detail?.price.toLocaleString() || 0}</h6>
                    </div>
                </CardDesc>
            </CardStyled>
        </a></Link>
    );
}

const ContainerImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  @media (max-width:1224px){
    .cp_shadow{
        font-size:12px;
    }
  }
  .cp_shadow {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    padding: 8px 12px;
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0)
    );
    border-top-right-radius: 15px !important;
    border-top-left-radius: 15px !important;
}
.label-flash {
    position: absolute;
    bottom: 10px;
    left: 10px;
}
`;

const CardDesc = styled.div`
padding:10px;
    .md-product-name{
        display: -webkit-box;
        overflow: hidden;
        line-height: 1.349;
        text-overflow: ellipsis; 
        height: 48px; 
        font-weight:bold;
        color:#0070BA;
        max-height: 49px; 
        -webkit-box-orient: vertical;
        -webkit-line-clamp:2;        
    }
`

const ImgStyled = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 15px !important;
    border-top-left-radius: 15px !important;
`

const CardStyled = styled.div`
border-radius:15px;
box-shadow:-1px 3px 11px -5px rgba(156,156,156,0.75);

.md-label-discount{
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    border-top-right-radius:0;
    border-bottom-right-radius:0;
    position:relative;
    margin-bottom:5px;
    padding:3px 5.7px;
    font-size:10px;
 &::after{
    content:'';
    position:absolute;
    background:inherit;
    width:5px;
    height:5px;
    bottom:-5px;
    right:0;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
 }
}
`
export default CardProductGeneral;