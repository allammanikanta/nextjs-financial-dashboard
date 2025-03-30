"use client";
import Card from "../../components/Card";
import { useSelector } from "react-redux";

const CreditCards = () => {
  const cards = useSelector((state) => state.dashboard.cards);

  return (
    <div className="flex flex-col gap-4 space-x-4 overflow-x-auto">
      {cards.map((card, index) => (
        <Card
          key={index}
          cardNumber={card.cardNumber}
          cardHolder={card.cardHolder}
          validThru={card.validThru}
          balance={card.balance}
          primary={card.primary}
        />
      ))}
    </div>
  );
};

export default CreditCards;
