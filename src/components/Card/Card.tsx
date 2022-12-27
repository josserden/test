import { useTheme } from '@emotion/react';
import { FC, useState } from 'react';
import { Button, Logo, Paragraph } from '..';
import {
  UserCard,
  TextWrapper,
  Avatar,
  AvatarWrapper,
  Divider,
  CardBody,
  CardFooter,
} from './Card.styles';
import bgImage from '../../assets/picture.png';
import { convertValue } from '../../helpers/convertValue';
import { ICardProps } from './Card.interface';

export const Card: FC<ICardProps> = ({ user, tweets, followers, avatar }) => {
  const [active, setActive] = useState<boolean>(false);
  const [currentFollowers, setCurrentFollowers] = useState<number>(followers);
  const theme = useTheme();

  const handleButtonClick = () => {
    setActive(!active);

    if (active) {
      setCurrentFollowers(currentFollowers - 1);
    }

    if (!active) {
      setCurrentFollowers(currentFollowers + 1);
    }
  };

  return (
    <UserCard>
      <Logo />

      <CardBody
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <AvatarWrapper>
          <Avatar src={avatar} alt={user} width={72} height={72} />
        </AvatarWrapper>
        <Divider />
      </CardBody>

      <CardFooter>
        <TextWrapper>
          <Paragraph>{tweets} Tweets</Paragraph>
          <Paragraph>{convertValue(currentFollowers)} Followers</Paragraph>
        </TextWrapper>

        <Button
          style={{
            backgroundColor: active
              ? `${theme.colors.accent}`
              : `${theme.colors.light}`,
          }}
          onClick={handleButtonClick}
        >
          {active ? 'Following' : 'Follow'}
        </Button>
      </CardFooter>
    </UserCard>
  );
};
