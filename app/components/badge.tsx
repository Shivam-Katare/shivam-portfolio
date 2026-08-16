import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type BadgeProps = {
  icon?: React.ReactNode | StaticImageData | string;
  text: string;
  link?: string;
  className?: string;
  bg?: string;
  color?: string;
  borderColor?: string;
  hoverBg?: string;
  iconSize?: number;
  size?: "sm" | "lg";
};

function isImageSource(
  icon: BadgeProps["icon"],
): icon is StaticImageData | string {
  if (!icon) return false;
  if (typeof icon === "string") {
    return (
      icon.startsWith("/") ||
      icon.startsWith("http") ||
      icon.startsWith("data:")
    );
  }
  return typeof icon === "object" && icon !== null && "src" in icon;
}

const Badge: React.FC<BadgeProps> = ({
  icon,
  text,
  link,
  className = "",
  bg,
  color,
  borderColor,
  hoverBg,
  iconSize,
  size = "sm",
}) => {
  const resolvedIconSize = iconSize ?? (size === "lg" ? 18 : 14);
  const isLarge = size === "lg";
  const style = {
    ...(bg ? { backgroundColor: bg } : {}),
    ...(color ? { color } : {}),
    ...(borderColor ? { borderColor } : {}),
    ...(hoverBg ? { "--badge-hover-bg": hoverBg } : {}),
  } as React.CSSProperties;

  const renderIcon = () => {
    if (!icon) return null;

    if (isImageSource(icon)) {
      const unoptimized =
        typeof icon === "string" && icon.endsWith(".svg");
      return (
        <Image
          src={icon}
          alt=""
          width={resolvedIconSize}
          height={resolvedIconSize}
          className={`${isLarge ? "size-[18px]" : "size-[14px]"} shrink-0 rounded-[3px] object-contain`}
          unoptimized={unoptimized}
        />
      );
    }

    if (typeof icon === "string") {
      return (
        <span className="flex items-center justify-center" aria-hidden>
          {icon}
        </span>
      );
    }

    return (
      <span className="flex items-center justify-center" aria-hidden>
        {icon}
      </span>
    );
  };

  const content = (
    <>
      {renderIcon()}
      <span>{text}</span>
    </>
  );

  const classes = [
    "inline-flex items-center align-middle no-underline cursor-pointer border transition-colors duration-200",
    "font-medium leading-none whitespace-normal sm:whitespace-nowrap",
    isLarge
      ? "mx-0 gap-1.5 rounded-[6px] px-2.5 py-[7px] text-[0.975rem]"
      : "mx-[1px] gap-1 rounded-[5px] px-1.5 py-[3px] text-[0.8125em]",
    className
      ? ""
      : "border-[var(--line)] bg-white text-[var(--ink)] hover:border-[var(--ink)]/20 hover:bg-[#f4f4f1]",
    hoverBg ? "hover:bg-[var(--badge-hover-bg)]" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (link) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        style={style}
      >
        {content}
      </Link>
    );
  }

  return (
    <span className={classes} style={style}>
      {content}
    </span>
  );
};

export default Badge;
