type sentimentCondition = {
  sentiment: string;
  min: number;
  max: number;
};

export const RUSSEL_SENTIMENT_MODEL: sentimentCondition[] = [
  {
    sentiment: "happy",
    min: 0,
    max: 22.5,
  },
  {
    sentiment: "energy",
    min: 22.5,
    max: 45,
  },
  {
    sentiment: "excite",
    min: 45,
    max: 67.5,
  },
  {
    sentiment: "alert",
    min: 67.5,
    max: 90,
  },

  {
    sentiment: "tense",
    min: 90,
    max: 112.5,
  },
  {
    sentiment: "nervous",
    min: 112.5,
    max: 135,
  },
  {
    sentiment: "stressed",
    min: 135,
    max: 157.5,
  },
  {
    sentiment: "anxiety",
    min: 157.5,
    max: 180,
  },

  {
    sentiment: "sad",
    min: -180,
    max: -157.5,
  },
  {
    sentiment: "depressed",
    min: -157.5,
    max: -135,
  },
  {
    sentiment: "lethargy",
    min: -135,
    max: -112.5,
  },
  {
    sentiment: "tired",
    min: -112.5,
    max: -90,
  },
  {
    sentiment: "calm",
    min: -90,
    max: -67.5,
  },
  {
    sentiment: "relaxed",
    min: -67.5,
    max: -45,
  },
  {
    sentiment: "serene",
    min: -45,
    max: -22.5,
  },
  {
    sentiment: "contented",
    min: -22.5,
    max: 0,
  },
];
