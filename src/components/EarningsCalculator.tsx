"use client";

import { useState } from "react";
import { inr } from "@/lib/data";

/** Share of each booking that reaches the host. */
const HOST_SHARE = 0.8;

function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  display,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  display: string;
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-soil-800">{label}</span>
        <span className="font-display text-lg font-semibold text-soil-900">
          {display}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-soil-200 accent-leaf-600"
      />
    </label>
  );
}

export default function EarningsCalculator() {
  const [rooms, setRooms] = useState(2);
  const [nights, setNights] = useState(8);
  const [rate, setRate] = useState(3300);

  const gross = rooms * nights * rate;
  const takeHome = Math.round(gross * HOST_SHARE);

  return (
    <div className="grid gap-8 rounded-card border border-soil-200 bg-white p-7 shadow-sm lg:grid-cols-2 lg:gap-12 lg:p-10">
      <div className="space-y-7">
        <Slider
          label="Rooms you can let"
          value={rooms}
          min={1}
          max={10}
          onChange={setRooms}
          display={`${rooms}`}
        />
        <Slider
          label="Booked nights a month"
          value={nights}
          min={2}
          max={30}
          onChange={setNights}
          display={`${nights}`}
        />
        <Slider
          label="Your nightly rate"
          value={rate}
          min={1000}
          max={9000}
          step={100}
          onChange={setRate}
          display={inr(rate)}
        />
      </div>

      <div className="flex flex-col justify-center rounded-2xl bg-leaf-900 p-7 text-center text-soil-50">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-turmeric-300">
          You could earn
        </p>
        <p className="mt-3 font-display text-5xl font-semibold tracking-tight text-white">
          {inr(takeHome)}
        </p>
        <p className="mt-1.5 text-sm text-soil-200">a month, before your costs</p>

        <dl className="mt-7 space-y-2 border-t border-white/15 pt-5 text-sm">
          <div className="flex justify-between">
            <dt className="text-soil-200">Guests pay</dt>
            <dd>{inr(gross)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-soil-200">Your share</dt>
            <dd className="font-semibold text-turmeric-300">80%</dd>
          </div>
        </dl>

        <p className="mt-6 text-xs leading-relaxed text-soil-300">
          An estimate, not a promise. What you actually earn depends on your
          season, your rooms and how often you say yes.
        </p>
      </div>
    </div>
  );
}
