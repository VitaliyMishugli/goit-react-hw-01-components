import styled from '@emotion/styled';

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

export const StatisticCard = styled.section`
  display: block;
  width: 460px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  // margin-bottom: var(--ifm-leading);
  // max-width: 480px;
   background-color: #fff;
  border: 1px solid #434545;
  border-radius: 6px;
  box-shadow: 5px 5px 10px #888888;
  padding: 10px;
`;

export const StatisticTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: #0a0a0ad2;
`;

export const StatisticList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  border-top: 1px solid black;
  width: auto;
  // margin-left: auto;
  // margin-right: auto;
  // margin-top: 50px;
  // margin-bottom: var(--ifm-leading);
  // max-width: 480px;
 background-color: #e4eced;
  border: 1px solid #434545;
  border-radius: 6px;
  box-shadow: 2px 2px 5px #888888;
  padding: 10px;
`;

export const StatisticItem = styled.div`
  display:flex;
  flex-direction:column ;
  justify-content: center;
  align-items: center;
`; 
