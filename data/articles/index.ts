import { sipArticle } from "./sip";
import { emiArticle } from "./emi";
import { fdArticle } from "./fd";
import { rdArticle } from "./rd";
import { cagrArticle } from "./cagr";
import { gratuityArticle } from "./gratuity";

import { ppfArticle } from "./ppf";
import { hraArticle } from "./hra";
import { epfArticle } from "./epf";
import { npsArticle } from "./nps";
import { ctcArticle } from "./ctc";

export const articles = {
  "sip-calculator": sipArticle,
  "emi-calculator": emiArticle,
  "fd-calculator": fdArticle,
  "rd-calculator": rdArticle,
  "cagr-calculator": cagrArticle,

  "ppf-calculator": ppfArticle,
  "hra-calculator": hraArticle,
  "epf-calculator": epfArticle,
  "nps-calculator": npsArticle,
  "ctc-to-inhand-calculator": ctcArticle,
  "gratuity-calculator": gratuityArticle,
} as const;