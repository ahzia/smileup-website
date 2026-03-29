/**
 * Reusable waitlist block (headline + supporting line + form).
 */

import WaitlistForm from "./WaitlistForm";

export default function WaitlistCtaSection({
  title,
  description,
  source,
  className = "",
  sectionClassName = "section tint",
  sectionId = "waitlist",
}) {
  return (
    <section
      className={`${sectionClassName} ${className}`.trim()}
      id={sectionId || undefined}
    >
      <div className="container narrow">
        <h2 className="center">{title}</h2>
        {description ? <p className="center muted">{description}</p> : null}
        <WaitlistForm source={source} />
      </div>
    </section>
  );
}
