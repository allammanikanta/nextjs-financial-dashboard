import React from "react";

const Card = ({ cardNumber, cardHolder, validThru, balance, primary }) => {
  const maskedCardNumber = `${cardNumber.slice(
    0,
    4
  )} **** **** ${cardNumber.slice(-4)}`;

  const cardStyles = {
    primary: {
      background: "linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)",
      chipSrc: "/images/ChipCard.svg",
      textColor: "white",
      border: "none",
    },
    secondary: {
      background: "#ffffff",
      chipSrc: "/images/DarkChipCard.svg",
      textColor: "black",
      border: "1px solid #DFEAF2",
    },
  };

  const { background, chipSrc, textColor, border } = primary
    ? cardStyles.primary
    : cardStyles.secondary;

  return (
    <div
      className="shadow-lg w-[350px] rounded-[25px] h-[235px]"
      style={{
        background: background,
        color: textColor,
        border: border,
      }}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col mb-4">
            <div
              className="text-sm font-normal pb-1"
              style={{
                fontFamily: "Lato",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Balance
            </div>
            <div
              className="text-lg font-semibold"
              style={{
                fontFamily: "Lato",
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              ${parseFloat(balance).toLocaleString()}
            </div>
          </div>
          <div className="w-10 h-10 mb-4">
            <img
              src={chipSrc}
              alt="Card Chip"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-100 mb-4">
            <div
              className="text-sm font-medium pb-2"
              style={{
                fontFamily: "Lato",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              CARD HOLDER
            </div>
            <div
              className="text-lg"
              style={{
                fontFamily: "Lato",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              {cardHolder}
            </div>
          </div>
          <div className="w-100 mb-4">
            <div
              className="text-sm font-medium pb-2"
              style={{
                fontFamily: "Lato",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              VALID THRU
            </div>
            <div
              className="text-lg"
              style={{
                fontFamily: "Lato",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              {validThru}
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-lg font-bold w-[350px] h-[70px] flex justify-between items-center p-6"
        style={{
          fontFamily: "Lato",
          fontWeight: "600",
          fontSize: "22px",
          lineHeight: "100%",
          letterSpacing: "0%",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
          borderRadius: "0px 0px 25px 25px",
          border: border,
        }}
      >
        <div>{maskedCardNumber}</div>
        <div>
          <img src="/images/VisaLogo.svg" alt="Visa Logo" />
        </div>
      </div>
    </div>
  );
};

export default Card;
