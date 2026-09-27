/*
 * PlateCorners — engraved corner brackets for the blog cards' double rule
 * (.plate), in the manner of antique book corners: a fine L just outside
 * the rule, with a small fleur-de-lis at the vertex pointing outward.
 * Ink only: gold and rocaille stay reserved for the case studies.
 * Decorative (aria-hidden), colored via tokens.
 *
 * A React component so it can be used both from Astro (rendered static,
 * no client directive → no JS) and inside the BlogSearch island.
 * The parent must be position: relative and must not clip overflow.
 * Drawn once as the top-left corner; the others are mirrored in CSS.
 */

const positions = ['tl', 'tr', 'bl', 'br'] as const;

export default function PlateCorners() {
  return (
    <>
      {positions.map((pos) => (
        <svg
          key={pos}
          viewBox="0 0 34 34"
          aria-hidden="true"
          className={`plate-corner plate-corner-${pos}`}
        >
          {/* The L, running just outside the double rule, ends curling outward */}
          <path
            d="M8,33 L8,8 L33,8 M33,8 C34.8,8 35,6 33.6,5.6 M8,33 C8,34.8 6,35 5.6,33.6"
            className="plate-corner-line"
            strokeWidth="0.9"
          />
          <circle cx="17" cy="8" r="0.9" className="plate-corner-bud" />
          <circle cx="8" cy="17" r="0.9" className="plate-corner-bud" />
          {/* Fleur-de-lis at the vertex, pointing out of the corner */}
          <path d="M8,8 C5.5,6.8 3.2,4.8 1.6,1.6 C4.8,3.2 6.8,5.5 8,8 Z" className="plate-corner-bud" />
          <path
            d="M6.4,6.4 C5.2,8.4 3.2,8.8 2.2,7.8 C1.5,7 2.1,6 3.1,6.2 M6.4,6.4 C8.4,5.2 8.8,3.2 7.8,2.2 C7,1.5 6,2.1 6.2,3.1"
            className="plate-corner-line"
            strokeWidth="0.8"
          />
        </svg>
      ))}
    </>
  );
}
