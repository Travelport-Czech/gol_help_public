# Session 6 – Práce na projektech v době AI

**Řečník:** Filip Dřímalka
**Program:** Future AI Leader (FAIL) – 11. běh
**Datum:** 17. dubna 2026 (šestá session programu)

---

## Rychlé shrnutí

Šestá session ukazuje, jak aplikovat vše z předchozích modulů (symbióza, druhý mozek, tvorba obsahu) na reálnou práci na projektech. Filip definuje nové principy projektového řízení v době AI: malé týmy s AI jsou efektivnější než velké korporace, všichni se stávají „buildery" (tvůrci end-to-end), a tradičně dvoutýdenní práce může proběhnout za hodinu. Session obsahuje praktická sdílení od účastníků (David Lorincz – plně automatizovaná tvorba reklamních kreativ s agenty; Jakub Šíma – přerod z prokrastinace k funkčnímu systému za jeden víkend). Klíčovým výstupem je Filipův nový prompt **AI Work Breakdown Structure** – moderní způsob plánování projektů, kde AI rozpadne projekt na podúkoly, odhadne čas a navrhne prompty pro každý krok.

---

## Klíčová témata

- Principy nové éry řízení: malé týmy + AI vs. velké korporace
- Všichni jsme „Builders" – end-to-end kompetence díky AI
- Pět fází práce na projektech s AI: příprava, prototyping, realizace, compound, spolupráce
- AI Work Breakdown Structure – nový prompt na plánování projektů
- Deep Research jako základ přípravy každého projektu
- Prototyping: první verze rychle, zpětná vazba dřív
- Transformační workflow – jeden výstup jako vstup pro další
- Compound Engineering při projektové práci
- Spolupráce v týmu: BUF (Brutálně Upřímný Feedback), Idea File, zprávy pro AI-enabled kolegy
- Sdílení účastníků: David Lorincz (agentní tvorba reklam), Jakub Šíma (víkendová transformace)
- Novinky v FAIL platformě: MCP server, GitHub integrace, komunita Budoucnost Nepráce

---

## Klíčové myšlenky

### Malé týmy + AI = budoucnost
Zákon alometrie: čím větší organismus, tím více energie potřebuje na chod. Zákon komunikace: čím více spojení mezi lidmi, tím víc komunikační overhead. AI toto narušuje – malé týmy s AI jsou daleko efektivnější než velké firmy. Příklad: Basecamp (80 zaměstnanců) vs. Asana, Monday, Slack (1 500–2 500 zaměstnanců) se srovnatelnými produkty.

### Všichni jsme Builders
Hranice profesí se rozpouštějí. Díky AI dokáže každý udělat první verzi webu, prezentace, aplikace nebo analýzy sám. Petr Šimeček (Kvído): „Už se nehiruje pro specifické dovednosti, ale pro specifický mindset." Klíčová dovednost: práce end-to-end – od záměru po finální výstup bez nutnosti čekat na ostatní.

### Pět fází projektové práce s AI

**1. Příprava**
Deep Research na začátku každého projektu: AI prohledá stovky zdrojů, sestaví analýzu, pak se o ní bavíte a navrhujete řešení. Není třeba být IT odborník – AI vysvětlí krok za krokem, co a jak udělat.

**2. Prototyping**
„Jakmile lidem něco ukážu, reakce je úplně jiná než když vysvětluji." Prototyp může být cokoli: prezentace, web, wireframe, schéma automatizace. Přicházejte s realizovanými nápady – zkracuje délku zpětných cyklů a zlepšuje výsledky.

**3. Realizace – Transformační Workflow**
Krok za krokem, jeden výstup jako vstup pro další. Příklad: nahrávka hovoru s klientem → přepis → zadání pro designéra → zadání pro vývojáře → průvodní e-mail → prezentace. AI přebírá aktivní čas: zadáte Deep Research za minutu, za 30 minut se vrátíte k hotovému výstupu.

**4. Compound Engineering**
Cokoliv udělám, poprosím AI o standardizaci: „Vytvoř z toho agenta/pravidlo/dovednost." Systém se sám zlepšuje. Příklad: po každém dokončeném projektu nechte AI aktualizovat šablonu nebo prompt pro příští použití.

**5. Spolupráce**
- **BUF (Brutálně Upřímný Feedback)**: „Proč ses ptal mě místo Cursoru?" – aktivní kultura v týmu, kdy si navzájem připomínáme lepší způsob práce.
- **Idea File + zprávy pro AI-enabled kolegy**: místo dlouhého vysvětlování pošlete Idea File a nechte AI kolegy pomoci s realizací.
- **Uvědomělost při komunikaci**: kolegové budou vaše zprávy dávat do své AI – pište tak, aby AI pochopila záměr.

### AI Work Breakdown Structure (nový prompt)
Vychází z konceptu Work Breakdown Structure (WBS). Filip nazývá svůj přístup „AI WBS" nebo „Kalibrovaný plán". Funguje: popíšete projekt → AI se zeptá na klíčová rozhodnutí → rozpadne projekt na podúkoly → odhadne čas → označí, zda to dělá AI, hybrid nebo člověk → navrhne konkrétní prompty pro každý krok. Prompt dostupný v FAIL portálu i na veřejné stránce.

### Změny v pojetí projektového času
- **Aktivní čas uživatele**: dřív jsem čekal, až někdo něco dodá. Dnes zadám Deep Research za minutu, jdu na schůzku a vrátím se k hotovému výstupu.
- **Chunking Bias**: dřív jsem musel úkol rozdělit na kroky kvůli vlastní kapacitě. Dnes AI rozpadne úkol sama a udělá více kroků v jedné session.
- **AI vs. člověk není správné srovnání**: i když něco dělám já, dělám to ve spolupráci s AI. Klíčový rozdíl je mezi lidmi – kdo AI používá a kdo ne. Stejný úkol: bez AI 3 hodiny, s AI 20 minut.

### Sdílení účastníků

**David Lorincz** – agentní tvorba reklamních kreativ
Agent v Cursoru + Obsidian jako databáze (brand guidelines, fotky produktů, reference, šablony):
- Načte landing page (přes proxy při blokaci Cloudflair)
- Navrhne koncepty reklam, čeká na schválení
- Vygeneruje obrázky (Nanobanana API)
- Sestaví reklamy v React aplikaci podle grafické šablony
- Nahraje přímo do Meta s cílením
- Pro 17 B2B služeb vytvořil 51 kreativ automaticky; videokreativy s animacemi přes Kling + Remotion

**Jakub Šíma** – víkendová transformace
Čtyři týdny prokrastinace → 36 hodin intenzivní práce → funkční systém:
- Přesunul všechny poznámky do Obsidianu v Markdown
- Postavil nástroj na automatické zápisy z konzultací (pro sebe i klienty)
- Postavil support chatbota s 2,25 lety dat ze servisních tiketů
- Klíčový insight: „Věci, o kterých jsem myslel, že budou trvat roky, jsem postavil za víkend."

---

## Praktické tipy

- **Začněte Deep Researchem** – u každého nového projektu nebo strategické otázky nejdřív prohledejte internet s AI; výstup pak použijte jako základ pro diskuzi.
- **Dávejte si extrémně krátký čas** – „Hackatonový sprint": cokoliv odkládáte týdny, zkuste s týmem udělat za 3 hodiny.
- **Start, Stop, Continue** – pravidelně si jako tým říkejte, co začít dělat, v čem pokračovat a co přestat dělat.
- **Elon Muskův D-algoritmus**: 1. zpochybnit (je to vůbec potřeba?), 2. zjednodušit, 3. automatizovat. Neautomatizujte hned.
- **BUF kultura** – aktivně si v týmu říkejte: „Proč jsi to nedal AI?" Nepříjemné, ale jedinou cestou k posunu.
- **Popište každý projekt** – první krok u každého projektu: popsat ho v dokumentu za pomocí AI. Pak vše ostatní (e-mail, zadání, reklama) vychází z tohoto popisu.
- **AI zpráva pro kolegy** – po konverzaci s AI nechte napsat zprávu, která funguje jak pro člověka, tak pro AI příjemce.
- **Zpomalit, abyste zrychlili** – citace Jiřího Halouska (Iresoft): vyhrazovat čas na ostření sekery; týmové AI hackathony na pořádek v systémech.
- **Deep Work s AI v týmu** – vyhradit jednou za 14 dní celý den na AI práci: úklid druhého mozku, budování nových agentů, zlepšování procesů.

---

## Nástroje a technologie

| Nástroj | Kategorie | Poznámka |
|---|---|---|
| **Cursor** | Programování + agenti | Agentní práce se složkami; nejlepší pro end-to-end projekty |
| **Claude Cowork** | Programování + chat | Práce přímo se soubory a složkami; komplexní kontext |
| **Deep Research** | Příprava | Dostupné ve všech hlavních chatovacích nástrojích |
| **Obsidian** | Druhý mozek | Databáze projektů, brand guidelines, šablon; napojitelný na AI |
| **Linear** | Projektové řízení | Nová generace: úkoly lze zadávat i AI agentům, nejen lidem |
| **Kling** | Video | Generování videí; animace produktových fotek |
| **Remotion** | Animovaná grafika | Animace statistik a obsahu přes kód |
| **Nanobanana** | API pro obrázky | Generování obrázků v agentním workflow |
| **Relay** | Automatizace | Stavba automatizací navazujících na ručně vyladěné procesy |
| **MCP server** | Integrace | Napojení FAIL dat na Claude, Cursor, ChatGPT a další nástroje |
| **GitHub (FAIL)** | Integrace | Automatická synchronizace FAIL materiálů do vašeho repozitáře |
| **Slek (interní agent Amy)** | Agenti | Agent napojený na firemní systém; odpovídá na dotazy a ovládá systém |

---

## Citace

> „Musíme zpomalit, abychom mohli zrychlit." – Jiří Halousek, Iresoft

> „Nejenom, že to bylo málo, ale pro mě mega. Věci, o kterých jsem myslel, že budou trvat roky, jsem základy postavil za víkend." – Jakub Šíma

> „Pokud pořád jedeme pondělí–pátek, e-maily, to-do list, a nezastavíme se a nebavíme se s týmem o tom, jak bychom to mohli dělat jinak, ta transformace AI nikdy neproběhne."

> „Neautomatizujte hned. Nejdřív vylaďte ručně – dáte ručně do AI, vyladíte prompt, zkontrolujete výstup – a teprve pak automatizujte."

---

## Pojmy

| Pojem | Vysvětlení |
|---|---|
| **AI Work Breakdown Structure** | Filipův prompt/metoda na rozpad projektu: podúkoly, časové odhady, role AI vs. člověka, prompty pro každý krok |
| **Transformační Workflow** | Sekvence kroků, kde každý výstup je vstupem pro další; řetězení AI výstupů |
| **Compound Engineering** | Každý dokončený výstup standardizovat a uložit jako šablonu/agenta/pravidlo pro opakované použití |
| **Builder** | Člověk schopný tvořit end-to-end (od záměru po finální výstup) díky AI; nový základní pracovní profil |
| **BUF** | Brutálně Upřímný Feedback – aktivní týmová kultura připomínání si lepšího způsobu práce s AI |
| **Idea File** | Strukturovaný dokument (záměr + kontext) pro přenos know-how kolegům; hodí se do AI |
| **Aktivní čas uživatele** | Čas, kdy člověk aktivně pracuje na úkolu vs. čeká; AI zkracuje aktivní čas na minimum |
| **Chunking Bias** | Tendence dělit úkoly na kroky kvůli lidské kapacitě; AI toto překonává (dělá více kroků najednou) |
| **Kalibrovaný plán** | Plán projektu s AI: kratší, realistický, zohledňující AI asistenci; méně zbytečných kroků |
| **Princip alometrie** | Čím větší organismus (firma), tím více energie na chod; AI to narušuje ve prospěch malých týmů |
| **D-algoritmus** | Elon Muskův postup: 1. zpochybnit, 2. zjednodušit, 3. optimalizovat, 4. automatizovat, 5. škálovat |
| **Long Running Agents** | Agenti schopni pracovat na komplexním úkolu od začátku do konce autonomně; zatím primárně v programování |
| **MCP (Model Context Protocol)** | Standard pro napojení AI na externí systémy (viz také Session 4) |

---

## Domácí úkoly / Úkoly

- Vyzkoušejte **AI Work Breakdown Structure** prompt (dostupný v FAIL portálu) na jednom svém aktuálním projektu.
- Nastavte si s týmem **BUF pravidlo** – domluvte se, že si budete připomínat, kdy bylo možné použít AI a nepoužilo se.
- Zkuste **Hackatonový sprint**: vyberte jeden balvan (odkládaný projekt) a dejte si na něj 3 hodiny.
- Popište jeden váš aktuální projekt v dokumentu za pomocí AI (záměr, cíle, kontext) – základ pro veškerou další práci.
- Vyplňte dotazník v FAIL portálu – dostanete personalizovaná doporučení pro každou ze 5 fází projektové práce.
- Přihlaste se na dobrovolné speciální session: AI v Microsoft 365 (středa) a AI v Google Workspace (čtvrtek).
- Příští session: Automatizace – napojení systémů, které používáte, na AI.

---

## Propojení s dalšími moduly

- **Session 2 (Nástroje AI)** – programovací nástroje (Cursor, Claude Code) jsou klíčové pro end-to-end projektovou práci
- **Session 3 (Symbióza s AI)** – transformační workflow je přímou aplikací symbiózy: iterace, zpětná vazba, delegace
- **Session 4 (Druhý mozek)** – bez dobrého druhého mozku nelze efektivně pracovat na projektech; agent potřebuje kontext
- **Session 5 (Tvorba obsahu)** – každý projektový výstup (prezentace, web, nabídka) využívá nástroje tvorby obsahu
- **Budoucí modul (Automatizace)** – napojení nástrojů z projektů na automatizaci; přechod od ručního k agentnímu workflow

---

*Zpracováno ze záznamu šesté session programu Future AI Leader (17. dubna 2026)*
