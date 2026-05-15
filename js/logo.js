/* ============================================================
   logo.js — HeyReg brand system · Heritage Serif option

   heyreg_wordmark(size)   — "Hey◆Reg" in Cormorant Garamond 600
   heyreg_seal(size, opts) — circular seal SVG with "HR" monogram
   heyreg_monogram(size)   — compact "HR." for favicons / avatars

   All use currentColor for letterforms so they inherit whatever
   CSS color the parent sets. The accent diamond always uses
   var(--color-teal) (ochre/gold from the active palette).
   ============================================================ */

/* ── Wordmark ─────────────────────────────────────────────────
   Cormorant Garamond 600, -0.045em kerning.
   Diamond accent (8.5% of size) sits at mid-cap between the words.
   ------------------------------------------------------------ */
function heyreg_wordmark(size) {
  size = size || 36;
  var d  = +(size * 0.085).toFixed(2);   /* diamond side length */
  var gw = +(size * 0.45).toFixed(2);    /* gap column width — breathing room around diamond */
  var gh = +(size * 0.52).toFixed(2);    /* gap column height   */
  var fs = 'font-family:\'Cormorant Garamond\',Georgia,serif;font-size:' + size +
           'px;font-weight:600;letter-spacing:-0.045em;color:currentColor;font-style:normal';
  return (
    '<span style="display:inline-flex;align-items:baseline;line-height:1;font-style:normal">' +
      '<span style="' + fs + '">Hey</span>' +
      '<span style="display:inline-block;width:' + gw + 'px;position:relative;height:' + gh + 'px;flex-shrink:0" aria-hidden="true">' +
        '<span style="position:absolute;left:50%;top:42%;transform:translate(-50%,-50%) rotate(45deg);' +
               'width:' + d + 'px;height:' + d + 'px;background:var(--color-teal);display:block"></span>' +
      '</span>' +
      '<span style="' + fs + '">Reg</span>' +
    '</span>'
  );
}

/* ── Seal ─────────────────────────────────────────────────────
   SVG circular seal: outer ring · inner ring · curved bilingual
   text · hR monogram · separator line · location text.
   opts: { ring, center, accent, support, bg, topText, bottomText, showText }
   ------------------------------------------------------------ */
function heyreg_seal(size, opts) {
  size = size || 120;
  opts = opts || {};
  var ring       = opts.ring    || 'currentColor';
  var center     = opts.center  || 'currentColor';
  var accent     = opts.accent  || 'var(--color-teal)';
  var support    = opts.support || 'var(--color-navy-light)';
  var bg         = opts.bg      || 'transparent';
  var topText    = opts.topText    !== undefined ? opts.topText    : 'ASUNTOS REGULATORIOS';
  var bottomText = opts.bottomText !== undefined ? opts.bottomText : 'REGULATORY AFFAIRS';
  var showText   = opts.showText   !== false;
  var id = 'hr-seal-' + (Math.random() * 1e9 | 0).toString(36);

  var bgEl = bg !== 'transparent'
    ? '<circle cx="50" cy="50" r="49" fill="' + bg + '"/>'
    : '';

  var textEl = '';
  if (showText) {
    textEl = (
      '<defs>' +
        '<path id="' + id + 'T" d="M 12,50 A 38,38 0 0 1 88,50"/>' +
        '<path id="' + id + 'B" d="M 8,50 A 42,42 0 0 0 92,50"/>' +
      '</defs>' +
      '<text fill="' + ring + '" font-family="\'DM Sans\',sans-serif" font-size="5" letter-spacing="2" font-weight="600">' +
        '<textPath href="#' + id + 'T" startOffset="50%" text-anchor="middle">' + topText + '</textPath>' +
      '</text>' +
      (bottomText
        ? '<text fill="' + ring + '" font-family="\'DM Sans\',sans-serif" font-size="5" letter-spacing="2" font-weight="600">' +
            '<textPath href="#' + id + 'B" startOffset="50%" text-anchor="middle" side="right">' + bottomText + '</textPath>' +
          '</text>'
        : '') +
      '<g fill="' + accent + '" transform="matrix(0.96494508,0,0,1,1.6670562,4)">' +
        '<polygon points="6,50 9,47 12,50 9,53"/>' +
        '<polygon points="88,50 91,47 94,50 91,53"/>' +
      '</g>'
    );
  }

  return (
    '<svg width="' + size + '" height="' + size + '" viewBox="0 0 100 100"' +
    ' xmlns="http://www.w3.org/2000/svg" style="display:block" aria-hidden="true">' +
      bgEl +
      '<circle cx="50" cy="50" r="46" fill="none" stroke="' + ring + '" stroke-width="0.8"/>' +
      '<circle cx="50" cy="50" r="34" fill="none" stroke="' + ring + '" stroke-width="0.4"/>' +
      textEl +
      '<text x="50" y="54" text-anchor="middle"' +
      ' font-family="\'Newsreader\',Georgia,serif"' +
      ' font-size="24" fill="' + center + '" font-weight="500" font-style="italic">h' +
      '<tspan font-style="normal">R</tspan></text>' +
      '<line x1="44" y1="60" x2="56" y2="60" stroke="' + support + '" stroke-width="0.3"/>' +
      '<text x="50" y="66" text-anchor="middle"' +
      ' font-family="\'DM Sans\',sans-serif"' +
      ' font-size="2.6" letter-spacing="0.5" font-weight="600" fill="' + support + '">COSTA RICA \xb7 MMXXVI</text>' +
    '</svg>'
  );
}

/* ── Monogram ─────────────────────────────────────────────────
   Compact "HR." — Cormorant Garamond 500 — for favicons / avatars.
   ------------------------------------------------------------ */
function heyreg_monogram(size) {
  size = size || 40;
  return (
    '<span style="font-family:\'Cormorant Garamond\',Georgia,serif;' +
          'font-size:' + size + 'px;font-weight:500;color:currentColor;' +
          'letter-spacing:-0.03em;line-height:1;font-style:normal">' +
      'HR<span style="color:var(--color-teal)">.</span>' +
    '</span>'
  );
}
