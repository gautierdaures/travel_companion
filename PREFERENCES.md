# Traveler preferences

The single source of truth for **what to recommend** when writing or editing country
content in this app. Read this before touching anything in `data/` — especially the
`places` list of each country.

## Loves (prioritize these)

- **Architecture** — striking buildings, old towns, distinctive vernacular styles.
- **Historical sites** — ruins, monuments, places with a real story.
- **Food** — markets, street food, regional specialties, authentic local eating.
- **Nature & the outdoors** — hikes, mountains, national parks, wild landscapes.
- **Off-the-beaten-path** — quiet, local, lesser-visited spots over famous ones.

## Avoid (do NOT recommend)

- Tourist traps and gimmicky, manufactured attractions.
  - Explicit example given: **no "Madame Tussauds"-type places.**
- Generic "top 10" sights that are famous mainly for being famous, with little
  architectural, historical, natural, or culinary substance.
- Anything crowded-for-its-own-sake when a richer, quieter alternative exists
  (e.g. prefer "Kyoto without the crush" over the crush).

## How this maps to the data model

Each entry in a country's `places` array has a `category`. Keep recommendations
weighted toward the loved themes above:

| category       | use for                                             |
| -------------- | --------------------------------------------------- |
| `architecture` | buildings, old towns, distinctive design            |
| `history`      | ruins, monuments, historically significant places   |
| `nature`       | hikes, parks, landscapes, wildlife                  |
| `food`         | markets, food streets, culinary destinations        |
| `offbeat`      | hidden gems, local-favorite, low-tourist spots      |

When in doubt, pick the option a curious independent traveler would love and a
tour bus would skip.
