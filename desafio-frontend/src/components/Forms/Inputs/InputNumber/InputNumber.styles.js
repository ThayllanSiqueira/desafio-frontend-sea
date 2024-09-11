import styled from 'styled-components';
import {
  Input as AntdInput,
} from 'antd';

export const Input = styled(AntdInput)`
 .ant-input {
    border-color: #649FBF !important; /* Altere para a cor desejada */
  }

  .ant-input-outlined, {
   border-color: #649FBF !important;
  }

`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5em;
  font-weight: bold;
  /* Adicione aqui seus estilos personalizados para a Label */
`;

export const InputWrapper = styled.div`
  /* Adicione aqui estilos para garantir que a label e o input sejam exibidos corretamente */
`;
