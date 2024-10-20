"use client";

import { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";

type AdStatement = {
  id: number;
  text: string;
};

const adStatements = [
  {
    id: 1,
    text: "Don’t Wait Until It's Too Late – Shed Dangerous Pounds Fast!",
  },
  { id: 2, text: "Warning: Extra Weight Can Lead to Serious Health Risks!" },
  {
    id: 3,
    text: "Are You Putting Your Heart at Risk? Lose Weight Before It's Too Late!",
  },
  {
    id: 4,
    text: "Extra Weight Can Cut Years Off Your Life – Fight Back Today!",
  },
  { id: 5, text: "Silent Health Risks Lurking in Extra Weight – Act Now!" },
  {
    id: 6,
    text: "Unlock the Body You’ve Always Wanted – Start Losing Weight Today with Java Burn!",
  },
  {
    id: 7,
    text: "Transform Your Shape, Transform Your Life – Start Losing Weight Today with Java Burn!",
  },
  {
    id: 8,
    text: "Turn Heads Everywhere – Achieve Stunning Weight Loss with Java Burn!",
  },
  {
    id: 9,
    text: "Feel Lighter, Look Amazing – Transform Your Body Fast with Java Burn!",
  },
  { id: 10, text: "Your Dream Body Is Within Reach – Try Java Burn Now!" },
];

export default function AdBanner() {
  const [adStatement, setAdStatement] = useState<AdStatement>({
    id: 0,
    text: "",
  });
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * adStatements.length);
    setAdStatement(adStatements[randomIndex]);

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleClick = (adStatement: AdStatement) => {
    // open link to product page
    window.open(
      `https://hop.clickbank.net/?vendor=javaburn&affiliate=prodoits&lid=6100&tid=${adStatement.id}`,
      "_blank"
    );
  };

  return (
    <div
      onClick={() => {
        handleClick(adStatement);
      }}
      className="max-w-4xl mx-auto my-4 bg-gradient-to-r from-red-600 to-yellow-500 p-1 rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
    >
      <div className="bg-white rounded-lg p-4 flex flex-col items-center space-y-4 animate-pulse">
        <AlertTriangle className="text-red-600 w-10 h-10" />
        <h2 className="text-center font-bold text-xl sm:text-2xl md:text-3xl text-red-600">
          {adStatement.text}
        </h2>
        <p className="text-lg font-semibold text-gray-800">
          Limited Time Offer: {minutes}:{seconds.toString().padStart(2, "0")}{" "}
          remaining!
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full text-lg transition-colors duration-300 transform hover:scale-110">
          CLAIM YOUR DISCOUNT NOW!
        </button>
      </div>
    </div>
  );
}
