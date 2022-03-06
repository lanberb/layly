import naturalLanguage from "@google-cloud/language";

export const useNaturalLanguage = async (text) => {
  const client = new naturalLanguage.LanguageServiceClient();
  const document = {
    content: text,
    type: "PLAIN_TEXT",
  };
  const [result] = await client.analyzeSentiment({ document });
  return result;
};
