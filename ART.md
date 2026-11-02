# GAMES4U – eigen plaatjes toevoegen

Zet een **PNG met transparante achtergrond** in de `art/`-map van een spel, met precies de naam hieronder.
Het spel gebruikt hem dan automatisch in plaats van het getekende onderdeel. Weghalen = terug naar het origineel.

Uploaden via je telefoon: github.com/3D4U2D/GAMES4U → map openen (bijv. `fish4u/art`) → **Add file → Upload files** → **Commit changes**.
Na 1–2 minuten staat het live.

**Algemene regels voor elk plaatje**
- PNG, **transparante achtergrond** (geen wit vlak), geen tekst, geen schaduw op de grond.
- Onderwerp volledig in beeld, strak bijgesneden, niets afgesneden.
- **Zijaanzicht, kijkend naar rechts** (vissen, vogels).
- Formaat ca. 256–512 px breed is genoeg; groter maakt de app trager.
- Eén stijl aanhouden over alle plaatjes (zelfde belichting, lijndikte, kleurgebruik).
- Alleen **eigen, originele ontwerpen** – geen figuren, vissen of logo's uit bestaande games.

---

## Fish4U – `fish4u/art/`  (liggend spel)

| Bestand | Wat | Tip |
|---|---|---|
| `vis_01.png`, `vis_02.png`, … | **Basisvorm** van elke vis (een "familie") | Doorlopend nummeren; na 3 ontbrekende nummers stopt het zoeken |
| `vis_01a.png`, `vis_01b.png` | **Evolutie stap 1**: de twee mogelijke vormen | Zelfde familie, groter en mooier |
| `vis_01aa.png`, `vis_01ab.png`, `vis_01ba.png`, `vis_01bb.png` | **Evolutie stap 2** (vanuit a resp. b) | Meest spectaculaire vormen |
| `vissen.json` | Namen + zeldzaamheid per bestand | Zie voorbeeld hieronder |
| `decor_kelp.png` `decor_coral.png` `decor_rock.png` `decor_star.png` `decor_shell.png` `decor_moss.png` `decor_anemone.png` `decor_flower.png` `decor_crystal.png` `decor_bubbler.png` `decor_chest.png` `decor_castle.png` | Decoratie op de bodem | Vooraanzicht, staat op de bodem |
| `bg_reef.png` `bg_lagoon.png` `bg_wreck.png` `bg_cave.png` | Thema's / achtergronden, **liggend ca. 1920×1080** | Leeg water met bodem, **zonder vissen** |

Ontbreken de evolutieplaatjes van een vis, dan kan die vis (nog) niet evolueren. Er bestaan geen automatische kleur- of magievarianten meer.

`vissen.json` (zeldzaamheid 0 = gewoon, 1 = bijzonder, 2 = zeldzaam, 3 = episch):
```json
{
  "vis_01":   {"naam": "Prikkelbol", "zeldzaamheid": 0},
  "vis_01a":  {"naam": "Stekelkoning", "zeldzaamheid": 1},
  "vis_01b":  {"naam": "Bolbloesem", "zeldzaamheid": 1},
  "vis_01aa": {"naam": "Kroonstekel", "zeldzaamheid": 3}
}
```

## Bergloop – `bergloop/art/`

| Bestand | Wat |
|---|---|
| `fence.png` | Laag obstakel Oostenrijk (springen) – houten hek, breed |
| `beam.png` | Hoog obstakel Oostenrijk (bukken) – balk/poort waar je onderdoor glijdt |
| `rock.png` | Laag obstakel Indonesië – rotsblok/boomwortel, breed |
| `vine.png` | Hoog obstakel Indonesië – tak met lianen, met ruimte eronder |
| `pine.png` `chalet.png` | Decor Oostenrijk (op rotspilaren naast het pad) |
| `palm.png` `gate.png` | Decor Indonesië |
| `goat0.png` `goat1.png` | Achtervolger Oostenrijk, **vooraanzicht**, 2 loopstanden |
| `monkey0.png` `monkey1.png` | Achtervolger Indonesië, **vooraanzicht**, 2 loopstanden |
| `coin.png` `magnet.png` `boost.png` | Munt en power-ups (vierkant) |
| `backdrop_0.png` `backdrop_1.png` | Horizon-panorama Alpen / Indonesië, **liggend ca. 1800×450**, naadloos herhalend links-rechts, onderkant transparant of effen |

## Hoogvlieger – `hoogvlieger/art/`

| Bestand | Wat |
|---|---|
| `plank_0.png` | Gewone plank Indonesië (bamboe), liggend ca. 5:1 |
| `plank_1.png` | Gewone plank Oostenrijk (hout met sneeuw), ca. 5:1 |
| `plank_move.png` `plank_break.png` `plank_cloud.png` | Bewegende, brekende en wolk-plank |
| `spring.png` `coin.png` | Veer en munt |
| `bird0.png` `bird1.png` | Vogel Oostenrijk, zijaanzicht, vleugels omhoog/omlaag |
| `hornbill0.png` `hornbill1.png` | Vogel Indonesië, idem |
| `scene_0.png` `scene_1.png` | Achtergrondtegel Indonesië / Oostenrijk, **staand 1:2**, naadloos boven-onder herhalend, rustig/lichte kleuren |
| `start.png` | Startdecor onderaan (vulkaan + rijstvelden), liggend ca. 5:4 |

## Spelers (Bergloop + Hoogvlieger) – `img/`

`p1_back.png`, `p1_front.png` (Rowan), `p2_back.png`, `p2_front.png` (partner) – volledig figuur van top tot teen, staand, transparant.

---

## Prompts voor ChatGPT (kopiëren en aanpassen)

**Stijlzin – zet deze in élke prompt, dan blijft alles één stijl:**
> Glossy cartoon style for a cozy mobile game, soft 3D-rendered look, bold clean shapes, big expressive eyes, vibrant saturated colors, soft top lighting. Transparent background, no text, no ground shadow, subject fully in frame.

**Vissen (Fish4U):**
> [stijlzin] Create one original cute fish, side view facing right, full body. Fish idea: *a round coral-red fish with tiny spikes and a happy grin.*

**Evolutie (Fish4U):**
> [stijlzin] Same fish family as the attached base fish, evolved form A: bigger, more ornate fins, same colors but richer. Side view facing right.

Ideeën om af te wisselen: een slanke blauwe vis met blad-vormige vinnen · een platte gele vis met lange sluiervinnen · een bolle groene vis met mosachtige vlekken · een paarse vis met vlindervinnen · een kleine zilveren vis met een kroontje van vinnen · een oranje vis met tijgerstrepen · een doorzichtige kwalachtige vis die zacht gloeit.

**Decor:** > [stijlzin] Aquarium decoration, front view, standing on the floor: *a pink sea anemone with waving tentacles.*

**Achtergrond:** > Same style, landscape 16:9 underwater background for an aquarium game: *a green sunlit lagoon with a mossy stone arch*, empty water area in the middle, sandy floor at the bottom, no fish, no text.

**Achtervolger (Bergloop):** > [stijlzin] Front view of an angry mountain goat running toward the viewer, pose A (left legs forward). Then same goat, pose B (right legs forward).

**Plank (Hoogvlieger):** > [stijlzin] A floating bamboo platform, side view, wide and flat (5:1), for a jumping game.

Tip: vraag ChatGPT om **één onderwerp per plaatje** en controleer of de achtergrond echt transparant is (geen geblokt patroon ingetekend!).
Lukt transparant niet, stuur het plaatje dan hier – dan knip ik hem uit.
