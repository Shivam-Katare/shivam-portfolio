export const metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="mx-auto w-full max-w-[640px] pt-28 pb-20">
      <h1 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--ink)]">
        Page not found
      </h1>
      <p className="text-[1.0025rem] leading-[1.7] text-[var(--ink-secondary)]">
        That URL is not part of this site.{" "}
        <a href="/" className="page-link cursor-pointer">
          Go home
        </a>
        .
      </p>
    </section>
  );
}
