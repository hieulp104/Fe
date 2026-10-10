const TRIWAVE_TOP = "M36 178C112 252 184 264 260 196C336 128 404 114 482 180";
const TRIWAVE_BOTTOM = "M36 292C112 366 184 378 260 310C336 242 404 228 482 294";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  const maskId = compact ? "fe-mark-compact" : "fe-mark";

  return (
    <span className={compact ? "topbar-brand" : "logo"}>
      <span className="brand-symbol">
        <svg className="brand-mark" viewBox="0 0 512 512" aria-hidden="true">
          <defs>
            <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512">
              <rect width="512" height="512" fill="#000" />
              <circle cx="256" cy="256" r="208" fill="#fff" />
              <g fill="none" stroke="#000" strokeLinecap="round" strokeWidth="28">
                <path d={TRIWAVE_TOP} />
                <path d={TRIWAVE_BOTTOM} />
              </g>
            </mask>
          </defs>
          <rect width="512" height="512" fill="currentColor" mask={`url(#${maskId})`} />
        </svg>
      </span>
      <span className="brand-wordmark brand-wordmark-text" aria-hidden="true">fe</span>
    </span>
  );
}
