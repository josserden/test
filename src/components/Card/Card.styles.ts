import styled from '@emotion/styled';
import { ThemeProps } from '../../styles';

declare module '@emotion/react' {
  export interface Theme extends ThemeProps {}
}

export const UserCard = styled.li`
  width: 454px;
  position: relative;

  padding: ${({ theme }) => theme.spacing(6)};
  padding-bottom: ${({ theme }) => theme.spacing(12)};

  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.large};
  background: ${({ theme }) => theme.colors.cardBackground};
`;

export const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};

  margin-bottom: ${({ theme }) => theme.spacing(8)};
`;

export const CardBody = styled.div`
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;

  padding-top: 200px;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  width: 92px;
  height: 92px;

  margin: 0 auto;

  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 5.11111px 5.11111px rgba(0, 0, 0, 0.06),
    inset 0px -2.55556px 5.11111px #ae7be3,
    inset 0px 5.11111px 3.83333px #fbf8ff;

  top: 209px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 50%;
  object-fit: cover;

  z-index: 100;
`;

export const Divider = styled.span`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 4px #ae7be3,
    inset 0px 4px 3px #fbf8ff;

  position: absolute;
  top: 250px;
  left: 0;
`;

export const CardFooter = styled.div`
  padding-top: ${({ theme }) => theme.spacing(18.5)};
`;
