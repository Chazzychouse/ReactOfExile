import { Card } from "../Card/Card";

interface ICardListProps {}

export const CardList: React.FC<ICardListProps> = (props): JSX.Element => {
  return (
    <div>
      <Card name="Bulbasaur" price={100} />
      <Card name="Squirtle" price={200} />
      <Card name="Charmander" price={300} />
    </div>
  );
};
