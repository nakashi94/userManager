import { memo, FC } from 'react';
import { Link } from "react-router-dom";

export const Page404: FC = memo(() => {
    return (
        <>
            <p>404ページ</p>
            <p>This page is not fount.</p>
            <Link to="/home">homepageはこちら</Link>
        </>
    )
});
