"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { HighlightPhoto } from "app/lib/highlights";
import {
  STACK_DEPTH,
  isLeftHalf,
  wrapIndex,
} from "app/helpers/photo-stack";
import { ClickPill } from "./click-pill";
import { PhotoCard } from "./photo-card";
import { StackCaption } from "./stack-caption";

type PhotoStackProps = {
  items: HighlightPhoto[];
};

export function PhotoStack({ items }: PhotoStackProps) {
  const [index, setIndex] = useState(0);
  const [pill, setPill] = useState({ x: 0, y: 0, visible: false });
  const [canHover, setCanHover] = useState(false);

  const current = items[index];
  const prev = items[wrapIndex(index - 1, items.length)];

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  const go = (direction: -1 | 1) => {
    setIndex((value) => wrapIndex(value + direction, items.length));
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("a")) return;
    if (event.pointerType === "touch") {
      go(isLeftHalf(event.clientX, event.currentTarget.getBoundingClientRect()) ? -1 : 1);
      return;
    }
    if (event.button === 0) go(-1);
    if (event.button === 2) go(1);
  };

  return (
    <div className="grid w-full grid-cols-1 items-center gap-5 md:grid-cols-[1fr_min(26rem,52%)_1fr]">
      <div className="hidden justify-end pr-2 md:flex">
        {current.captionSide === "left" && (
          <StackCaption text={current.caption} side="left" />
        )}
      </div>

      <div
        className={`relative ${canHover ? "cursor-none" : "cursor-pointer"}`}
        onPointerDown={onPointerDown}
        onContextMenu={(event) => event.preventDefault()}
        onPointerMove={(event) => {
          if (!canHover) return;
          const overLink = Boolean((event.target as HTMLElement).closest("a"));
          setPill({
            x: event.clientX,
            y: event.clientY,
            visible: !overLink,
          });
        }}
        onPointerLeave={() => setPill((value) => ({ ...value, visible: false }))}
      >
        <div className="relative aspect-[4/5] w-full select-none [touch-action:manipulation]">
          {Array.from({ length: Math.min(STACK_DEPTH, items.length) }, (_, depth) => {
            const photo = items[wrapIndex(index + depth, items.length)];
            return (
              <PhotoCard
                key={`${photo.id}-${depth}`}
                photo={photo}
                depth={depth}
                priority={depth === 0}
                interactive={depth === 0}
              />
            );
          })}
        </div>
        <Image
          src={prev.src}
          alt=""
          width={8}
          height={8}
          className="pointer-events-none absolute h-px w-px opacity-0"
          aria-hidden
        />
        <ClickPill x={pill.x} y={pill.y} visible={canHover && pill.visible} />
      </div>

      <div className="hidden justify-start pl-2 md:flex">
        {current.captionSide === "right" && (
          <StackCaption text={current.caption} side="right" />
        )}
      </div>

      <div className="flex justify-center md:hidden">
        <StackCaption text={current.caption} side={current.captionSide} />
      </div>
    </div>
  );
}
