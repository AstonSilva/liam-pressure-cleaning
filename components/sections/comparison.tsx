"use client";
import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { ChevronsLeftRight, Camera } from "lucide-react";
import { comparison } from "@/lib/media";
import { Button } from "@/components/ui/button";
export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  return (
    <section
      className="comparison-section section"
      aria-labelledby="comparison-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FRESH PERSPECTIVE</p>
            <h2 id="comparison-title">See the difference.</h2>
          </div>
          <p>
            {comparison
              ? "Compare this driveway before and after cleaning."
              : "Every property has its own story. Explore our social pages for cleaning work and exterior inspiration."}
          </p>
        </div>
        <div className={`comparison ${comparison ? "" : "comparison-empty"}`}>
          {comparison ? (
            <>
              <Image
                src={comparison.after}
                unoptimized
                alt={comparison.afterAlt}
                fill
                sizes="(max-width: 760px) 100vw, 1240px"
                className="comparison-image"
              />
              <div
                className="comparison-before"
                style={{ "--before-clip": `inset(0 ${100 - position}% 0 0)` } as CSSProperties}
              >
                <Image
                  src={comparison.before}
                  unoptimized
                  alt={comparison.beforeAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 1240px"
                  className="comparison-image"
                />
              </div>
            </>
          ) : (
            <>
              <div className="comparison-placeholder">
                <Camera size={36} strokeWidth={1} />
                <span>Before photo</span>
                <small>Project photography coming soon</small>
              </div>
              <div
                className="comparison-placeholder after-placeholder"
                style={{ clipPath: `inset(0 0 0 ${position}%)` }}
              >
                <Camera size={36} strokeWidth={1} />
                <span>After photo</span>
                <small>Project photography coming soon</small>
              </div>
              <div className="comparison-demo-note">
                Photo comparison preview · no project photos added yet
              </div>
            </>
          )}
          <span className="compare-label before-label">BEFORE</span>
          <span className="compare-label after-label">AFTER</span>
          <div className="comparison-divider" style={{ left: `${position}%` }}>
            <span>
              <ChevronsLeftRight size={24} />
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            aria-label="Before and after image comparison"
            aria-valuetext={`${position}% before, ${100 - position}% after`}
            className="comparison-slider"
          />
        </div>
        <div className="comparison-bottom">
          <p>
            {comparison?.title ?? "A cleaner view starts with a conversation."}
          </p>
          <Button secondary>Get your free estimate</Button>
        </div>
      </div>
    </section>
  );
}
