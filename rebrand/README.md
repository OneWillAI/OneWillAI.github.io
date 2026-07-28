# OneWill Brand and Mascot Handoff

This package contains the current OneWill brand guide and the approved compact hamster sprite family. Older mascot explorations are intentionally excluded.

## Contents

- `brand/brand.md` — messaging, visual system, palette, diagrams, and mascot guidance.
- `mascot/onewill-hamster-master-64.png` — canonical neutral 64 × 64 transparent sprite.
- `mascot/expressions/` — individual 64 × 64 transparent expression frames.
- `mascot/sheets/onewill-hamster-expression-sheet.png` — production 128 × 128 transparent sprite sheet.
- `mascot/sheets/onewill-hamster-expression-sheet.json` — frame coordinates for the sheet.
- `mascot/sheets/onewill-hamster-expression-sheet-preview.png` — 4× nearest-neighbor preview; do not ship in place of the production sheet.

## Sprite-sheet layout

Each frame is 64 × 64 pixels.

|              | Column 0 | Column 1 |
|--------------|----------|----------|
| Row 0        | Happy    | Confused |
| Row 1        | Angry    | Thinking |

The JSON manifest is the source of truth for pixel coordinates.

## Product semantics

- **Neutral:** ordinary agent presence and architecture diagrams.
- **Happy:** successful completion, recovery, or a safely finished run.
- **Confused:** an ambiguous request, stalled run, or need for operator clarification.
- **Angry / firm:** a denied unsafe action or policy block. Keep the tone controlled, never violent or comedic.
- **Thinking:** evaluation, planning, or waiting on a reversible decision.

Do not use mascot humor in security incidents, data-loss states, billing failures, or irreversible-action warnings.

## Web implementation

Preserve hard pixel edges when scaling:

```css
.onewill-hamster {
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
```

Scale by whole-number multiples where possible: 64, 128, 192, or 256 CSS pixels. Keep the original PNGs unfiltered and transparent. Do not redraw the sprite as a smooth vector.

For a CSS background sprite, set `background-size: 128px 128px` at native scale and use the positions from the JSON manifest.

## Character invariants

Preserve the balanced chibi ratio, honey-gold and cream fur, pink inner ears and paws, medium brown eyes, compact body, small feet, off-center cream forehead tuft, and cheek freckle. New states should change expression or pose without redesigning the character.
