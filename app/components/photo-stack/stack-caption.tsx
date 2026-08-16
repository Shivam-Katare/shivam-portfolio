import { PiArrowBendDownLeft, PiArrowBendDownRight } from "react-icons/pi";

type StackCaptionProps = {
  text: string;
  side: "left" | "right";
};

export function StackCaption({ text, side }: StackCaptionProps) {
  const isLeft = side === "left";
  const Arrow = isLeft ? PiArrowBendDownRight : PiArrowBendDownLeft;

  return (
    <p
      className={`flex max-w-[9.5rem] items-end gap-1.5 text-[1.5rem] leading-snug text-[var(--ink-secondary)] [font-family:var(--font-caveat)] md:max-w-[10.5rem] ${
        isLeft ? "text-right" : "text-left"
      }`}
    >
      {!isLeft && (
        <Arrow className="mb-0.5 size-4 shrink-0 text-[var(--ink-muted)]" />
      )}
      <span>{text}</span>
      {isLeft && (
        <Arrow className="mb-0.5 size-4 shrink-0 text-[var(--ink-muted)]" />
      )}
    </p>
  );
}
