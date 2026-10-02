import Image from "next/image";
import { Camera, ArrowUpRight } from "lucide-react";
import { SocialIcon } from "@/components/ui/social-icon";
import { business } from "@/lib/business";
import { projects, testimonials } from "@/lib/media";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
export function Gallery() {
  return (
    <section
      className="gallery-section section container"
      aria-labelledby="gallery-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">SERVICE GALLERY</p>
          <h2 id="gallery-title">Exterior cleaning, up close.</h2>
        </div>
        <div className="gallery-social">
          <a
            className="text-action"
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon brand="instagram" />
            Follow on Instagram <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a
            className="text-action"
            href={business.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon brand="facebook" />
            Follow on Facebook <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="gallery-grid">
        {projects.length
          ? projects.map((project) => (
              <figure key={project.title}>
                {project.comparison ? (
                  <BeforeAfterSlider
                    before={project.comparison.before}
                    after={project.comparison.after}
                    beforeAlt={project.comparison.beforeAlt}
                    afterAlt={project.comparison.afterAlt}
                    ariaLabel={`${project.title} before and after image comparison`}
                    className="gallery-photo gallery-comparison"
                    sizes="(max-width: 767px) calc(100vw - 40px), 40vw"
                    compact
                  />
                ) : (
                  <div className="gallery-photo">
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 767px) calc(100vw - 40px), 40vw"
                    />
                  </div>
                )}
                <figcaption>
                  <span>{project.title}</span>
                  <small>{project.service}</small>
                </figcaption>
              </figure>
            ))
          : [
              "Driveways & walkways",
              "Homes & exteriors",
              "Patios & pool decks",
            ].map((title, i) => (
              <figure key={title}>
                <div className={`gallery-placeholder gallery-placeholder-${i}`}>
                  <Camera size={32} strokeWidth={1} aria-hidden="true" />
                  <span>Project photos coming soon</span>
                </div>
                <figcaption>
                  <span>{title}</span>
                  <span className="gallery-index">0{i + 1}</span>
                </figcaption>
              </figure>
            ))}
      </div>
      {!projects.length && (
        <p className="gallery-note">
          Our website gallery is on its way. In the meantime, visit our social
          pages to see more.
        </p>
      )}
      {testimonials.length > 0 && (
        <div className="testimonials">
          <h3>From our customers</h3>
          {testimonials.map((review) => (
            <blockquote key={review.attribution}>
              <p>“{review.quote}”</p>
              <cite>
                {review.sourceUrl ? (
                  <a
                    href={review.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {review.attribution}
                  </a>
                ) : (
                  review.attribution
                )}
              </cite>
            </blockquote>
          ))}
        </div>
      )}
    </section>
  );
}
