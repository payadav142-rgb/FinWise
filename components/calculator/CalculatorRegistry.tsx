import { ReactNode } from "react";

import SIPForm from "./SIPForm";
import LumpsumForm from "./LumpsumForm";
import EMIForm from "./EMIForm";
import FDForm from "./FDForm";
import RDForm from "./RDForm";
import PPFForm from "./PPFForm";
import CAGRForm from "./CAGRForm";
import IncomeTaxForm from "./IncomeTaxForm";

import CTCForm from "./CTCForm";
import HRAForm from "./HRAForm";
import EPFForm from "./EPFForm";
import NPSForm from "./NPSForm";
import GratuityForm from "./GratuityForm";

const registry: Record<string, ReactNode> = {
  "sip-calculator": <SIPForm />,
  "lumpsum-calculator": <LumpsumForm />,
  "emi-calculator": <EMIForm />,
  "fd-calculator": <FDForm />,
  "rd-calculator": <RDForm />,
  "ppf-calculator": <PPFForm />,
  "cagr-calculator": <CAGRForm />,
  "income-tax-calculator": <IncomeTaxForm />,

  "ctc-to-inhand-calculator": <CTCForm />,
  "hra-calculator": <HRAForm />,
  "epf-calculator": <EPFForm />,
  "nps-calculator": <NPSForm />,
  "gratuity-calculator": <GratuityForm />,
};

export function getCalculatorComponent(slug: string) {
  return (
    registry[slug] ?? (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center text-red-600">
        Calculator not found.
      </div>
    )
  );
}