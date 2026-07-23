const CREDENTIALS = [
  "Licensed REALTOR® Since 2005",
  "Former Fortune 500 Marketing & Finance Leader",
  "Agent Leadership Council",
  "Metro Atlanta Market Specialist",
];

/**
 * Infinite horizontal marquee. The credential list is duplicated once so
 * the CSS animation can loop seamlessly at -50% translateX.
 */
export default function TrustStrip() {
  const loop = [...CREDENTIALS, ...CREDENTIALS];

  return (
    <section className="relative overflow-hidden border-y border-navy/10 bg-navy-deep py-6">
      <div className="mask-fade-x flex w-max animate-marquee items-center">
        {loop.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center">
            <span className="whitespace-nowrap px-8 text-sm font-semibold uppercase tracking-[0.15em] text-blue-50/80 sm:text-base">
              {item}
            </span>
            <span className="text-gold" aria-hidden>
              &#9670;
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
