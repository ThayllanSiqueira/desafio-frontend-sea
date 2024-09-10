import styled from 'styled-components';
import { Flex, List as ListAntd, Tag, Row, Col  } from 'antd';

export const Section = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #649FBF;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const List = styled(ListAntd)`
  .ant-list-item {
    border: none;
  }
`;

export { Flex, Tag, Row, Col  }
