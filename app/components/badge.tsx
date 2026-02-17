import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface BadgeProps {
  icon: React.ReactNode | StaticImageData;
  text: string;
  link?: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ icon, text, link, className = "" }) => {
  const baseClasses =
    "inline-flex items-center space-x-1 px-1 py-0.5 rounded text-xs font-medium transition-colors";

  const renderIcon = () => {
    if (typeof icon === "string") {
      return <span className="flex items-center justify-center">{icon}</span>;
    }

    if (typeof icon === "object" && icon !== null && "src" in icon) {
      const img = icon as StaticImageData;
      return (
        <span className="flex items-center justify-center">
          <Image
            src={img}
            alt={text}
            width={16}
            height={16}
            className="w-4 h-4 rounded"
          />
        </span>
      );
    }

    return (
      <span className="flex items-center justify-center">
        {icon as React.ReactNode}
      </span>
    );
  };

  const content = (
    <>
      {renderIcon()}
      <span>{text}</span>
    </>
  );

  return link ? (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${className}`}
    >
      {content}
    </Link>
  ) : (
    <span className={`${baseClasses} ${className}`}>{content}</span>
  );
};

export default Badge;
