import express from "express";
import { useNaturalLanguage } from "../app/useNaturalLanguage";

export const musicAdjustEmotion = (
  req: express.Request,
  res: express.Response
) => {
  const query = req.query;
  if (typeof req.query.text !== "string") {
    throw new Error("Parameter date must be string");
  } else {
    useNaturalLanguage(query.text).then((data) => {
      res.json(data);
    });
  }
};
