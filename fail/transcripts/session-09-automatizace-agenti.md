# Session 9 – Automatizace a AI Agenti

**Řečník:** Filip Dřímalka (+ ukázky od účastníků: Petr Vávra, Stanley K)
**Program:** Future AI Leader (FAIL)
**Datum:** 7. května 2026
**Délka:** cca 1:31 hod.

---

## Rychlé shrnutí

Session 9 je věnována praktické automatizaci a AI agentům – od jednoduchých nástrojů v chatovacích aplikacích až po pokročilé no-code/low-code platformy a vibe coding. Filip Dřímalka vysvětluje, že automatizace má dvě základní formy: dávkové zpracování (batch processing) a průběžnou automatizaci, přičemž klíčem k úspěchu je nejprve vyladit proces ručně a teprve pak ho automatizovat. Ukazuje konkrétní scénáře z vlastní praxe i ukázky od účastníků, kteří automatizují zápisy ze schůzek, třídění e-mailů, vytěžování faktur a sledování zásilek. Hlavní myšlenka: automatizace není jen zjednodušení stávajících procesů, ale příležitost vytvářet nové hodnoty, produkty a služby. Každý tým by měl mít alespoň jednoho „orchestrátora" – člověka schopného stavět automatizace pro ostatní.

---

## Klíčová témata

- Dvě formy automatizace: **batch processing** (hromadné zpracování) vs. **průběžná automatizace** (trigger-based)
- AI agenti jako nová úroveň automatizace – plánování, rozhodování, zpětná vazba, paměť
- Přehled nástrojů: asistenti/rutiny v chatu, specializované aplikace, no-code nástroje (Relay, Make, n8n), vibe coding, computer use
- Principy před automatizací: nejprve vyladit proces ručně, zjednodušit, pak automatizovat
- Novinky: Claude „dreaming" (noční revize sessions), Microsoft Agent 365, Subquadratic model (12M token kontext)
- České platformy: Duvo AI, Kebula – doporučeno pro středně velké a větší firmy
- Framework pro výběr nástroje: jednoduché = asistent/poloautomatizace; propojení systémů = low-code; komplexní rozhodování = agentské platformy
- Role „orchestrátora" v týmu – člověk stavějící automatizace pro ostatní
- Příklady z praxe účastníků: záznamy z porad, třídění e-mailů, vytěžování faktur, sledování zásilek

---

## Klíčové myšlenky

### 1. Automatizace jako stav mysli
Cokoliv děláte opakovaně, mělo by vám naskakovat: „Nemohl bych si toto uložit jako asistenta, skript nebo pravidlo?" Drobné úspory času se kumulují – Netflix denně ušetří 195 let lidského života jen tlačítkem „přeskočit intro".

### 2. Nejprve manuálně, pak automatizovat
Klíčový framework: nejprve proces vyladit ručně (ideálně i s pomocí AI na analýzu a zjednodušení), teprve pak stavět automatizaci. Pokud stavíte agenta na zákaznickou podporu, začněte analýzou předchozích e-mailů a odpovědí – vytvořte znalostní bázi, styl komunikace, principy. Pak teprve automatizace.

### 3. Batch processing vs. průběžná automatizace
- **Batch**: spustíte jednorázově, zpracujete stovky nebo tisíce záznamů najednou (500 zákazníků → 500 personalizovaných doporučení)
- **Průběžná**: běží automaticky na základě času (každý den v 8:00) nebo akce (přišel e-mail → udělej toto)

### 4. Agentské workflow jako nová norma
Klasická automatizace = pevné kroky, deterministická. Agentský workflow = agent dostane vstup, sám si naplánuje kroky, používá různé nástroje, vyhodnotí výsledek. Příklad: přijde poptávka → agent zkontroluje CRM, prohledá web, přiřadí zodpovědnou osobu, navrhne odpověď.

### 5. Vibe coding jako nejflexibilnější automatizace
Pro většinu lidí je nejjednodušší nechat AI napsat skript nebo mikroaplikaci. Příklady: generování certifikátů, sdílení prezentací přes odkaz, příkaz `/upload` v Cursoru. Výhoda: flexibilita, rychlost, bez nutnosti udržovat konektory.

### 6. Nová přidaná hodnota, ne jen zjednodušení
Skutečná hodnota automatizace s AI není jen v úspoře času na stávajících procesech, ale v možnosti vytvářet nové produkty a služby. Příklady: indický freelancer s personalizovanými nabídkami pro 100 000 eshopů, rádio Slop (AI-generované zprávy jako písničky), lokální podcast o dění ve městě.

### 7. Manažerská role: vytvořit prostředí pro experimentování
Firmy, kde je vše zakázáno (nelze otevřít ani blogový článek o AI), ztrácejí obrovský náskok. Manažeři by měli zajistit přístup k nástrojům, podporovat experimentování a sami být příkladem (lead by example).

### 8. AI jako pomocník při stavbě automatizací
AI dokáže navrhnout celou automatizaci, napsat JSON pro import do Make/n8n, debugovat pomocí screenshotů. Petr Vávra: „Nemusel jsem to úplně znát – jen jsem vnímali logiku a tu si dokázal odladit."

---

## Praktické tipy

### Pro jednotlivce
- **Nejjednodušší start**: nastavte si v chatovacím nástroji „Scheduled task" nebo „Routine" – např. každý den v 7:45 zkontroluje e-mail a kalendář a pošle souhrn důležitých věcí
- **Poloautomatizace**: uložte si asistenta s prompty, které používáte opakovaně; copy-paste je v pořádku jako první krok
- **Iterace**: začněte jednoduše, pak přidávejte kroky. Nečekejte na perfektní řešení.
- **Debugování**: když něco nefunguje, udělejte screenshot a pošlete do chatu – AI poradí, co upravit
- **Import přes JSON**: Claude/GPT může napsat celou automatizaci v JSON formátu, který pak importujete do Make nebo n8n
- **Koučovací otázka**: „Kdybych měl desetkrát víc práce, co bych dělal?" – přinutí přemýšlet na systémové úrovni
- **Revize**: pravidelně revidujte automatizace; nechat AI projít exportované JSON popis automatizací a identifikovat, co lze zrušit

### Pro manažery a týmové lídry
- Zajistěte každému týmu přístup alespoň k jednomu kvalitnímu AI nástroji
- Mějte v týmu alespoň jednoho „orchestrátora" – člověka se schopností stavět vibe codingové nebo no-code automatizace
- Nastavte kulturu sdílení: co kdo zautomatizoval, co fungovalo, co ne
- Standardizujte automatizace, které potřebují všichni (např. zápisy z porad z audio záznamu)
- Při výběru platformy: pozvěte si Duvo AI a Kebula na demo, udělejte pilotní projekt v obou
- Pokud zvažujete n8n: lze provozovat on-premise, vhodné pro korporátní prostředí jako alternativa k Power Automate / Copilot Studio

---

## Příklady z praxe

### Příklad 1: Indický freelancer (2023)
Stáhl 100 000 stránek e-shopů na Shopify. Pro každý e-shop nechal AI vymyslet personalizovanou appku (pro obchod se zvířaty = aplikace na sledování zdraví mazlíčků). Rozeslal nabídky s nebývale vysokou konverzí. Ukázka: AI umožňuje hromadnou personalizaci v dosud nemožném měřítku.

### Příklad 2: Relevance AI – agent po registraci
Po registraci Filipa do aplikace přišel e-mail od agenta: analyzoval LinkedIn, web, knihu, rozhovory – a sestavil ukázku personalizovaného produktu. Celé to je jen propojení: web research → sumarizace → generování výstupu.

### Příklad 3: Rádio Slop
České AI rádio: aktuální zprávy z internetu → sumarizace → generování písničky v Suno AI → automatické vysílání. Jiní autoři dělají podobně lokální podcasty o amerických městech a budují na tom byznys.

### Příklad 4: Petr Vávra – automatizace zápisů ze schůzek (n8n)
Nota nahraje schůzku → záznam se hodí na cloud → n8n to rozřeže, pošle na AI, udělá strukturovaný zápis → pošle notifikaci. Celé napsal Claude v JSON, Petr jen importoval a laděl. Dříve absolvoval kurz na Make, nedával mu smysl – s pomocí AI to zvládl sám.

### Příklad 5: Petr Vávra – vytěžování faktur (n8n, 6 fází)
Probíhající projekt: faktura → vytěžení dat → zápis do tabulky → (plánovaný) automatický import přes API do účetního programu. Ve 3. ze 6 fází.

### Příklad 6: Stanley K – sledování zásilek dopravců (n8n, on-premise)
Workflow: zkontroluje konektory → normalizuje výstup → sub-workflow per dopravce (Dachser, PPL apod.) → stáhne status přes API → zapíše do Sheetu. Claude se napojí přímo přes n8n API token a opravuje workflow online. Výsledek: plně automatické, Stanley dostane jen e-mail, pokud je problém.

### Příklad 7: Filip – denní briefing z e-mailu
Scheduled task v Claude: každý den v 7:45 zkontroluje e-mail a kalendář, přeskočí newslettery, vypíše důležité e-maily s označením urgentních. Prompt napsal Claude, Filip jen iteroval.

### Příklad 8: Filip – personalizovaná doporučení pro účastníky FAIL
Po každém modulu: přepis + aha momenty → playbook → AI vygeneruje 5–10 osobních doporučení pro každého účastníka → iterace přes API → rozeslání. Poloautomatizované kvůli kontrole kvality.

### Příklad 9: Amy – denní AI update do Slacku
Automatická zpráva od „Amy" (AI asistentky) každý den o tom, co se stalo v produktu. Cíl do budoucna: přidat analýzu konverzací s doporučeními ke zlepšení + souhrn zpětné vazby od klientů z internetu.

---

## Nástroje a technologie

| Nástroj | K čemu | Poznámka |
|---|---|---|
| **Claude / ChatGPT / Gemini** – Scheduled Tasks / Routines | Jednoduché automatizace přímo v chatovacím nástroji (denní briefing, sumarizace e-mailů) | Nejjednodušší start, bez nutnosti dalších nástrojů |
| **Relay App** | Vizuální no-code automatizace; jednoduché scénáře, batch processing, e-mail třídění | FAIL účastníci mají kredity; ideální pro začátečníky |
| **Make** (dříve Integromat) | Pokročilejší vizuální automatizace, tisíce konektorů | Původně česká firma (Integromat); pro středně složité scénáře |
| **n8n** | Open-source automatizační platforma; on-premise provoz | Ideální pro korporátní prostředí, alternativa k Power Automate; konektory na stovky aplikací |
| **Power Automate / Copilot Studio** | Microsoft-native automatizace a agent platforma | Vhodné v Microsoft 365 prostředí |
| **Canva** (automatizace) | Hromadné generování grafických materiálů (certifikáty, prezentace) | Má nativní funkci pro automatizované generování |
| **Cursor / Claude Code / Codex** | Vibe coding – programování automatizací a mikroaplikací | Pro Filipa nejpreferovanější cesta; napíše skript nebo celou appku |
| **Relevance AI** | Platforma pro stavbu AI agentů s předpřipravenými nástroji | Příklad personalizace po registraci |
| **Duvo AI** | Česká agentská platforma; napojení na interní data firem | Doporučeno pro pilotní projekty ve středně velkých firmách |
| **Kebula** | Česká agentská platforma | Doporučeno souběžně s Duvo AI pro porovnání |
| **Hermes** (framework) | Framework pro pokročilé agenty; integrace s Claude Code / Cursor | Použití: přidat odkaz z dokumentace do Cursoru |
| **Mastra** | Framework pro rychlé stavění AI agentů; přístup k webu a interním systémům | Kolega Tom Paulus: první agent za 10 minut od nápadu |
| **Nota** | Nahrávání schůzek; integrace s n8n pro automatické zpracování zápisů | Použito Petrem Vávrou |
| **Suno AI** | Generování písniček / audia | Použito v projektu Rádio Slop |
| **OpenRouter / OpenAI API** | Přidání vlastního API klíče do automatizačních nástrojů (Make, n8n) | 10 USD stačí na experimenty; umožňuje volit konkrétní modely |
| **Perplexity Computer** | Computer Use / Browser Mode – AI kliká za uživatele | Zatím drahé a pomalé; perspektivní téma |
| **Subquadratic** (model) | 12M token kontextové okno – výzkumný lab | Zatím experimentální; implikace pro dlouhodobé agentské úlohy |
| **Microsoft Agent 365** | Firemní platforma pro sledování a správu agentů v organizaci | Nová platforma; ukazuje trend „agent governance" |

---

## Citace

> „Automatizace je stav mysli. Cokoliv děláte opakovaně, mělo by vám naskakovat jako Ohio Only."

> „Největší hodnota automatizace s AI není v tom, že si zjednodušíme stávající procesy. Je to v tom, že dokážeme vymyslet nové produkty a nové služby."

> „Já osobně si myslím, že největším nebezpečím pro firmy není AI, ve kterém bych dal nějaký dokument. Ale je to AI, které ve firmách nemáme."

> „Nemusel jsem to úplně znát – jen jsem vnímal nějakou logiku a tu si dokázal odladit." *(Petr Vávra o práci s n8n pomocí Claude)*

> „Klíčová otázka, kterou si manažeři musíme klást: jak umožnit lidem, aby automatizace a agenty mohly stavět, měli je napojené na interní systémy a používali kvalitní nástroje."

---

## Pojmy

| Termín | Vysvětlení |
|---|---|
| **Batch processing** | Hromadné zpracování – spustíte jednorázově pro velké množství záznamů (stovky/tisíce). Neběží průběžně, ale „na zavolání". |
| **Průběžná automatizace** | Automatizace spouštěná časem (každý den v 8:00) nebo událostí (přišel e-mail → zpracuj). Běží samo bez zásahu. |
| **AI agent** | Systém, který dostane cíl, sám naplánuje kroky, použije nástroje (web, databáze, API), vyhodnotí výsledek a případně opakuje. Má krátkodobou i dlouhodobou paměť. |
| **Agentský workflow** | Způsob organizace práce agenta: vstup → plánování → použití nástrojů → výstup → sebehodnocení. Oproti klasickému workflow je dynamické a nedeterministické. |
| **Orchestrátor** | Člověk (nebo systém) koordinující více agentů nebo automatizací; v týmovém kontextu: člověk, který staví automatizace pro ostatní. |
| **Low-code / No-code** | Nástroje na stavbu automatizací bez programování (Make, n8n, Relay, Power Automate). Vizuální skládání kroků. |
| **Vibe coding** | Programování za pomoci AI – popisuješ, co chceš, AI napíše kód. Výsledkem je skript nebo celá aplikace. |
| **Computer Use / Browser Mode / Operator** | Schopnost AI klikat na obrazovce za uživatele – analyzuje obrazovku a provádí akce. Zatím experimentální a drahé. |
| **JSON import** | Standardizovaný formát souboru popisující strukturu automatizace. AI napíše JSON → importujete do Make/n8n → základ automatizace je hotový. |
| **Poloautomatizace** | Kombinace manuální práce a AI: uložíte si asistenta, ručně spustíte, zkontrolujete výstup. Mezistupeň před plnou automatizací. |
| **Dreaming (Claude)** | Nová funkce Anthropic: v době nečinnosti agent provede revizi proběhlých sessions, extrahuje vzorce a principy, uloží je do paměti – automatické zlepšování systémů. |
| **Guard Rails** | Bezpečnostní mechanismy v agentských platformách – omezení, která brání agentovi dělat nežádoucí akce. |
| **Knowledge Base** | Znalostní báze pro agenta – strukturovaná sbírka informací (předchozí e-maily, odpovědi, principy komunikace), ze které agent čerpá při práci. |
| **On-premise** | Provoz softwaru na vlastních serverech firmy (nikoli v cloudu třetí strany). Relevantní pro n8n v korporátním prostředí. |

---

## Domácí úkoly

Filip zmínil, že po sessioni přijde v portálu:

1. **Idea Files** – návody/šablony pro zprovoznění konkrétních automatizací nebo agentů ve vašich nástrojích
2. **100 nápadů na automatizaci** – rozděleno do kategorií (po 10), vytvořeno analýzou všech přednášek, konverzací a projektů FAIL
3. **Personalizovaná doporučení** – Filip pošle každému doporučení, jaký nástroj je nejvhodnější pro jejich projekty a situaci
4. **Vlastní úkol**: Zkuste si nastavit jednoduchou automatizaci – nejjednodušší cesta: Scheduled task / Routine přímo v Claude nebo ChatGPT (denní briefing e-mailů a kalendáře)
5. **Pro pokročilé**: Zaregistrujte se do Relay nebo Make/n8n a zkuste importovat JSON automatizaci vytvořenou Claude

---

## Propojení s dalšími moduly

| Modul | Propojení |
|---|---|
| **Session 1 – AI First Mindset** | Automatizace jako logický důsledek AI-first myšlení; „přemýšlej v systémech" |
| **Session 2 – Nástroje AI** | Chatovací nástroje (Claude, ChatGPT) nyní rozšířeny o Scheduled Tasks; vibe coding nástroje (Cursor, Codex) jako základ automatizací |
| **Session 3 – Symbióza s AI** | Poloautomatizace jako forma symbiózy – člověk kontroluje, AI exekutuje |
| **Session 4 – Druhý mozek** | Automatizace obohacování druhého mozku (zápisy, záznamy, analýzy konverzací) |
| **Session 5 – Analýza dat** | Batch processing na analýzu strukturovaných dat; homeúkol z minulého týdne (analýza financí) |
| **Session 10 (Grand Finále)** | Budoucnost vás, vašich týmů a firem v době AI; jak se připravit sami sebe a svoji roli; jak budou vypadat produkty a služby |

---

*Přepis zpracován na základě nahrávky ze dne 7. května 2026. Strukturovaný souhrn – program Future AI Leader (FAIL), modul 9.*
