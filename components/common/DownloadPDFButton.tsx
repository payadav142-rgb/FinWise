"use client";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

type Props = {
  elementId: string;
  fileName: string;
};

export default function DownloadPDFButton({
  elementId,
  fileName,
}: Props) {
  const downloadPDF = async () => {
    const input = document.getElementById(elementId);

    if (!input) return;

    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight =
      (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdfWidth,
      pdfHeight
    );

    pdf.save(`${fileName}.pdf`);
  };

  return (
    <button
      onClick={downloadPDF}
      className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
    >
      📄 Download PDF
    </button>
  );
}