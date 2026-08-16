import Image from "next/image";
import { PiArrowUpRight } from "react-icons/pi";
import type { HighlightPhoto } from "app/lib/highlights";
import { layerTransform } from "app/helpers/photo-stack";

type PhotoCardProps = {
  photo: HighlightPhoto;
  depth: number;
  priority?: boolean;
  interactive?: boolean;
};

export function PhotoCard({
  photo,
  depth,
  priority = false,
  interactive = false,
}: PhotoCardProps) {
  return (
    <article
      className="absolute inset-0 origin-center rounded-[2px] bg-white p-[6px] shadow-[0_1px_8px_rgba(26,26,24,0.08)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        zIndex: 20 - depth,
        transform: layerTransform(depth),
      }}
    >
      <div className="relative h-full w-full overflow-hidden bg-[#f4f4f0]">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 640px) 88vw, 420px"
          quality={70}
          priority={priority}
          className="object-contain object-center"
        />
        {interactive && photo.href && (
          <a
            href={photo.href}
            target="_blank"
            rel="noopener noreferrer"
            onPointerDown={(event) => event.stopPropagation()}
            className="absolute bottom-2 right-2 inline-flex cursor-pointer items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-[var(--ink)] shadow-[0_1px_4px_rgba(26,26,24,0.12)]"
          >
            Open
            <PiArrowUpRight className="size-3" aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}
