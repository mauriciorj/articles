import styled from 'styled-components';

export const InfoContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: flex-start;
  & li {
    color: ${(props) => props.color};
    font-size: 14px;
    font-weight: bold;
    padding-right: 2rem;
    position: relative;
    & .info-separator {
      font-size: 5px;
      position: absolute;
      top: 45%;
      right: 13px;
    }
  }
`;
