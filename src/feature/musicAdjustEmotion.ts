import express from "express";
import { useNaturalLanguage } from "../app/useNaturalLanguage";
import { RUSSEL_SENTIMENT_MODEL } from "../constants/russelSentimentModel";

type sentimentCondition = {
  sentiment: string;
  min: number;
  max: number;
};

type returnData = {
  sentiment: string;
  scalar: number;
}[];
// type returnData = {
//   score: number;
//   magnitude: number;
// };

const computeVector2 = (x: number, y: number) => {
  const angle: number = (Math.atan2(y, x) * 180) / Math.PI;
  const scalar: number = Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 0.5);
  return {
    angle,
    scalar,
  };
};
const classifySentiment = (angle: number): string => {
  let sentiment: string = "neutral";
  RUSSEL_SENTIMENT_MODEL.forEach((condition: sentimentCondition) => {
    const isWithinRange = condition.min <= angle && angle < condition.max;
    if (isWithinRange) sentiment = condition.sentiment;
  });
  // 算出した感情の角度がモデルのどこにも当たらない場合
  return sentiment;
};

export const musicAdjustEmotion = async (
  req: express.Request
): Promise<returnData> => {
  const query = req.query;
  if (typeof req.query.text !== "string") {
    throw new Error("Parameter date must be string");
  } else {
    const analyzeSentiment = await useNaturalLanguage(query.text);
    const { score: x, magnitude: y } = analyzeSentiment.documentSentiment;
    const { angle, scalar } = computeVector2(x, y);
    const { angle: angle2, scalar: scalar2 } = computeVector2(x, -y);
    // const sentiment: string = classifySentiment(angle);
    return [
      { sentiment: classifySentiment(angle), scalar },
      { sentiment: classifySentiment(angle2), scalar: scalar2 },
    ];
  }
};
