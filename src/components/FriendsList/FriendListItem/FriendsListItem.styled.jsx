import styled from '@emotion/styled';

export const FriendsListRender = styled.ul`
list-style: none;
`;

export const FriendsListCard = styled.li`
  display: flex;
  justify-content: flex-start;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  // margin-bottom: var(--ifm-leading);
  max-width: 480px;
  background-color: #fff;
  border: 1px solid #434545;
  border-radius: 6px;
  box-shadow: 5px 5px 10px #888888;
  padding: 10px;
`;

export const FriendsSpan = styled.span`
  display: block;
  position: relative;
  top: 29px;
  margin-right: 15px;
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background-color: ${({online}) => online ? 'green' : 'red'} 
`;