"use client";

import Image, { type ImageProps } from "next/image";
import { useState, type CSSProperties } from "react";
import { ChevronsLeftRight } from "lucide-react";

type BeforeAfterSliderProps = {
  before: ImageProps["src"];
  after: ImageProps["src"];
  beforeAlt: string;
  afterAlt: string;
  ariaLabel: string;
  className: string;
  sizes: string;
  compact?: boolean;
};

export function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  ariaLabel,
  className,
  sizes,
  compact = false,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const style = {
    "--before-clip": `inset(0 ${100 - position}% 0 0)`,
  } as CSSProperties;

  return (
    <div
      className={`${className} before-after${compact ? " before-after-compact" : ""}`}
      style={style}
    >
      <Image
        src={after}
        unoptimized
        alt={afterAlt}
        fill
        sizes={sizes}
        className="before-after-image"
      />
      <div className="before-after-before">
        <Image
          src={before}
          unoptimized
          alt={beforeAlt}
          fill
          sizes={sizes}
          className="before-after-image"
        />
      </div>
      <span className="before-after-label before-after-label-before">BEFORE</span>
      <span className="before-after-label before-after-label-after">AFTER</span>
      <div className="before-after-divider" style={{ left: `${position}%` }}>
        <span>
          <ChevronsLeftRight size={compact ? 18 : 24} aria-hidden="true" />
        </span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={ariaLabel}
        aria-valuetext={`${position}% before, ${100 - position}% after`}
        className="before-after-range"
      />
    </div>
  );
}
