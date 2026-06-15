import SIPForm from "./SIPForm";
import IncomeTaxForm from "./IncomeTaxForm";
import LumpsumForm from "./LumpsumForm";
import EMIForm from "./EMIForm";
import FDForm from "./FDForm";
import CAGRForm from "./CAGRForm";
import RDForm from "./RDForm";


export function getCalculatorComponent(slug: string) {
  switch (slug) {

    case "rd-calculator":
  return <RDForm />;
    case "cagr-calculator":
  return <CAGRForm />;
    case "sip-calculator":
      return <SIPForm />;

    case "lumpsum-calculator":
      return <LumpsumForm />;

    case "income-tax-calculator":
      return <IncomeTaxForm />;

      case "emi-calculator":
  return <EMIForm />;

  case "fd-calculator":
  return <FDForm />;



    default:
      return <div>Calculator not found</div>;
  }
}