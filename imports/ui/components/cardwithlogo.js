import React from "react";
import styled from 'styled-components';

const SCardWithLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    padding: 2% 1%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    border: 3px solid #000000;
    width: 35%;
    max-width: 500px;
    min-width: 300px;
`;

const SLogo = styled.img`
    max-width: 250px;
    margin-bottom: 20px;
`;

const CardWithLogo = ({children}) => {
    return (
        <SCardWithLogo>
            <SLogo src="/images/logo/Horizotal_black_logo.svg" alt="Logo" />
            {children}
        </SCardWithLogo>
    )
};

export default CardWithLogo;