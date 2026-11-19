// All copy of the Bergmönch page, English and German. The page component (src/components/BergmoenchPage.astro)
// only lays it out. Claims here describe what the released build does; check them against the app before changing.
import { bergmoenchLinks as L } from './apps';

type Feature = { title: string; text: string };
type Row = { what: string; does: string; why: string };
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
  whyIntro: 'The defaults follow what is known about remembering things. Where the evidence is thin, the app leaves you alone.',
  whyHead: ['Setting', 'What Bergmönch does', 'Why'],
  why: [
    { what: 'Scheduler', does: 'FSRS, the scheduler Anki ships today.', why: 'In the open spaced-repetition benchmark it predicts forgetting better than the older SM-2 algorithm.' },
    { what: 'Retention target', does: '90 %, adjustable from 70 to 97 %. The daily workload is shown before you change it.', why: 'No percentage is the best one for everyone. Above 90 % the number of reviews climbs steeply.' },
    { what: 'Exam date', does: 'Intervals are capped by the time left until the exam.', why: 'Cepeda et al. (2008): the best gap between reviews depends on how far away the test is.' },
    { what: 'Grading', does: 'You see the full answer, then grade yourself. Nothing is graded for you.', why: 'People judge their own recall more accurately with the answer in front of them.' },
    { what: 'Left out', does: 'Streak counters, leaderboards, points, multiple choice.', why: 'They reward opening the app. They do not show that you remember more.' },
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
    { platform: 'iPhone and iPad', title: 'TestFlight beta', note: 'iOS 17 or later. The public link will appear here once Apple has approved the beta.', href: L.testflight || undefined, cta: L.testflight ? 'Open in TestFlight' : 'Coming soon' },
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
  whyIntro: 'Die Voreinstellungen richten sich nach dem, was über das Behalten bekannt ist. Wo die Belege dünn sind, macht die App keine Vorgaben.',
  whyHead: ['Einstellung', 'Was Bergmönch tut', 'Warum'],
  why: [
    { what: 'Planung', does: 'FSRS, das Verfahren, das Anki heute mitliefert.', why: 'Im offenen Vergleichstest sagt es das Vergessen genauer vorher als das ältere SM-2.' },
    { what: 'Behaltensziel', does: '90 %, einstellbar von 70 bis 97 %. Vor jeder Änderung zeigt die App den täglichen Aufwand an.', why: 'Kein Prozentwert ist für alle der beste. Über 90 % steigt die Zahl der Wiederholungen stark an.' },
    { what: 'Prüfungstermin', does: 'Die Abstände werden durch die Zeit bis zur Prüfung begrenzt.', why: 'Cepeda et al. (2008): Der beste Abstand zwischen zwei Wiederholungen hängt davon ab, wie weit die Prüfung entfernt ist.' },
    { what: 'Bewertung', does: 'Erst erscheint die ganze Antwort, dann bewertet man sich selbst. Die App bewertet nichts automatisch.', why: 'Mit der Antwort vor Augen schätzt man die eigene Erinnerung genauer ein.' },
    { what: 'Weggelassen', does: 'Serienzähler, Ranglisten, Punkte, Multiple Choice.', why: 'Sie belohnen das Öffnen der App. Dass man mehr behält, zeigen sie nicht.' },
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
    { platform: 'iPhone und iPad', title: 'TestFlight-Beta', note: 'Ab iOS 17. Der öffentliche Link steht hier, sobald Apple die Beta freigegeben hat.', href: L.testflight || undefined, cta: L.testflight ? 'In TestFlight öffnen' : 'Kommt bald' },
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
