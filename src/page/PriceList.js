import React from 'react';
import Header from '../component/Header.js';
import TableList from '../component/TableList';
import { Container, Sectionhero, Wrapper, Btn } from '../styles/styledElement';
import styled from 'styled-components';

const ContainerList = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`
const WrapTable = styled.div`
  width: 100%;
  text-align: start;
  display: flex;
  justify-content: center;
`

function PriceList() {
  return (
    <>
      <Header header="PRICE LIST" />
      <Container primary>
        <h2>HAIRCUTS</h2>
        <br /><br />
        <ContainerList>
          <WrapTable>
            <TableList />
          </WrapTable>
          <WrapTable>
            <TableList />
          </WrapTable>
        </ContainerList>
      </Container>

      <Container primary>
        <h2>SHAVES</h2>
        <br /><br />
        <ContainerList>
          <WrapTable>
            <TableList />
          </WrapTable>
          <WrapTable>
            <TableList />
          </WrapTable>
        </ContainerList>
      </Container>

      <Sectionhero>
        <Wrapper>
          <h4>ENJOY AN UNFORGETTABLE BARBERING & SERVICE</h4><br /><br />
          <Btn to="/">GET PRICING</Btn>
        </Wrapper>
      </Sectionhero>
    </>
  )
}

export default PriceList