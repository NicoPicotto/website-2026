/*
 * PlateCorners — small engraved corner blocks for the blog cards' double
 * rule (.plate). Ink only: gold and rocaille stay reserved for the case
 * studies. Decorative (aria-hidden), colored via tokens.
 *
 * A React component so it can be used both from Astro (rendered static,
 * no client directive → no JS) and inside the BlogSearch island.
 * The parent must be position: relative and must not clip overflow.
 */

const positions = ['tl', 'tr', 'bl', 'br'] as const;

export default function PlateCorners() {
  return (
    <>
      {positions.map((pos) => (
        <svg
          key={pos}
          viewBox="0 0 16 16"
          aria-hidden="true"
          className={`plate-corner plate-corner-${pos}`}
        >
          <rect x="0.5" y="0.5" width="15" height="15" className="plate-corner-block" />
          <rect x="3" y="3" width="10" height="10" className="plate-corner-line" strokeWidth="0.6" />
          <path
            d="M8,4.6 C8.6,7.1 8.9,7.4 11.4,8 C8.9,8.6 8.6,8.9 8,11.4 C7.4,8.9 7.1,8.6 4.6,8 C7.1,7.4 7.4,7.1 8,4.6 Z"
            className="plate-corner-star"
          />
        </svg>
      ))}
    </>
  );
}
