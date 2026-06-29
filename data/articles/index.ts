import { sipArticle } from "./sip";
import { lumpsumArticle } from "./lumpsum";
import { emiArticle } from "./emi";
import { fdArticle } from "./fd";
import { rdArticle } from "./rd";
import { incomeTaxArticle } from "./incomeTax";
import { cagrArticle } from "./cagr";

export const articles = {
  "sip-calculator": sipArticle,
  "lumpsum-calculator": lumpsumArticle,
  "emi-calculator": emiArticle,
  "fd-calculator": fdArticle,
  "rd-calculator": rdArticle,
  "income-tax-calculator": incomeTaxArticle,
  "cagr-calculator": cagrArticle,
} as const;