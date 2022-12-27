import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { Btn } from './Button.styles';

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

export const Button: FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <Btn type='button' {...props}>
      {children}
    </Btn>
  );
};
