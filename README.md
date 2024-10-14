# Oppgave om bilforsikring

### Oppgave 1
Jeg valgte å løse frontend-oppgaven. Kort forklaring: Jeg har forsøkt å gjenskape skissen så godt som mulig, og mocket litt fiktiv data slik at alle forsikringene har en beskrivelse. Forsikringene er sortert synkende etter pris. I tillegg har jeg sørget for at anbefalt-taggen dukker opp på en tilfeldig forsikring hver gang, men det er også mulig å angi den på bestemte forsikringer manuelt, dersom det er ønskelig. Klikker man på "Sammenlign dekninger" skal det vises litt tekst, som i en ferdig løsning ville inneholdt en sammenligning av de ulike forsikringene, f.eks. i form av en tabell.

#### Oppsett og kjøring av prosjekt:  
 Prosjektet er satt opp med Node.js (v22), installert fra [nodejs.org](https://nodejs.org/en). Teknologier brukt er TypeScript, React, CSS og HTML.  

For å installere og kjøre prosjektet, kjør følgende kommandoer i terminalen, i mappen "Bilforsikring":  
`npm install`  
`npm run dev`

Hvis nettsiden ikke åpner seg automatisk, kopier linken fra terminalen (som starter med http://localhost:..) og lim den inn i nettleseren.


### Oppgave 2 

Jeg gjør en antakelse om at løsningen er en del av et større system, der en bruker kanskje er logget inn, samt at brukeren senere skal fylle inn opplysinger for å motta et reelt forsikringstilbud.

Noen tiltak for å ivareta sikkerhet/personvern i løsningen:

- Dataminimering: Man bør kun samle inn personopplysninger som er nødvendige for å gi brukeren et tilbud om forsikring (f.eks. info om bilens registreringsnummer og modell, brukerens bosted, alder).
- Sikker datalagring og tilgang: Alle sensitive data som brukere legger inn eller som sendes via nettet, bør krypteres ved hjelp av HTTPS for å beskytte informasjonen mot avlytting og andre former for datatyveri. I tillegg bør man begrense tilgangen til personopplysninger til kun de som trenger det for å utføre sine arbeidsoppgaver (f.eks. ansatte som håndterer forsikringstilbud eller kundeservice).
- Personvernerklæring: Inkluder en tydelig personvernerklæring som forklarer hvordan innsamlede data brukes, lagres, og eventuelt deles med tredjepart. I tillegg bør brukerne få mulighet til å samtykke til bruk av ikke-nødvendige cookies, med klar informasjon om hvilke data som samles inn og hvorfor.
- Sletting av data: Det er viktig å implementere rutiner for sletting av persondata når brukeren ikke lenger trenger tjenesten. Dette kan for eksempel være hvis en bruker avslutter forsikringen, og dataene deres ikke lenger er nødvendige.
- Regelmessig oppdatering og patching: Hold programvaren og avhengighetene oppdatert for å beskytte mot kjente sikkerhetssårbarheter. 



### Oppgave 3 

Jeg har tatt utgangspunkt i retningslinjene til Tilsynet for universell utforming av ikt og WCAG-standarden for privat sektor. Ut fra dette har jeg plukket ut noen krav jeg mener er relevante i denne løsningen.


Korrekt bruk av HTML og semantisk struktur:  
- HTML tilgjengelighet: Ting skal være kodet som det ser ut som. For eksempel bør "Velg dekning" være en type header-tag, f.eks.`<h4>`, for å indikere at det er en overskrift, og radioknappene bør være av typen `<input type="radio">`, for å indikere at de er radioknapper. Dette vil bidra til at hjelpemiddelteknologier, som f.eks. skjermlesere kan navigere riktig gjennom innholdet.
- Man burde forsøke å unngå hyppig bruk av `<div>` og `<span>` da disse ikke har noen semantisk betydning, og dermed kan være vanskelig for hjelpemiddelteknologier å tolke.
- Man burde sikre at alle interaktive elementer, som radioknapper, har riktig definert navn, rolle og verdi. 
- Hvis et element er viktig for interaksjonen, men det ikke har synlig tekst, kan man bruke aria-label eller aria-labelledby for å gi en beskrivelse. 
- Det er viktig å unngå HTML-syntaksfeil som kan føre til problemer med parsing eller feilaktig visning av innholdet.


Logisk struktur:
- Siden bør ha en meningsfull struktur med tydelige og beskrivelser som hjelper brukeren å forstå innholdet. Hvert forsikringsalternativ har f.eks. en kort beskrivelse som forklarer innholdet i valget. Dette hjelper brukeren til å forstå hva de forskjellige forsikringene dekker.


Tastatur: 
-  Alle funksjoner og interaktive elementer på siden må kunne nås og aktiveres ved hjelp av tastaturet. Fokusrekkefølgen skal være logisk, og det skal være en synlig fokusindikator som gjør det enkelt for brukeren å vite hvor på siden de er.


Kontrast og lesbarhet:
- Minimum kontrastforhold: Tekst og bakgrunn skal ha et minimum kontrastforhold på 4.5:1 for å sikre at teksten er lesbar for brukere med nedsatt syn. 
- Skalerbarhet av tekst: Brukerne skal kunne øke tekststørrelsen opptil 200 % uten at innhold eller funksjonalitet går tapt.

