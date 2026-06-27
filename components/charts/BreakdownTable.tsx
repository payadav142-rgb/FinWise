"use client";

type BreakdownRow = {
  year: number;
  total: number;
  [key: string]: number;
};

type Props = {
  title?: string;
  columns: {
    key: string;
    label: string;
  }[];
  data: BreakdownRow[];
};

export default function BreakdownTable({
  title = "Year-wise Breakdown",
  columns,
  data,
}: Props) {
  return (
    <div className="mt-8 rounded-2xl border p-6">
      <h3 className="mb-5 text-2xl font-bold">
        {title}
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">

          <thead>
            <tr className="border-b bg-slate-50">

              <th className="px-4 py-3 text-left">
                Year
              </th>

              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-4 py-3 text-right"
                >
                  {column.label}
                </th>
              ))}

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

                {columns.map((column) => (

                  <td
                    key={column.key}
                    className={`px-4 py-3 text-right ${
                      column.key === "total"
                        ? "font-semibold"
                        : ""
                    }`}
                  >
                    ₹
                    {Number(
                      row[column.key]
                    ).toLocaleString("en-IN")}
                  </td>

                ))}

              </tr>
            ))}

          </tbody>

        </table>
      </div>
    </div>
  );
}