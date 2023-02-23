import React from 'react';
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
`;

const HeaderUl = styled.ul`
    dispaly: flex;
    align-items: center;
    li{
        list-style:none;
        padding: 0 20px;
    }
`
type HeaderProps = {
    sitename: string;
}

const Header = ({sitename}: HeaderProps) => {
    return (
        <HeaderWrapper>
            <h1>{sitename}</h1>
            <HeaderUl>
                <li>과목등록</li>
                <li>내장함수등록</li>
                <li>함수리스트</li>
            </HeaderUl>
        </HeaderWrapper>
    );
};

export default Header;