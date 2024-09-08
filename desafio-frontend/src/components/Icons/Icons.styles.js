import styled from 'styled-components';
import Icon, { PaperClipOutlined } from '@ant-design/icons';

export const FileIcon = styled(PaperClipOutlined)`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;


export { PaperClipOutlined, Icon };
