/**
 * Decorative phone bezel for app screenshots (reusable for marketing sections).
 */

export default function PhoneFrame({ children, className = "" }) {
  return (
    <div className={`phone-frame ${className}`.trim()}>
      <div className="phone-frame__shell" aria-hidden>
        <div className="phone-frame__island" />
        <div className="phone-frame__screen">{children}</div>
      </div>
    </div>
  );
}
