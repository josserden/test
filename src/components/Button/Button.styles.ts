import styled from '@emotion/styled';
import { ThemeProps } from '../../styles';

declare module '@emotion/react' {
  export interface Theme extends ThemeProps {}
}

export const Btn = styled.button`
  display: block;

  min-width: ${({ theme }) => theme.spacing(56.5)};
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(8)};
  margin: 0 auto;

  border-radius: ${({ theme }) => theme.borderRadius.regular};

  box-shadow: ${({ theme }) => theme.shadows.regular};

  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.lg};
  text-transform: uppercase;
`;
