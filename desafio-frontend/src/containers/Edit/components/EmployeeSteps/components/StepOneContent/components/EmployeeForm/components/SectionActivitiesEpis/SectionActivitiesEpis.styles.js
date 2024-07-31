import styled from 'styled-components';
import {
  Card,
  Input as AntdInput,
  Select as AntdSelect,
  Upload as AntdUpload,
  Button as AntdButton,
} from 'antd';

import { PaperClipOutlined } from '@ant-design/icons';

export const Section = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #649FBF;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const Title = styled.h3`
  margin: 0;
  color: #555;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledInput = styled(AntdInput)`
  .ant-input {
    border-color: #649FBF !important;
  }

  .ant-input-outlined {
    border-color: #649FBF !important;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledSelect = styled(AntdSelect)`
  .ant-select-selector {
    border-color: #649FBF !important;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

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

export const StyledUpload = styled(AntdUpload)`
  width: 100%;

  .ant-upload {
    width: 100%;
  }

  .ant-btn {
    width: 100%;
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

export const FileIcon = styled(PaperClipOutlined)`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CustomButton = styled(AntdButton)`
  color: #649FBF;
  border-color: #649FBF;
  width: 10vw;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
