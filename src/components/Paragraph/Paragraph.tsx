import { FC } from 'react';
import { PTag } from './Paragraph.styles';

export interface IParagraphProps {
  children: React.ReactNode;
}

export const Paragraph: FC<IParagraphProps> = ({ children }) => {
  return <PTag>{children}</PTag>;
};
