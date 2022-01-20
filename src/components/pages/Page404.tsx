import { memo, FC } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Page404: FC = memo(() => {
    return (
        <>
            <p>404ページ</p>
            <p>This page is not fount.</p>
            <Link to="/home">
                <SLinkColor>homepageはこちら</SLinkColor>
            </Link>
        </>
    )
});

const SLinkColor = styled.div`
    color: #1111ff;
`
