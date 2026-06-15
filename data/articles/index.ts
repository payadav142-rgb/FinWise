import { sipArticle } from "./sip";
import { lumpsumArticle } from "./lumpsum";
import { emiArticle } from "./emi";
import { fdArticle } from "./fd";
import { rdArticle } from "./rd";
import { cagrArticle } from "./cagr";
import { incomeTaxArticle } from "./incomeTax";

export const articles = {
  "sip-calculator": sipArticle,
  "lumpsum-calculator": lumpsumArticle,
  "emi-calculator": emiArticle,
  "fd-calculator": fdArticle,
  "rd-calculator": rdArticle,
  "cagr-calculator": cagrArticle,
  "income-tax-calculator": incomeTaxArticle,
};