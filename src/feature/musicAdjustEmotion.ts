import { useNaturalLanguage } from "../app/useNaturalLanguage";

export const musicAdjustEmotion = () => {
  const text: string = useNaturalLanguage();
  console.log(text);
  return text;
};
