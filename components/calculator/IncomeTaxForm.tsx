export default function IncomeTaxForm() {
  return (
    <>
      <div>
        <label className="mb-2 block text-sm font-medium">
          Annual Income
        </label>

        <input
          type="number"
          placeholder="Enter annual income"
          className="w-full rounded-xl border px-4 py-3"
        />
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium">
          Tax Regime
        </label>

        <select className="w-full rounded-xl border px-4 py-3">
          <option>New Regime</option>
          <option>Old Regime</option>
        </select>
      </div>

      <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-medium text-white">
        Calculate Tax
      </button>
    </>
  );
}