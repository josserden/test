import styled from '@emotion/styled';
import { ThemeProps } from '../../styles';

declare module '@emotion/react' {
  export interface Theme extends ThemeProps {}
}

export const PTag = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: ${({ theme }) => theme.lineHeights.xl};

  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  text-align: center;

  margin-bottom: 0;
`;
