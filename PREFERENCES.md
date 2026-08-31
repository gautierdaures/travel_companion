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

## Getting around

- **No planes.** The traveler avoids flying — always prefer overland (train,
  bus, bike, hike) or boat connections. Treat "requires a flight" as a serious
  downside when weighing where to go.
- Favor routes and stops that chain together overland — think in terms of a
  continuous line on the map, not a list of isolated highlights.

## How this maps to the data model

Each entry in a country's `places` array has a `category`. Keep recommendations
weighted toward the loved themes above:

| category      | use for                                                  |
| ------------- | -------------------------------------------------------- |
| `history`     | ruins, monuments, temples, old towns, museums            |
| `cities`      | living cities worth walking — districts, markets, design |
| `food`        | markets, food streets, culinary destinations             |
| `nature`      | parks, lakes, landscapes, wildlife                       |
| `trek`        | hikes, mountains, multi-day walks                        |
| `beach`       | coast, islands, sand and swimming                        |
| `diving`      | reefs, dive sites, snorkelling                           |
| `slow-travel` | stay-a-while places: river life, homestays, slow rail    |
| `offbeat`     | hidden gems, local-favorite, low-tourist spots           |

The same eight non-`offbeat` words are a country's `tags` — what you can do
there. They live in [`categories.js`](categories.js) (label, colour, icon).

When in doubt, pick the option a curious independent traveler would love and a
tour bus would skip.
