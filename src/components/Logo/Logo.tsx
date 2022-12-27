import { FC } from 'react';
import logo from '../../assets/logo.svg';

export const Logo: FC = () => {
  return (
    <div>
      <img src={logo} alt='site logo' width={88} height={26} />
    </div>
  );
};
