type RightRailPromosProps = {
  onPricing: () => void;
};

export function RightRailPromos({ onPricing }: RightRailPromosProps) {
  return (
    <div className="rail-promos">
      <button className="pro-promo card" onClick={onPricing}>
        <span className="rail-section-label">OPEN SOURCE</span>
        <strong>Xem mã nguồn fe trên GitHub.</strong>
        <span className="pro-promo-link">
          <span className="pro-promo-divider" aria-hidden="true">|</span>
          hieulp104/Fe
        </span>
      </button>

      <section className="sponsor-block" aria-labelledby="credits-title">
        <h2 className="rail-section-label" id="credits-title">Credits</h2>
        <a
          className="become-sponsor"
          href="https://github.com/MengTo/threeui"
          target="_blank"
          rel="noreferrer"
        >
          Dựa trên ThreeUI Community (MIT) <span aria-hidden="true">→</span>
        </a>
      </section>
    </div>
  );
}
