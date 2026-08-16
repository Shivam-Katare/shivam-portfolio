import { PageJumpNav } from "app/components/page-jump-nav";
import { PhotoStack } from "app/components/photo-stack/photo-stack";
import { TalksList } from "app/components/talks-list";
import { highlightPhotos } from "app/lib/highlights";

export default function HighlightsPage() {
  return (
    <main className="home-intro mx-auto w-full max-w-[52rem] pt-28 pb-20 md:pt-32 md:pb-24">
      <header className="mb-8 text-center">
        <p className="text-[0.9375rem] text-[var(--ink-muted)]">
          A few things I&apos;ve been part of.
        </p>
        <div className="mt-4 flex justify-center">
          <PageJumpNav
            items={[
              { href: "/highlights#photos", label: "Photos" },
              { href: "/highlights#talks", label: "Talks" },
            ]}
          />
        </div>
      </header>

      <section id="photos" className="scroll-mt-28" aria-label="Photos">
        <PhotoStack items={highlightPhotos} />
      </section>

      <TalksList />
    </main>
  );
}
