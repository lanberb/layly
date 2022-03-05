require("dotenv").config();

const parseNumber = (variable: string | undefined): number => {
  if (variable === undefined) return 0;
  return parseInt(variable);
};

export const PORT_NUMBER: number = parseNumber(process.env.PORT);
