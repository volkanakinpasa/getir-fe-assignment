// import { Layout, Row } from 'antd';

// import styled from 'styled-components';
import tw, { css, styled } from 'twin.macro';

import BasketPopoutContainer from './BasketPopoutContainer';
import BasketSummary from './BasketSummary';
import logo from '../../assets/logo.png';

const HeaderStyle = styled.header`
  ${tw`flex items-center justify-center w-full`}
  background: #1ea4ce;
  width: 100%;
  height: 76px;

  img {
    width: 141px;
    height: 40px;
  }
`;

interface IRowProps {
  justify?: string;
  align?: string;
}

// const Row = styled.div`
//   display: flex;
//   justify-content: ${(props: IRowProps) => props.justify};
//   align-items: ${(props: IRowProps) => props.align};
// `;

function Header() {
  return (
    <HeaderStyle>
      <img src={logo} alt="getir" />

      {/* 
      <div>
        <BasketSummary />
      </div>
      <div>
        <BasketPopoutContainer />
      </div> */}
    </HeaderStyle>
  );
}

export default Header;
