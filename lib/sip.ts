"use client";

type YearData = {
  year: number;
  invested: number;
  returns: number;
  total: number;
};

type Props = {
  data: YearData[];
};

export default function BreakdownTable({
  data,
}: Props) {
  return (
    <div className="mt-8 rounded-2xl border p-6">
      <h3 className="mb-5 text-2xl font-bold">
        Year-wise Breakdown
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">

          <thead>
            <tr className="border-b bg-slate-50">

              <th className="px-4 py-3 text-left">
                Year
              </th>

              <th className="px-4 py-3 text-right">
                Invested
              </th>

              <th className="px-4 py-3 text-right">
                Returns
              </th>

              <th className="px-4 py-3 text-right">
                Total Value
              </th>

            </tr>
          </thead>

          <tbody>

            {data.map((row) => (

              <tr
                key={row.year}
                className="border-b hover:bg-slate-50"
              >

                <td className="px-4 py-3">
                  {row.year}
                </td>

                <td className="px-4 py-3 text-right">
                  ₹{row.invested.toLocaleString("en-IN")}
                </td>

                <td className="px-4 py-3 text-right text-green-600 font-medium">
                  ₹{row.returns.toLocaleString("en-IN")}
                </td>

                <td className="px-4 py-3 text-right font-semibold">
                  ₹{row.total.toLocaleString("en-IN")}
                </td>

              </tr>

            ))}

          </tbody>

        </table>
      </div>
    </div>
  );
}