import * as React from "react";

type Len = number | string;
const toLen = (v: Len) => (typeof v === "number" ? `${v}px` : v);

export interface GapProps extends React.HTMLAttributes<HTMLDivElement> {
  // Heights by breakpoint
  base?: Len;
  sm?: Len;
  md?: Len;
  lg?: Len;
  xl?: Len;
  x2?: Len;
  safeAreaTop?: boolean;

  /** Tailwind classes for background (e.g., "bg-white dark:bg-neutral-950"). Defaults to transparent. */
  bgClassName?: string;

  /** Raw CSS color string to force a background (e.g., "#0f172a" or "rgba(0,0,0,.5)"). */
  bgColor?: string;

  /** Add a 1px divider at the bottom (auto light/dark). */
  divider?: boolean;

  /** Override divider color. */
  dividerColor?: string;

  /** Small shadow under the gap (useful beneath sticky headers). */
  shadow?: boolean;
}

/** Empty div spacer with responsive heights and optional background/divider/shadow. */
export default function Gap({
  base = 60, // <640px
  sm = 60, // >=640px
  md = 40, // >=768px
  lg = 20, // >=1024px
  xl = 20, // >=1280px
  x2 = 20, // >=1536px
  safeAreaTop = false,
  bgClassName,
  bgColor,
  divider = false,
  dividerColor,
  shadow = false,
  className,
  style,
  ...rest
}: GapProps) {
  const vars: React.CSSProperties = {
    ["--g-base" as any]: toLen(base),
    ["--g-sm" as any]: toLen(sm),
    ["--g-md" as any]: toLen(md),
    ["--g-lg" as any]: toLen(lg),
    ["--g-xl" as any]: toLen(xl),
    ["--g-2xl" as any]: toLen(x2),
    ["--safe" as any]: safeAreaTop ? "env(safe-area-inset-top)" : "0px",
    background: bgColor ?? style?.background, // only set if provided
    ...style,
  };

  return (
    <div
      aria-hidden
      style={vars}
      className={[
        "relative w-full shrink-0",
        // heights per breakpoint
        "h-[calc(var(--g-base)+var(--safe))]",
        "sm:h-[calc(var(--g-sm)+var(--safe))]",
        "md:h-[calc(var(--g-md)+var(--safe))]",
        "lg:h-[calc(var(--g-lg)+var(--safe))]",
        "xl:h-[calc(var(--g-xl)+var(--safe))]",
        "2xl:h-[calc(var(--g-2xl)+var(--safe))]",
        // background
        bgClassName ?? "bg-transparent",
        // optional shadow
        shadow ? "shadow-sm" : "",
        className ?? "",
      ].join(" ")}
      {...rest}
    >
      {divider && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-black/10 dark:bg-white/10"
          style={dividerColor ? { background: dividerColor } : undefined}
        />
      )}
    </div>
  );
}
