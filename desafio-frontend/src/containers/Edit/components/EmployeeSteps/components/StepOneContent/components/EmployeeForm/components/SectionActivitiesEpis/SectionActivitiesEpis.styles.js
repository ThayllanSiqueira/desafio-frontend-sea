import styled from 'styled-components';

export const InlineElements = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const UploadList = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;

  .ant-list-item {
    padding: 0;
  }

  .ant-list-item-content {
    margin-bottom: 8px;
  }
`;

export const FileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #e8e8e8;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FileName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`;
