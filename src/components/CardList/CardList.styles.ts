import styled from '@emotion/styled';
import { ThemeProps } from '../../styles';

declare module '@emotion/react' {
  export interface Theme extends ThemeProps {}
}

export const WrapperCards = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.spacing(6)};
`;
