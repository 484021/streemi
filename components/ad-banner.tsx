"use client";

import { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";

const adStatements = [
  "Don’t Wait Until It's Too Late – Shed Dangerous Pounds Fast!",
  "Warning: Extra Weight Can Lead to Serious Health Risks!",
  "Are You Putting Your Heart at Risk? Lose Weight Before It's Too Late!",
  "Extra Weight Can Cut Years Off Your Life – Fight Back Today!",
  "Silent Health Risks Lurking in Extra Weight – Act Now!",
  "Unlock the Body You’ve Always Wanted – Start Losing Weight Today with Java Burn!",
  "Transform Your Shape, Transform Your Life – Start Losing Weight Today with Java Burn!",
  "Turn Heads Everywhere – Achieve Stunning Weight Loss with Java Burn!",
  "Feel Lighter, Look Amazing – Transform Your Body Fast with Java Burn!",
  "Your Dream Body Is Within Reach – Try Java Burn Now!",
];

export default function AdBanner() {
  const [adStatement, setAdStatement] = useState("");
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

  const handleClick = () => {
    // open link to product page
    window.open(
      "https://hop.clickbank.net/?vendor=javaburn&affiliate=prodoits&lid=6100",
      "_blank"
    );
  };

  return (
    <div
      onClick={handleClick}
      className="max-w-4xl mx-auto my-4 bg-gradient-to-r from-red-600 to-yellow-500 p-1 rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
    >
      <div className="bg-white rounded-lg p-4 flex flex-col items-center space-y-4 animate-pulse">
        <AlertTriangle className="text-red-600 w-10 h-10" />
        <h2 className="text-center font-bold text-xl sm:text-2xl md:text-3xl text-red-600">
          {adStatement}
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
