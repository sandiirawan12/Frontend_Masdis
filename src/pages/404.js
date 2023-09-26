import Image from "next/image"
import styled from "styled-components"

const RootStyled = styled.div`
width: 100%;
height: 100vh;
overflow-y: hidden;
h1 {
    color: #444;
	background-color: transparent;
	border-bottom: 1px solid #D0D0D0;
	font-size: 19px;
	font-weight: 400;
	margin: 0 0 14px;
	padding: 14px 15px 10px;
}
`

const Container = styled.div`
margin: 40px auto;
border: 1px solid #D0D0D0;
box-shadow: 0 0 8px #D0D0D0;
width: 100%;
max-width: 470px;
text-align:center;
font: 13px/20px normal Helvetica,Arial,sans-serif;

`

function Page() {
    return (
            <RootStyled>
                <Container>
            <Image width={1000} height={750} placeholder='blur' blurDataURL src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/banner/404-masterdiskon.jpg" className="img-404 " style={{width:'100%'}}/>
            <h1>404 Page Not Found</h1>
            <p>The page you requested was not found.</p>
                </Container>
            </RootStyled>
    )
}

export default Page
