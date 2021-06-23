import styled from 'styled-components';

const SmallTab = styled.div`
  margin: 5px 0;
  padding: 0 10px;
  text-align: right;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 3px;
  ${(props) => (props.activeTab ? 'color: rgb(128, 103, 220)' : '')};

  :hover {
    ${(props) => (props.activeTab ? '' : 'color: rgb(128, 103, 220)')};
  }
`;

export default SmallTab;
