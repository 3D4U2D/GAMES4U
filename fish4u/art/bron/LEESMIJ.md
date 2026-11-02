# Fish4U — vissenpakket v1.0

42 originele visafbeeldingen: zes families, zeven vormen per familie.

## Openen

Pak de ZIP uit en open overzicht.html. Alle afbeeldingen werken lokaal, zonder installatie of internet. Gebruik de 60px-knop voor de kleine weergave en kies een lichte of donkere achtergrond om de transparantie te beoordelen.

## Evolutie

Elke familie heeft één basisvis, twee tussenstadia en vier eindvormen:

- vis_01.png → vis_01a.png of vis_01b.png
- vis_01a.png → vis_01aa.png of vis_01ab.png
- vis_01b.png → vis_01ba.png of vis_01bb.png

Hetzelfde geldt voor families 02–06. Iedere baby heeft een mini-kenmerk; de grote kenmerken en eventuele kostuums verschijnen bij het evolueren. Kleur, ogen en gezicht verbinden de familieleden. De zes eerder goedgekeurde karakterontwerpen zijn ongewijzigd in de eindvormen opgenomen; controle.json markeert ze.

## Voor Claude

1. Kopieer assets/vissen naar de statische afbeeldingsmap van GAMES4U.
2. Lees vissen.json. Pas alleen het padvoorvoegsel aan als de app een andere publieke map gebruikt.
3. Gebruik id voor relaties, niet de Nederlandse naam of de volgorde in de lijst. ouder en evoluties zijn ids. bestand is de exacte PNG-bestandsnaam.
4. Alle vissen kijken naar rechts. Spiegel ze horizontaal bij zwemmen naar links. Behoud de aspectverhouding; niet uitrekken.
5. Render baby, tussenstadium en eindstadium op toenemende lichaamsbreedte. De bronbestanden zijn masters op hogere resolutie dan de eerdere circa 512px-wens; ze zijn niet stilzwijgend verkleind. Gebruik dezelfde schaal per fase en houd rekening met lege marges. controle.json bevat het zichtbare lichaamskader bij alpha 220.
6. Fase, ouder en evoluties beschrijven de visuele stamboom. Er zijn geen prijzen, kansen, tijden, inkomen of zeldzaamheden verzonnen. Eerdere aannames over kweken, eieren en automatische tintvarianten zijn geen onderdeel van dit pakket.

## Beeldkwaliteit

De PNG's bevatten echte transparantie, geen getekend dambord. Sommige door de beeldgenerator geleverde afbeeldingen hebben een zachte gekleurde gloed langs de rand; die is onderdeel van de afbeelding, niet van een spelstatus of zeldzaamheid. De bestaande goedgekeurde eindvormen zijn bewust niet geretoucheerd. In het overzicht zijn alle randen op lichte en donkere ondergrond te bekijken. Bestanden zijn losse stilstaande illustraties, geen geanimeerde sprite sheets.

## Inhoud

- assets/vissen/: 42 PNG's
- vissen.json: namen en complete visuele relaties
- overzicht.html: visuele familiestambomen
- controle.json: afmetingen, alpha, lichaamskader, behoudsmarkering en checksums
- ontwerpplan.json: karakterbeschrijvingen en mini-kenmerken
- generatieprompts.json: gebruikte prompts voor de nieuwe beelden en bronvermelding van behouden beelden

Gemaakt met de ingebouwde beeldgenerator. Dit pakket omvat vissen; achtergronden, menu's, decoratie en spelcode zijn afzonderlijke onderdelen.

## Vastgelegde versie 1.0

Gebruik deze versie als vaste visuele basis voor Claude. De 42 ids en bestandsnamen blijven behouden. Nieuwe families beginnen vanaf vis_07; nieuwe uitbreidingen worden afzonderlijk geleverd met een bijgewerkte catalogus. Eindstadium 3 heeft nu geen volgende vorm. Een extra generatie is pas onderdeel van de app wanneer die expliciet wordt toegevoegd.

De namen zijn weergaveteksten en mogen later veranderen zonder de ids te veranderen. De afzonderlijke PNGs zijn statische masterbeelden; gebruik voor de webapp naar behoefte geoptimaliseerde afgeleiden en behoud de masters. De zes behouden eindvormen blijven exact zoals Rowan ze goedkeurde.
