import Image from "next/image";

/**
 * The source lockup (public/MittikonnectLogo.jpg) is 1536×1024 with a wide
 * white margin around the artwork. These are the measured bounds of the real
 * ink inside that frame, as fractions of the source — we crop to them so the
 * logo renders at its true size instead of being shrunk by its own padding.
 *
 * "lockup"  — mark + wordmark + taglines. Measured at x 150–1406, y 153–879.
 * "emblem"  — just the M swoosh with the sun and farm above the wordmark.
 *             x 337–1271, y 153–590. Used on dark surfaces, where the white
 *             plate cannot be blended away, so the mark sits on a light chip.
 */
const SOURCE = { w: 1536, h: 1024 };

const VARIANTS = {
  lockup: { x: 150 / 1536, y: 153 / 1024, w: 1256 / 1536, h: 726 / 1024 },
  emblem: { x: 337 / 1536, y: 153 / 1024, w: 934 / 1536, h: 437 / 1024 },
} as const;

export default function Logo({
  height = 72,
  variant = "lockup",
  priority = false,
  className = "",
}: {
  /** Rendered height of the artwork itself, in px. */
  height?: number;
  variant?: keyof typeof VARIANTS;
  priority?: boolean;
  className?: string;
}) {
  const v = VARIANTS[variant];

  // Rendered size of the *whole* source image, scaled so the crop lands on
  // the requested height.
  const imageH = height / v.h;
  const imageW = imageH * (SOURCE.w / SOURCE.h);
  const width = imageW * v.w;

  // Nudge the full image so the crop's centre sits at the span's centre.
  const shiftX = (0.5 - (v.x + v.w / 2)) * imageW;
  const shiftY = (0.5 - (v.y + v.h / 2)) * imageH;

  return (
    <span
      className={`relative block overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <Image
        src="/MittikonnectLogo.jpg"
        alt="MittiKonnect — Connect with earth. Connect with soul."
        width={SOURCE.w}
        height={SOURCE.h}
        priority={priority}
        className="absolute left-1/2 top-1/2 max-w-none mix-blend-multiply"
        style={{
          width: imageW,
          height: imageH,
          transform: `translate(calc(-50% + ${shiftX}px), calc(-50% + ${shiftY}px))`,
        }}
      />
    </span>
  );
}
