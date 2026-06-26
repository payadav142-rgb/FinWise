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
  return (
    <div className="space-y-3">

      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">
          {label}
        </label>

        <span className="font-semibold text-blue-600">
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
        className="w-full cursor-pointer"
      />

      <input
        type="number"
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
        className="w-full rounded-xl border px-4 py-3 focus:border-blue-600 focus:outline-none"
      />

    </div>
  );
}