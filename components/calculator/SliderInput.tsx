"use client";

type SliderInputProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
};

export default function SliderInput({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  prefix = "",
  suffix = "",
}: SliderInputProps) {
  const percentage =
    ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-4">

      <div className="flex items-center justify-between">

        <label className="text-sm font-semibold text-slate-700">
          {label}
        </label>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          {prefix}
          {value.toLocaleString("en-IN")}
          {suffix}
        </span>

      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
        style={{
          background: `linear-gradient(to right,
          #2563eb 0%,
          #2563eb ${percentage}%,
          #e5e7eb ${percentage}%,
          #e5e7eb 100%)`,
        }}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg"
      />

      <div className="flex justify-between text-xs text-slate-500">
        <span>
          {prefix}
          {min.toLocaleString("en-IN")}
          {suffix}
        </span>

        <span>
          {prefix}
          {max.toLocaleString("en-IN")}
          {suffix}
        </span>
      </div>

      <input
        type="number"
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
        className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none"
      />

    </div>
  );
}