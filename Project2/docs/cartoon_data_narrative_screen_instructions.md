# Skill: Data Narrative Screen & Interaction Specification

## Purpose

Convert a written data-narrative concept into a precise, implementation-ready screen-by-screen specification for a web-based interactive data story.

The output should be detailed enough that a developer or code-generation model can later translate it into HTML, CSS, JavaScript, SVG, and Observable Plot/D3 visualizations without having to infer the intended narrative, layout, interaction, transition, or visual hierarchy.

The goal is not to redesign the narrative. Preserve the author's intended story, sequence, tone, questions, and data logic while making the instructions technically and visually explicit.

---

# 1. Core Principles

## 1.1 Narrative before visualization

Every screen must have a clear narrative purpose.

For each screen specify:

- What the audience should understand
- What text they see
- What visual they see
- What changes on scroll
- What interaction is available
- What the transition communicates

Do not add a chart merely because data is available.

---

## 1.2 One narrative idea per screen

Each screen should have one dominant message.

Avoid:

- Multiple competing headings
- Excessive annotations
- Unnecessary decorative elements
- Charts that require the audience to decode too many variables simultaneously

The visual hierarchy should guide the audience through:

**context → curiosity → exploration → evidence → comparison → reflection**

---

## 1.3 Use transitions to communicate relationships

A transition should explain a change in the data or narrative.

Examples:

- TV → dataset
- Channel-specific treemap → all-show treemap
- Treemap → scatter plot
- Theme → protagonist role
- Full dataset → gender-filtered dataset
- Mixed + female → female-only
- Individual dots → selected show detail

Avoid decorative animation that does not communicate a relationship.

---

# 2. Global Visual System

## Canvas

Primary background:

`#4C5CEF`

Use the blue background consistently across the interactive except where a screen intentionally specifies another background.

## Typography

### Primary display/body font

**Gabarito**

Use for:

- Headings
- Narrative text
- Questions
- Labels
- Buttons
- UI elements
- Captions

### Secondary / data / technical font

**M PLUS Code Latin**

Use selectively for:

- Numerical values
- Years
- Data labels
- Small metadata
- Dataset-related annotations
- Technical UI details where a monospaced visual language is useful

Do not use the monospaced font for long narrative paragraphs.

## Text box

Primary text-box color:

`#FFFFFF`

Text inside white boxes should use the blue background color or another high-contrast dark tone.

## Highlight colors

Use sparingly to emphasize important words, statistics, or narrative moments:

- Orange: `#FF9500`
- Yellow: `#FFD400`

These should establish a visual hierarchy rather than decorate every screen.

## General visual language

The visual language should feel:

- Nostalgic
- Playful
- Editorial
- Data-driven
- Clean
- Slightly retro

Do not make the interface look like a generic dashboard.

The cartoon imagery should provide nostalgia; the data visualizations should remain rigorous and readable.

---

# 3. Scroll-Driven Structure

The narrative uses scroll as the primary storytelling mechanism.

Treat the webpage as a sequence of scroll-driven scenes.

For each scene:

1. Establish initial state.
2. Detect scroll progress.
3. Interpolate visual properties based on scroll progress.
4. Trigger the next narrative state.
5. Preserve continuity between states where possible.

Prefer smooth interpolation over abrupt changes.

Useful properties for interpolation:

- `opacity`
- `transform`
- `scale`
- `translateX`
- `translateY`
- `width`
- `height`
- `position`
- `font-size`
- `color`
- SVG rectangle dimensions
- SVG circle coordinates
- SVG opacity/fill
- chart axes/domain

---

# 4. Screen-by-Screen Specification

# SCREEN 1 — Opening Quote

### Narrative purpose

Establish the central idea of childhood imitation and create an emotional opening before introducing cartoons.

### Initial state

Full-screen white background.

Centered quotation:

> "Children are great imitators, so give me something great to imitate".

The quotation should be visually dominant.

Use Gabarito.

The quote should feel like an opening statement rather than a UI element.

### Scroll interaction

As the user scrolls:

1. Keep the quote centered initially.
2. Begin zooming the quote outward.
3. Transition from the white opening screen into the next scene.
4. Introduce the sentence:

> Out of all the content that children absorb, TV cartoons have been a constant.

The sentence should appear naturally during the transition rather than abruptly replacing the quote.

---

# SCREEN 2 — The Television

### Narrative purpose

Connect childhood media consumption to the television and establish the central question.

### Visual

A retro television appears in the centre of the screen.

The quotation from Screen 1 is now visually contained inside the TV screen.

Behind/around the TV:

- Collage of cartoon imagery
- Slightly faded
- Full-screen
- Nostalgic
- Low enough opacity that the TV remains the primary focal point

### Scroll transition

As the user scrolls:

1. TV zooms into view from the previous scene.
2. Cartoon collage remains in the background.
3. Quote inside TV transforms into the question:

> **So who did your childhood cartoons tell you could be?**

Use Gabarito.

Highlight important words with `#FF9500` or `#FFD400` sparingly.

### Next scroll

The TV gradually disappears.

The cartoon collage remains.

This creates continuity into Screen 3.

---

# SCREEN 3 — Universe of Possibilities

### Narrative purpose

Introduce the diversity of roles that cartoons exposed children to.

### Background

Continue the faded cartoon collage from Screen 2.

### Text

A white rectangular text box enters from the bottom and moves toward the centre.

Text:

> **We met a whole universe of possibilities.**
>
> The brilliant scientist, the fearless hero, the curious explorer, the clever detective, the mischievous troublemaker and more.

Use Gabarito.

Highlight role words selectively:

- scientist
- hero
- explorer
- detective
- troublemaker

Use `#FF9500` and `#FFD400` for highlights.

### Scroll transition

The text box moves upward and exits the frame.

The background remains visually continuous.

---

# SCREEN 4 — Your Cartoon World

### Narrative purpose

Let users explore the curated dataset by television channel and see the thematic profile of the shows they may have encountered.

### Layout

Desktop:

- Left: approximately 60%
- Right: approximately 40%

### Top navigation

Five channel tabs:

1. Cartoon Network
2. Disney
3. Pogo
4. Hungama
5. Nickelodeon

Tabs should be clearly interactive.

Active tab should have a strong visual state.

### Left panel

Display cartoon shows belonging to the selected channel.

Each show should have:

- Thumbnail/poster
- Show name
- Consistent image dimensions
- Hover state
- Selected state

The show grid/list occupies approximately 60% of the screen.

### Right panel

A treemap dynamically builds as shows are selected.

Data field:

`prominent_theme_clean`

The treemap represents:

**share/count of selected shows belonging to each prominent theme.**

The user should be able to visually understand the thematic profile of their selected cartoon world.

### Interaction

When the user clicks a cartoon:

1. Mark it as selected.
2. Update the treemap.
3. Recalculate theme counts.
4. Animate the relevant treemap rectangles.
5. Preserve existing rectangles where possible.
6. Create/remove/resize rectangles as the selected dataset changes.

### Disclaimer

At the bottom of the screen:

> This list of shows is not exhaustive. It is curated based on the most popular shows recorded across multiple websites.

Use small M PLUS Code Latin or Gabarito.

---

# SCREEN 5 — What Were These Worlds About?

### Narrative purpose

Move from personal/channel-level exploration to the overall dataset.

### Transition

As the user scrolls:

1. Left cartoon-selection panel fades out.
2. The channel tabs fade out.
3. The treemap moves from the right side toward the centre.
4. The treemap enters/appears inside the same retro TV used earlier.
5. The channel-specific treemap transforms into the complete dataset treemap.

### Narrative text

A white text box enters from the bottom and moves to the centre.

Recommended text:

> **Across the 116 shows in our study, three themes kept coming back:**

Then reveal:

> **Heroism. Mischief. Adventure.**

Supporting line:

> **Together, they make up about 60% of the shows in our dataset.**

Do not use "of all time"; the dataset is curated.

### Data visualization

Treemap field:

`prominent_theme_clean`

Each rectangle represents a theme.

Area represents number/share of shows.

The transformation should preserve visual continuity between the previous treemap and the complete treemap.

---

# SCREEN 6 — Themes → Roles Over Time

### Narrative purpose

Introduce temporal diversity and then move from story themes to protagonist roles.

## State A — Theme scatter plot

Title:

> **Diversity of themes in cartoons**

Scatter plot:

- X = `Original release year`
- Y = `prominent_theme_clean`
- Mark = dot
- One dot = one show
- Start x-axis at 1960
- Use the established theme color palette
- Legend visible
- No Y-axis title

The same dot should represent the same show throughout subsequent transformations.

### Transition

As the user scrolls:

The theme scatter plot transforms into:

- X = `Original release year`
- Y = `protagonist_role_clean`

Do not redraw the dots as a completely new chart.

Instead, animate each existing dot from its theme y-position to its protagonist-role y-position.

This makes the transformation itself meaningful:

**theme → role**

---

# SCREEN 6B — Gender Question

On further scroll, a white text box enters from below.

Question:

> **How many of the shows you watched had a female lead?**

Prefer a conversational tone.

The question should appear over/near the visualization without obscuring the data.

---

# SCREEN 7 — Who Got to Lead?

### Narrative purpose

Reveal the gender distribution of protagonists.

### Initial state

Scatter plot remains in place.

Male-only lead dots:

- Turn grey.

Female-only and mixed lead dots:

- Retain their theme colors.

### Heading/statistic

Use the actual dataset value.

Current dataset finding:

> **29 of 116 shows had female leads — alone or as part of the main cast.**

This includes:

- Female-only
- Mixed-gender leads

### Second scroll state

Mixed-gender dots also turn grey.

Only female-only dots remain colored.

Heading changes to:

> **Only 8 of 116 shows had a female lead at the centre of the story on her own.**

### Interaction

Hover:

- Dot glows
- Show name appears
- Optional tooltip containing:
  - Show name
  - Original release year
  - Theme
  - Protagonist role

Click:

Open a detail panel on the right.

Detail panel contains:

- Show name
- Original release year
- India debut year
- Protagonist role
- Underlying theme
- Poster image, where available

### Filtering

Allow users to filter by:

`Country of origin`

The scatter plot and statistic should update when the filter changes.

The visualization should clearly indicate that the displayed count is filtered.

---

# SCREEN 8 — What Stories Did Girls Get?

### Narrative purpose

Move beyond quantity and examine the roles/themes of the female-led shows.

### Visual

The female-only dots remain visible.

A white text box moves from bottom to centre.

Use the actual dataset findings.

For the 8 female-only shows:

- Hero: 4
- Navigator: 2
- Explorer: 2

Themes:

- Heroism: 2
- Fantasy: 2
- Coming of age: 2
- Learning: 1
- Adventure: 1

### Recommended narrative copy

> **When girls took the lead, they weren't just one thing.**
>
> They were **heroes, explorers and navigators of their own worlds.**
>
> **But there were far fewer of these stories to begin with.**

Potential final insight:

> **The bigger gap wasn't what girls could be. It was how often they got to lead the story.**

### Scroll transition

Text box moves upward and exits the frame.

---

# SCREEN 9 — Reflection & Ending

### Narrative purpose

Return from data to memory and leave the audience with a personal question.

### Visual

The retro TV appears again.

Inside the TV:

A comparative treemap showing:

- Male-only lead shows
- Female-only lead shows

The areas must be proportional to their counts.

Current dataset record comparison:

- Male-only: 87
- Female-only: 8

Mixed leads are excluded from this direct comparison.

Do not distort the areas to make them visually equal.

### Scroll

The TV remains while the narrative text gradually appears.

Text sequence:

> **We don't remember every episode we watched as children.**
>
> **But we remember the characters.**

Then:

> The ones who were brave.
>
> The ones who were clever.
>
> The ones who caused trouble.
>
> The ones who saved the day.

Then:

> **Across four decades, these characters filled our afternoons with possibilities of who we could be.**
>
> **But those possibilities were not distributed equally.**

Then:

> Some characters were repeatedly given the power to explore, invent, fight, compete and lead.
>
> Others were more often placed in worlds of friendship, family, magic or care.

### Final question

Replace the previous longer question with:

> **Cartoons may not decide who we become.**
>
> **But when some characters get to lead, explore and save the day more often, who do we imagine we can be?**

This should be the final narrative statement before the CTA.

---

# 5. Final CTA

At the bottom:

> **Just one more question, if it's okay.**

Make this feel informal and personal.

### Interaction

When clicked:

Open a small white text box/modal.

Question:

> **What's your favourite cartoon even today?**

Provide:

- Text input
- Done/submit button

After submission:

Display:

> **Thank you.**

Do not make the response feel like a survey form. It should feel like a final personal reflection.

---

# 6. Data Visualization Requirements

## Treemaps

Use SVG-based rectangles.

Each rectangle should have stable identifiers based on the category.

This is important because Screen 4 → Screen 5 needs animated transitions.

For example:

```js
theme === "Heroism"
```

should correspond to the same SVG group before and after transformation.

## Scatter plot

Use SVG circles.

Each show must have a stable ID.

Do not recreate circles during transformations.

Instead update:

```text
cx
cy
fill
opacity
r
```

This allows:

**theme position → role position → gender filtering**

to become one continuous visual story.

---

# 7. Interaction States

Every interactive element should have:

### Default
Normal visibility.

### Hover
Subtle highlight/glow.

### Selected
Clear visual indication.

### Disabled/filtered
Reduced opacity or grey.

### Transition
Smooth movement rather than instantaneous replacement.

Use approximately:

- 300–500ms for microinteractions
- 600–1000ms for major narrative transformations

Scroll-driven animations may use continuous interpolation instead of fixed durations.

---

# 8. Accessibility

The generated webpage should include:

- Semantic HTML
- Keyboard-accessible tabs
- Keyboard-accessible show selection
- Visible focus states
- Alt text for cartoon posters
- Text equivalents for important statistics
- Sufficient contrast
- `aria-label` for interactive chart elements where appropriate
- Avoid conveying essential information by colour alone

The gender comparison should remain understandable even without colour.

---

# 9. Responsive Behaviour

Desktop is the primary composition.

For smaller screens:

### Screen 4

Change:

```text
60% left / 40% right
```

to a vertical arrangement:

```text
channel tabs
↓
cartoon grid
↓
treemap
```

### Scatter plot

Allow horizontal scrolling or responsive scaling rather than compressing the chart until labels become unreadable.

### TV

Maintain aspect ratio.

Do not crop the TV unpredictably.

---

# 10. Data Integrity

Use the dataset fields exactly as provided.

Important fields:

- `Show`
- `Channel in India`
- `Original release year`
- `India debut year`
- `Country of origin`
- `Main character gender`
- `protagonist_role_clean`
- `prominent_theme_clean`

Do not invent missing values.

If a poster is unavailable, use a clearly marked placeholder rather than fabricating an image.

The dataset is a curated selection of popular shows and is **not an exhaustive history of children's television**.

---

# 11. Narrative Guardrails

Do not claim:

> Cartoons determine children's behaviour.

The narrative should instead explore:

- Representation
- Familiarity
- Character roles
- Narrative possibilities
- Frequency of representation
- Gender distribution

The final question should remain open-ended.

The audience should be invited to reflect, not told what they must conclude.

---

# 12. Implementation Architecture

Recommended structure:

```text
index.html
styles.css
script.js
/data
  cartoons.csv
/assets
  /posters
  /cartoon-collage
  /tv
```

Recommended technologies:

- HTML
- CSS
- JavaScript
- SVG
- D3.js and/or Observable Plot for data visualization
- IntersectionObserver or scroll-progress logic for narrative scenes

Avoid unnecessary frameworks unless they materially improve the interaction.

---

# 13. Critical Transition Map

The implementation should preserve these visual transformations:

```text
QUOTE
  ↓
TV + QUOTE
  ↓
TV + QUESTION
  ↓
CARTOON COLLAGE
  ↓
ROLE INTRODUCTION
  ↓
CHANNEL EXPLORATION
  ↓
CHANNEL TREEMAP
  ↓
ALL-SHOW TREEMAP
  ↓
THEME SCATTER
  ↓
ROLE SCATTER
  ↓
FEMALE + MIXED HIGHLIGHT
  ↓
FEMALE-ONLY HIGHLIGHT
  ↓
FEMALE ROLE/THEME ANALYSIS
  ↓
MALE vs FEMALE TREEMAP
  ↓
REFLECTION
  ↓
PERSONAL QUESTION
  ↓
THANK YOU
```

This continuity is central to the experience.

The webpage should feel like **one story transforming**, not a collection of unrelated charts.
