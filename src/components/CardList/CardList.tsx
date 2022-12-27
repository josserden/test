import { FC } from 'react';
import { Card, ICardProps } from '..';
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
