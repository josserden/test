import { FC } from 'react';
import { Card } from '..';
import { ICardProps } from '../Card/Card.interface';
import { WrapperCards } from './CardList.styles';

export interface ICardListProps {
  users: ICardProps[];
}

export const CardList: FC<ICardListProps> = ({ users }) => {
  return (
    <WrapperCards>
      {users && users.map((user) => <Card key={user.id} {...user} />)}
    </WrapperCards>
  );
};
