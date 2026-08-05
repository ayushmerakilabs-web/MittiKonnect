import Image from "next/image";

/**
 * The source lockup (public/logo.png) is a 1024×1024 square with a wide white
 * margin around the artwork. These are the measured bounds of the actual mark
 * inside that square — we crop to them so the logo renders at its true size
 * instead of being shrunk by its own padding.
 *
 * "lockup"  — emblem + wordmark + tagline. Measured at x 104–936, y 139–800.
 * "emblem"  — just the roundel above the wordmark. x 283–737, y 139–601.
 *             Used on dark surfaces, where the lockup's white plate cannot be
 *             blended away, so the roundel sits on its own light chip instead.
 */
const VARIANTS = {
  lockup: { w: 0.8135, h: 0.6465, shiftX: -0.0078, shiftY: 0.0415 },
  emblem: { w: 0.4443, h: 0.4521, shiftX: 0.002, shiftY: 0.1387 },
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
  const imageSize = height / v.h;
  const width = imageSize * v.w;

  return (
    <span
      className={`relative block overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <Image
        src="/logo.png"
        alt="MittiKonnect — Discover · Stay · Connect"
        width={1024}
        height={1024}
        priority={priority}
        className={`absolute left-1/2 top-1/2 max-w-none ${
          variant === "lockup" ? "mix-blend-multiply" : ""
        }`}
        style={{
          width: imageSize,
          height: imageSize,
          transform: `translate(calc(-50% + ${imageSize * v.shiftX}px), calc(-50% + ${imageSize * v.shiftY}px))`,
        }}
      />
    </span>
  );
}
