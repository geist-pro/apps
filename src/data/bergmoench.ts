// All copy of the Bergmönch page, English and German. The page component (src/components/BergmoenchPage.astro)
// only lays it out. Claims here describe what the released build does; check them against the app before changing.
import { bergmoenchLinks as L } from './apps';

type Feature = { title: string; text: string };
type Ref = { label: string; href: string };
type Row = { what: string; does: string; why: string; refs?: Ref[] };

// Sources for the Why table. Peer-reviewed, well-cited papers only; each was checked against its abstract.
const doi = (id: string) => `https://doi.org/${id}`;
const P = {
  roediger2006: { label: 'Roediger & Karpicke 2006, Psychological Science', href: doi('10.1111/j.1467-9280.2006.01693.x') },
  karpicke2008: { label: 'Karpicke & Roediger 2008, Science', href: doi('10.1126/science.1152408') },
  cepeda2006: { label: 'Cepeda et al. 2006, Psychological Bulletin', href: doi('10.1037/0033-2909.132.3.354') },
  dunlosky2013: { label: 'Dunlosky et al. 2013, Psychological Science in the Public Interest', href: doi('10.1177/1529100612453266') },
  cepeda2008: { label: 'Cepeda et al. 2008, Psychological Science', href: doi('10.1111/j.1467-9280.2008.02209.x') },
  dunlosky2012: { label: 'Dunlosky & Rawson 2012, Learning and Instruction', href: doi('10.1016/j.learninstruc.2011.08.003') },
  hanus2015: { label: 'Hanus & Fox 2015, Computers & Education', href: doi('10.1016/j.compedu.2014.08.019') },
} satisfies Record<string, Ref>;
const benchmark = (label: string): Ref => ({ label, href: 'https://github.com/open-spaced-repetition/srs-benchmark' });
type Download = { platform: string; title: string; note: string; href?: string; cta: string };

export type Copy = {
  lang: 'en' | 'de';
  path: string;
  otherPath: string;
  otherLabel: string;
  title: string;
  description: string;
  crumbs: [string, string];
  kicker: string;
  claim: string;
  lede: string;
  name: string;
  nameMore: string;
  nameTitle: string;
  nameText: string[];
  nameLink: Ref;
  refsLabel: string;
  cta: { apk: string; testflight: string; testflightSoon: string; source: string };
  demo: { caption: string; show: string; again: string; questionAlt: string; answerAlt: string };
  featuresTitle: string;
  features: Feature[];
  whyTitle: string;
  whyIntro: string;
  whyHead: [string, string, string];
  why: Row[];
  whyMore: string;
  decksTitle: string;
  decksIntro: string;
  decks: { name: string; meta: string; href: string }[];
  fixTitle: string;
  fixSteps: string[];
  fixNote: string;
  getTitle: string;
  downloads: Download[];
  openTitle: string;
  open: string[];
  privacy: string;
};

export const en: Copy = {
  lang: 'en',
  path: '/bergmoench/',
  otherPath: '/bergmoench/de/',
  otherLabel: 'Deutsch',
  title: 'Bergmönch',
  description: 'Bergmönch is a free, open-source flashcard app for iPhone, iPad and Android. It opens Anki decks, plans your reviews and keeps everything on your device.',
  crumbs: ['Apps', 'Bergmönch'],
  kicker: 'Flashcards · iPhone, iPad, Android · Beta',
  claim: 'Flashcards for people with lectures to get through.',
  lede: 'Bergmönch opens Anki decks and plans your reviews. You study a few minutes a day, and the cards you find hard come back sooner than the ones you know. It is free, open source, and works without an account.',
  name: 'The name comes from a Harz mining legend: a ghostly monk who walks the tunnels with a lamp.',
  nameMore: 'More about the name',
  nameTitle: 'The name',
  nameText: [
    'The Bergmönch, the “mountain monk”, is a spirit from the mining legends of the Harz, the mountains around Clausthal. The Brothers Grimm wrote him down in their German Legends as “Der Bergmönch im Harz”. He is a giant in a monk’s black cowl who walks the tunnels with a pit lamp. He is not safe company: he punishes miners who curse, whistle or slack, and he helps the ones who work honestly.',
    'We took the name for the lamp. In the legend, a miner whose light is about to go out is given oil from the monk’s lamp. That oil does not run low, for years, as long as the miner tells nobody where it came from. A flashcard app has a similar job: to keep what you learned from going out.',
    'It also fits the place. TU Clausthal began as a mining school, and the old mines the legend talks about lie all around the town.',
  ],
  nameLink: { label: 'Bergmönch on Wikipedia', href: 'https://en.wikipedia.org/wiki/Bergm%C3%B6nch' },
  refsLabel: 'Sources',
  cta: { apk: 'Get the Android APK', testflight: 'Join the TestFlight beta', testflightSoon: 'TestFlight: coming soon', source: 'Source on GitHub' },
  demo: {
    caption: 'A card from the Programmieren deck, as the app shows it.',
    show: 'Show answer',
    again: 'Back to the question',
    questionAlt: 'Bergmönch on an iPhone showing a question card with the button “Show answer”.',
    answerAlt: 'The same card with its answer and the grading buttons.',
  },
  featuresTitle: 'What it does',
  features: [
    { title: 'Your Anki decks, as they are', text: 'Import any .apkg file. Bergmönch runs on Anki’s own scheduling engine, so cards, note types and review history behave the way they do in Anki.' },
    { title: 'Minutes instead of a backlog', text: 'The home screen tells you how many minutes today’s reviews will take, estimated from your own answer times. A calendar shows the days you studied. There is no streak to lose.' },
    { title: 'Two buttons to begin with', text: 'Forgot, or Got it. Anki’s four grades are one setting away when you want them.' },
    { title: 'An exam date per deck', text: 'Give a deck its exam date and the intervals shorten, so each card comes round again before the day.' },
    { title: 'Cards you can read', text: 'Set the text size, weight and line spacing of your cards. Light and dark themes. Code cards ask you to type the output.' },
    { title: 'Sync with your own server', text: 'Bergmönch syncs with a self-hosted Anki sync server. AnkiWeb does not allow third-party apps, so Bergmönch does not connect to it.' },
  ],
  whyTitle: 'Why it works this way',
  whyIntro: 'The defaults follow what is known about remembering things, and each row links the study behind it. Where the evidence is thin, the app leaves you alone.',
  whyHead: ['Setting', 'What Bergmönch does', 'Why'],
  why: [
    { what: 'Recall', does: 'Every card asks you to recall the answer before you see it.', why: 'Retrieving a fact from memory strengthens it more than reading it again. The benefit shows after days, not minutes.', refs: [P.roediger2006, P.karpicke2008] },
    { what: 'Spacing', does: 'Reviews are spread over days, then weeks, then months.', why: 'A meta-analysis of 317 experiments found that spaced reviews are remembered better than the same reviews in one sitting. A review of ten study techniques rated spacing and self-testing as the two most useful.', refs: [P.cepeda2006, P.dunlosky2013] },
    { what: 'Scheduler', does: 'FSRS, the scheduler Anki ships today.', why: 'In the open spaced-repetition benchmark it predicts forgetting better than the older SM-2 algorithm.', refs: [benchmark('Open benchmark on GitHub (not a paper)')] },
    { what: 'Retention target', does: '90 %, adjustable from 70 to 97 %. The daily workload is shown before you change it.', why: 'No percentage is the best one for everyone. Above 90 % the number of reviews climbs steeply.' },
    { what: 'Exam date', does: 'Intervals are capped by the time left until the exam.', why: 'In a study with more than 1,350 learners, the best gap between reviews grew with the time until the test.', refs: [P.cepeda2008] },
    { what: 'Grading', does: 'You see the full answer, then grade yourself. Nothing is graded for you.', why: 'With the answer in front of you there is something to check against. Students who rate their own answers too generously remember less later.', refs: [P.dunlosky2012] },
    { what: 'Left out', does: 'Streak counters, leaderboards, points, multiple choice.', why: 'They reward opening the app. In a semester-long classroom study, badges and a leaderboard lowered motivation and final exam scores. Multiple choice tests recognition, and the cards train recall.', refs: [P.hanus2015] },
  ],
  whyMore: 'All defaults and their sources',
  decksTitle: 'Course decks from TU Clausthal',
  decksIntro: 'On first start you can add the decks for two lectures. They are also the decks our students use in Anki. The cards are plain text files on GitHub, written by hand and checked against the lectures.',
  decks: [
    { name: 'Programmieren', meta: 'Introductory Java · German and English · about 290 notes', href: L.deckProgrammieren },
    { name: 'Cooperation Systems', meta: 'CSCW · English · about 330 notes', href: L.deckCoopSys },
  ],
  fixTitle: 'Found a card that is wrong or unclear?',
  fixSteps: ['Open the deck’s repository and search for a few words from the card.', 'Click the pencil icon and change the text.', 'Propose the change. A check runs on it, and we review and merge it.'],
  fixNote: 'Not sure how it should read? Open an issue instead. New cards are welcome too.',
  getTitle: 'Get Bergmönch',
  downloads: [
    { platform: 'iPhone and iPad', title: 'TestFlight beta', note: L.testflight ? 'iOS 17 or later. Install Apple’s TestFlight app first, then open the link on the device.' : 'iOS 17 or later. The public link will appear here once Apple has approved the beta.', href: L.testflight || undefined, cta: L.testflight ? 'Open in TestFlight' : 'Coming soon' },
    { platform: 'Android', title: 'APK from GitHub', note: 'Android 8 or later, 64-bit ARM. Your phone will ask once whether your browser may install apps.', href: L.apk, cta: 'Latest release' },
    { platform: 'Source', title: 'Build it yourself', note: 'SwiftUI and Jetpack Compose over a shared Rust core. The Mac version builds from the same source.', href: L.source, cta: 'geist-pro/bergmoench' },
  ],
  openTitle: 'Open source',
  open: [
    'Bergmönch is free software under the GNU Affero General Public License, version 3. It builds on Anki’s backend, which is under the same licence. Bergmönch is an independent project and is not affiliated with Anki or AnkiWeb.',
    'There is no account, no advertising and no analytics. Your cards and your review history stay on your device unless you set up your own sync server.',
  ],
  privacy: 'Privacy',
};

export const de: Copy = {
  lang: 'de',
  path: '/bergmoench/de/',
  otherPath: '/bergmoench/',
  otherLabel: 'English',
  title: 'Bergmönch',
  description: 'Bergmönch ist eine kostenlose, quelloffene Karteikarten-App für iPhone, iPad und Android. Sie öffnet Anki-Stapel, plant die Wiederholungen und behält alle Daten auf dem Gerät.',
  crumbs: ['Apps', 'Bergmönch'],
  kicker: 'Karteikarten · iPhone, iPad, Android · Beta',
  claim: 'Karteikarten für alle, die Vorlesungen zu bewältigen haben.',
  lede: 'Bergmönch öffnet Anki-Stapel und plant die Wiederholungen. Gelernt wird ein paar Minuten am Tag, und schwierige Karten kommen früher wieder als die, die schon sitzen. Die App ist kostenlos, quelloffen und braucht kein Konto.',
  name: 'Der Name stammt aus einer Bergbausage im Harz: ein geisterhafter Mönch, der mit einem Grubenlicht durch die Stollen geht.',
  nameMore: 'Mehr zum Namen',
  nameTitle: 'Der Name',
  nameText: [
    'Der Bergmönch ist ein Berggeist aus den Bergbausagen des Harzes, also aus der Gegend um Clausthal. Die Brüder Grimm haben ihn in ihren Deutschen Sagen als „Der Bergmönch im Harz“ festgehalten. Er ist ein Riese in schwarzer Mönchskutte, der mit einem Grubenlicht durch die Stollen geht. Ungefährlich ist er nicht: Wer flucht, pfeift oder faulenzt, wird bestraft, und wer ehrlich arbeitet, dem hilft er.',
    'Den Namen haben wir wegen des Lichts gewählt. In der Sage bekommt ein Bergmann, dessen Lampe zu erlöschen droht, Öl aus dem Geleucht des Mönchs. Dieses Öl geht über Jahre nicht zur Neige, solange der Bergmann niemandem verrät, woher es stammt. Eine Karteikarten-App hat eine ähnliche Aufgabe: Das Gelernte soll nicht erlöschen.',
    'Der Name passt auch zum Ort. Die TU Clausthal ist aus einer Bergschule hervorgegangen, und die alten Gruben, von denen die Sage erzählt, liegen rund um die Stadt.',
  ],
  nameLink: { label: 'Berggeister und der Bergmönch in der Wikipedia', href: 'https://de.wikipedia.org/wiki/Berggeist' },
  refsLabel: 'Quellen',
  cta: { apk: 'Android-APK laden', testflight: 'An der TestFlight-Beta teilnehmen', testflightSoon: 'TestFlight: kommt bald', source: 'Quelltext auf GitHub' },
  demo: {
    caption: 'Eine Karte aus dem Programmieren-Stapel, so wie die App sie zeigt.',
    show: 'Antwort zeigen',
    again: 'Zurück zur Frage',
    questionAlt: 'Bergmönch auf einem iPhone mit einer Fragekarte und der Schaltfläche „Show answer“.',
    answerAlt: 'Dieselbe Karte mit Antwort und den Schaltflächen zur Bewertung.',
  },
  featuresTitle: 'Was die App kann',
  features: [
    { title: 'Anki-Stapel, unverändert', text: 'Jede .apkg-Datei lässt sich importieren. Bergmönch nutzt Ankis eigene Planungslogik. Karten, Notiztypen und Lernverlauf verhalten sich deshalb wie in Anki.' },
    { title: 'Minuten statt Rückstand', text: 'Der Startbildschirm zeigt, wie viele Minuten die Wiederholungen heute dauern, geschätzt aus den eigenen Antwortzeiten. Ein Kalender zeigt die Tage, an denen gelernt wurde. Eine Serie, die reißen kann, gibt es nicht.' },
    { title: 'Zwei Tasten für den Anfang', text: 'Vergessen oder Gewusst. Ankis vier Bewertungen lassen sich in den Einstellungen einschalten.' },
    { title: 'Ein Prüfungstermin pro Stapel', text: 'Mit einem Prüfungstermin verkürzt Bergmönch die Abstände, sodass jede Karte vor der Prüfung noch einmal drankommt.' },
    { title: 'Gut lesbare Karten', text: 'Schriftgröße, Schriftstärke und Zeilenabstand der Karten sind einstellbar. Es gibt ein helles und ein dunkles Design. Bei Code-Karten wird die Ausgabe eingetippt.' },
    { title: 'Abgleich mit dem eigenen Server', text: 'Bergmönch gleicht mit einem selbst betriebenen Anki-Sync-Server ab. AnkiWeb lässt keine Apps von Dritten zu, deshalb verbindet sich Bergmönch nicht damit.' },
  ],
  whyTitle: 'Warum die App so arbeitet',
  whyIntro: 'Die Voreinstellungen richten sich nach dem, was über das Behalten bekannt ist. Jede Zeile nennt die Studie dahinter. Wo die Belege dünn sind, macht die App keine Vorgaben.',
  whyHead: ['Einstellung', 'Was Bergmönch tut', 'Warum'],
  why: [
    { what: 'Abrufen', does: 'Jede Karte verlangt, die Antwort aus dem Gedächtnis abzurufen, bevor sie erscheint.', why: 'Abrufen festigt Wissen stärker als erneutes Lesen. Der Vorteil zeigt sich nach Tagen, nicht nach Minuten.', refs: [P.roediger2006, P.karpicke2008] },
    { what: 'Verteilen', does: 'Die Wiederholungen verteilen sich über Tage, dann Wochen, dann Monate.', why: 'Eine Metaanalyse von 317 Experimenten zeigt: Verteilte Wiederholungen bleiben besser im Gedächtnis als dieselben Wiederholungen an einem Stück. Eine Übersicht über zehn Lerntechniken stuft verteiltes Lernen und Selbsttests als die beiden nützlichsten ein.', refs: [P.cepeda2006, P.dunlosky2013] },
    { what: 'Planung', does: 'FSRS, das Verfahren, das Anki heute mitliefert.', why: 'Im offenen Vergleichstest sagt es das Vergessen genauer vorher als das ältere SM-2.', refs: [benchmark('Offener Vergleichstest auf GitHub (kein Fachartikel)')] },
    { what: 'Behaltensziel', does: '90 %, einstellbar von 70 bis 97 %. Vor jeder Änderung zeigt die App den täglichen Aufwand an.', why: 'Kein Prozentwert ist für alle der beste. Über 90 % steigt die Zahl der Wiederholungen stark an.' },
    { what: 'Prüfungstermin', does: 'Die Abstände werden durch die Zeit bis zur Prüfung begrenzt.', why: 'In einer Studie mit mehr als 1350 Lernenden wuchs der beste Abstand zwischen zwei Wiederholungen mit der Zeit bis zum Test.', refs: [P.cepeda2008] },
    { what: 'Bewertung', does: 'Erst erscheint die ganze Antwort, dann bewertet man sich selbst. Die App bewertet nichts automatisch.', why: 'Mit der Antwort vor Augen gibt es einen Maßstab. Studierende, die ihre eigenen Antworten zu großzügig bewerten, behalten später weniger.', refs: [P.dunlosky2012] },
    { what: 'Weggelassen', does: 'Serienzähler, Ranglisten, Punkte, Multiple Choice.', why: 'Sie belohnen das Öffnen der App. In einer Studie über ein Semester senkten Abzeichen und eine Rangliste die Motivation und die Noten der Abschlussklausur. Multiple Choice prüft das Wiedererkennen, die Karten üben das Abrufen.', refs: [P.hanus2015] },
  ],
  whyMore: 'Alle Voreinstellungen und ihre Quellen (englisch)',
  decksTitle: 'Vorlesungsstapel der TU Clausthal',
  decksIntro: 'Beim ersten Start lassen sich die Stapel zu zwei Vorlesungen hinzufügen. Unsere Studierenden nutzen dieselben Stapel in Anki. Die Karten liegen als Textdateien auf GitHub, sind von Hand geschrieben und mit den Vorlesungen abgeglichen.',
  decks: [
    { name: 'Programmieren', meta: 'Einführung in Java · Deutsch und Englisch · rund 290 Notizen', href: L.deckProgrammieren },
    { name: 'Cooperation Systems', meta: 'CSCW · Englisch · rund 330 Notizen', href: L.deckCoopSys },
  ],
  fixTitle: 'Eine Karte ist falsch oder unklar?',
  fixSteps: ['Das Repository des Stapels öffnen und nach ein paar Wörtern der Karte suchen.', 'Auf das Stift-Symbol klicken und den Text ändern.', 'Die Änderung vorschlagen. Eine Prüfung läuft automatisch, danach sehen wir sie durch und übernehmen sie.'],
  fixNote: 'Unsicher, wie es richtig heißen muss? Dann genügt ein Issue. Neue Karten sind ebenfalls willkommen.',
  getTitle: 'Bergmönch laden',
  downloads: [
    { platform: 'iPhone und iPad', title: 'TestFlight-Beta', note: L.testflight ? 'Ab iOS 17. Zuerst Apples TestFlight-App installieren, dann den Link auf dem Gerät öffnen.' : 'Ab iOS 17. Der öffentliche Link steht hier, sobald Apple die Beta freigegeben hat.', href: L.testflight || undefined, cta: L.testflight ? 'In TestFlight öffnen' : 'Kommt bald' },
    { platform: 'Android', title: 'APK von GitHub', note: 'Ab Android 8, 64-Bit-ARM. Das Telefon fragt einmal, ob der Browser Apps installieren darf.', href: L.apk, cta: 'Neuestes Release' },
    { platform: 'Quelltext', title: 'Selbst bauen', note: 'SwiftUI und Jetpack Compose über einem gemeinsamen Rust-Kern. Die Mac-Version entsteht aus demselben Quelltext.', href: L.source, cta: 'geist-pro/bergmoench' },
  ],
  openTitle: 'Quelloffen',
  open: [
    'Bergmönch ist freie Software unter der GNU Affero General Public License, Version 3. Die App baut auf Ankis Backend auf, das unter derselben Lizenz steht. Bergmönch ist ein unabhängiges Projekt und steht in keiner Verbindung zu Anki oder AnkiWeb.',
    'Es gibt kein Konto, keine Werbung und keine Nutzungsauswertung. Karten und Lernverlauf bleiben auf dem Gerät, solange kein eigener Sync-Server eingerichtet ist.',
  ],
  privacy: 'Datenschutz',
};
