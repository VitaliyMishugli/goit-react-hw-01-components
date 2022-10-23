import styled from '@emotion/styled';

export const UserCard = styled.div`
  display: block;
  width: 480px;
  margin-left: auto;
  margin-right: auto;
  // margin-bottom: var(--ifm-leading);
  // max-width: 480px;
  background-color: #e4eced;
  border: 1px solid #434545;
  border-radius: 6px;
  box-shadow: 5px 5px 10px #888888;
`;

export const Description = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 60px;
  padding-right: 60px;
  background-color: #fff;
  border-bottom: 1px solid #61605d;
`;

export const FlexDescription = styled.div`
display:flex;
flex-direction:column ;
justify-content: space-around;
align-items: center;
`;

export const Image = styled.img`
display:block;
  width: 150px;
  height: 150px;
  border-radius: 100px;
 margin-left: auto;
  margin-right: auto;
  background-color: #a09a9ad3;
`; 

export const ProfileInfo = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
`;

export const ProfileInfoItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center
  border-right: 1px solid #61605d;

`;