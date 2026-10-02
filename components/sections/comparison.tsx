import { comparison } from "@/lib/media";
import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
export function BeforeAfter() {
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
        <BeforeAfterSlider
          before={comparison.before}
          after={comparison.after}
          beforeAlt={comparison.beforeAlt}
          afterAlt={comparison.afterAlt}
          ariaLabel="Driveway before and after image comparison"
          className="comparison"
          sizes="(max-width: 767px) 100vw, 1240px"
        />
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
