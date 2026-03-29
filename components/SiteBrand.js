import Image from "next/image";
import Link from "next/link";

/**
 * Header logo + wordmark (same SVG in light and dark: green smile stays visible on dark UI).
 */
export default function SiteBrand({ priority = false }) {
  return (
    <Link href="/" className="brand" aria-label="SmileUp home">
      <Image
        src="/logos/smileup-logo-dark.svg"
        alt=""
        width={36}
        height={36}
        className="brand-mark"
        priority={priority}
      />
      <span className="brand-wordmark">SmileUp</span>
    </Link>
  );
}
