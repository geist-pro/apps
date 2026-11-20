// All copy of the Klopfgeist page, English and German. The page component (src/components/KlopfgeistPage.astro)
// only lays it out. Claims here describe what the beta builds do; check them against the app before changing.
// The command phrases mirror VoiceCommand and ReviewTag in the app's source: keep them in step.
import { klopfgeistLinks as L } from './apps';

type Feature = { title: string; text: string };
type Step = { say: string; title: string; text: string; alt: string };
type Command = { does: string; en: string[]; de: string[]; when: string };
type Tag = { tag: string; en: string[]; de: string[] };
type Button = { button: string; does: string };
type Download = { platform: string; title: string; note: string; href?: string; cta: string };
type Ref = { label: string; href: string };

export type Copy = {
  lang: 'en' | 'de';
  path: string;
  otherPath: string;
  otherLabel: string;
  title: string;
  description: string;
  crumbs: [string, string];
  claim: string;
  lede: string;
  name: string;
  nameMore: string;
  cta: { apk: string; testflight: string; testflightSoon: string; source: string };
  demoLabel: string;
  steps: Step[];
  featuresTitle: string;
  features: Feature[];
  commandsTitle: string;
  commandsIntro: string;
  commandsHead: [string, string, string, string];
  commands: Command[];
  tagsTitle: string;
  tagsIntro: string;
  tagsHead: [string, string, string];
  tags: Tag[];
  buttonsTitle: string;
  buttonsIntro: string;
  buttons: Button[];
  tipsTitle: string;
  tips: string[];
  getTitle: string;
  downloads: Download[];
  betaTitle: string;
  beta: string[];
  betaLink: Ref;
  nameTitle: string;
  nameText: string[];
  nameLink: Ref;
  openTitle: string;
  open: string[];
  privacy: string;
};

const tf = L.testflight;

export const en: Copy = {
  lang: 'en',
  path: '/klopfgeist/',
  otherPath: '/klopfgeist/de/',
  otherLabel: 'Deutsch',
  title: 'Klopfgeist',
  description: 'Klopfgeist reads a paper to you and takes your review comments by voice. Say “stop”, speak, say “continue”. For iPhone, iPad, Mac and Android. Free and open source.',
  crumbs: ['Apps', 'Klopfgeist'],
  claim: 'Listen to a paper. Review it out loud.',
  lede: 'Klopfgeist reads a paper to you like an audiobook. When something strikes you, say “stop”, speak your comment and say “continue”. The app writes the comment down, attaches it to the sentence you were hearing, and turns all of them into a review draft.',
  name: 'A Klopfgeist is a knocking spirit: you hear it, and you do not see it.',
  nameMore: 'More about the name',
  cta: { apk: 'Get the Android APK', testflight: 'Join the TestFlight beta', testflightSoon: 'TestFlight: coming soon', source: 'Source on GitHub' },
  demoLabel: 'One comment, start to finish',
  steps: [
    { say: '“stop”', title: 'The book pauses', text: 'The paper plays. You say “stop” over it, and the app pauses and starts recording.', alt: 'Klopfgeist playing a paper, with the sentence being read in large type and the status “Listening”.' },
    { say: 'your comment', title: 'You speak', text: 'Say what you think, as long as you like. Begin with “weakness” or “question” to sort the comment.', alt: 'Klopfgeist recording a spoken comment.' },
    { say: '“continue”', title: 'The book plays on', text: 'The comment is saved with its transcript. The book picks up a moment before you stopped it.', alt: 'The list of comments in Klopfgeist, each with its transcript and the sentence it belongs to.' },
  ],
  featuresTitle: 'What it does',
  features: [
    { title: 'Any paper becomes an audiobook', text: 'Open a PDF, Markdown, RTF or text file. Klopfgeist drops page headers, author blocks and reference lists, and reads the rest with a voice on your device.' },
    { title: 'Hands and eyes free', text: 'Review on a walk, on the train or while cooking. Every control has a voice command, and headset or steering-wheel buttons work too.' },
    { title: 'Comments land on the sentence', text: 'Each comment is transcribed and attached to the sentence that was playing. The app moves the anchor back a moment, since people react a little late.' },
    { title: 'A review draft from your notes', text: 'Begin a comment with “strength”, “weakness”, “question”, “summary” or “minor”. The export sorts your comments under those headings.' },
    { title: 'Three ways out', text: 'Export the text with your comments after each sentence, the review draft, or the PDF with a highlight and a note on every sentence you commented on.' },
    { title: 'Your voice stays on the device', text: 'Commands and comments are recognized on your phone or computer. There is no account. Sync is optional and uses your own Nextcloud or WebDAV folder.' },
  ],
  commandsTitle: 'Every voice command',
  commandsIntro: 'Say a command on its own, at a normal volume, with a short pause before and after. English and German commands are separate: pick the language in Settings. Each row lists every phrase the app accepts.',
  commandsHead: ['What happens', 'English', 'German', 'Works'],
  commands: [
    { does: 'Pause the book and record a comment', en: ['stop', 'note', 'comment'], de: ['stopp', 'Notiz', 'Kommentar'], when: 'while the book plays' },
    { does: 'Save the comment and play on, or start a paused book', en: ['continue', 'go on', 'resume', 'play'], de: ['weiter', 'weitermachen', 'fortsetzen'], when: 'during a comment, or while paused' },
    { does: 'Discard the comment you are recording', en: ['cancel', 'discard', 'delete that'], de: ['abbrechen', 'verwerfen', 'löschen'], when: 'during a comment' },
    { does: 'Go back 15 seconds. Say it twice for 30.', en: ['back', 'go back', 'rewind'], de: ['zurück', 'zurückspulen'], when: 'while a book is open' },
    { does: 'Repeat the current sentence', en: ['again', 'repeat'], de: ['nochmal', 'wiederholen'], when: 'while the book plays' },
    { does: 'Bookmark the sentence you just heard. Say it again within two minutes to mark the whole passage.', en: ['bookmark', 'mark', 'bookmark this', 'bookmark that', 'mark this'], de: ['Lesezeichen', 'Markierung', 'markieren', 'Lesezeichen setzen', 'merken'], when: 'while the book plays' },
    { does: 'Speed up by 0.1×', en: ['faster'], de: ['schneller'], when: 'while the book plays' },
    { does: 'Slow down by 0.1×', en: ['slower'], de: ['langsamer'], when: 'while the book plays' },
  ],
  tagsTitle: 'Words that sort a comment',
  tagsIntro: 'Say one of these as the first word of a comment. The word is removed from the transcript, and the comment goes under that heading in the review draft.',
  tagsHead: ['Heading', 'English', 'German'],
  tags: [
    { tag: 'Summary', en: ['summary'], de: ['Zusammenfassung'] },
    { tag: 'Strengths', en: ['strength', 'strengths'], de: ['Stärke', 'Stärken'] },
    { tag: 'Weaknesses', en: ['weakness', 'weaknesses'], de: ['Schwäche', 'Schwächen'] },
    { tag: 'Questions', en: ['question', 'questions'], de: ['Frage', 'Fragen'] },
    { tag: 'Minor issues', en: ['minor', 'minor issue', 'nitpick', 'nit', 'typo'], de: ['Kleinigkeit', 'Kleinigkeiten', 'Detail'] },
  ],
  buttonsTitle: 'Without a word',
  buttonsIntro: 'The buttons on a headset, in a car or on the lock screen do the same job.',
  buttons: [
    { button: 'Next track', does: 'starts a comment' },
    { button: 'Play / pause', does: 'during a comment: saves it and plays on' },
    { button: 'Previous track', does: 'during a comment: discards it. Otherwise: back 15 seconds' },
  ],
  tipsTitle: 'When a command is not heard',
  tips: [
    'Leave a short pause before and after the word. “We should continue with this” is a sentence, and the app treats it as one.',
    'Over the phone’s speaker, “stop” has to stand out from the book. Headphones make this easier.',
    'Settings › Diagnostics shows what the app heard and why it ignored a word.',
  ],
  getTitle: 'Get Klopfgeist',
  downloads: [
    { platform: 'iPhone, iPad and Mac', title: 'TestFlight beta', note: tf ? 'iOS 26 or macOS 26 (Apple silicon). Install Apple’s TestFlight app first, then open the link on the device.' : 'iOS 26 or macOS 26 (Apple silicon). The builds are with Apple for review. The public link will appear here once they are approved.', href: tf || undefined, cta: tf ? 'Open in TestFlight' : 'Coming soon' },
    { platform: 'Android', title: 'APK from GitHub', note: 'Android 13 or later, 64-bit ARM, about 110 MB because the speech models are included. Your phone will ask once whether your browser may install apps.', href: L.apk, cta: 'Latest release' },
    { platform: 'Source', title: 'Build it yourself', note: 'SwiftUI and Jetpack Compose. The rules for commands are written twice, in Swift and Kotlin, and checked against the same test cases.', href: L.source, cta: 'geist-pro/klopfgeist' },
  ],
  betaTitle: 'What to expect from the beta',
  beta: [
    'Klopfgeist is a beta. We tested every command on one Android phone, over its speaker, with the phrases spoken by synthetic voices from a laptop. In English, six voices said 28 phrases each, and 141 of 168 trials went as expected. “continue”, “comment”, “bookmark” and “again” were heard every time. “stop” was heard from four of the six voices, and the short word “back” from two.',
    'German did worse: 66 of 96 trials with four voices. “weitermachen” and “abbrechen” were heard every time, “stopp” only once in four. If a word fails for you, try another phrase from the same row of the table.',
    'The iPhone, iPad and Mac apps pass their automated tests and have had less time on real devices. Headsets and cars are the least tested. If a command is not heard, export the session trace under Settings › Diagnostics and send it with your report.',
  ],
  betaLink: { label: 'All test results', href: L.voiceTests },
  nameTitle: 'The name',
  nameText: [
    'Klopfgeist is the German word for a knocking spirit. English borrowed a different German word for the same thing: poltergeist. Nobody sees a Klopfgeist. It makes itself known by sound.',
    'The app is one you mostly hear, too. A voice reads to you, and you talk back.',
    'The name also fits the family. Our group is called GEIST, the German word for spirit, and our other app, Bergmönch, is named after a spirit as well.',
  ],
  nameLink: { label: 'Poltergeist on Wikipedia', href: 'https://en.wikipedia.org/wiki/Poltergeist' },
  openTitle: 'Open source',
  open: [
    'Klopfgeist is free software under the Apache License 2.0. The speech recognition on Android is Vosk. The natural voices on the Mac are Kokoro and Qwen3-TTS, which the app downloads when you first choose them.',
    'There is no account, no advertising and no analytics. Books, comments and recordings stay on your device unless you turn on sync with your own server.',
  ],
  privacy: 'Privacy',
};

export const de: Copy = {
  lang: 'de',
  path: '/klopfgeist/de/',
  otherPath: '/klopfgeist/',
  otherLabel: 'English',
  title: 'Klopfgeist',
  description: 'Klopfgeist liest ein Paper vor und nimmt Gutachter-Kommentare per Sprache auf: „Stopp“ sagen, sprechen, „weiter“ sagen. Für iPhone, iPad, Mac und Android. Kostenlos und quelloffen.',
  crumbs: ['Apps', 'Klopfgeist'],
  claim: 'Ein Paper hören. Laut begutachten.',
  lede: 'Klopfgeist liest ein Paper vor wie ein Hörbuch. Fällt etwas auf, genügt „Stopp“, dann der gesprochene Kommentar, dann „weiter“. Die App schreibt den Kommentar mit, heftet ihn an den Satz, der gerade zu hören war, und macht aus allen Kommentaren einen Gutachtenentwurf.',
  name: 'Ein Klopfgeist ist ein Geist, den man hört und nicht sieht.',
  nameMore: 'Mehr zum Namen',
  cta: { apk: 'Android-APK laden', testflight: 'An der TestFlight-Beta teilnehmen', testflightSoon: 'TestFlight: kommt bald', source: 'Quelltext auf GitHub' },
  demoLabel: 'Ein Kommentar von Anfang bis Ende',
  steps: [
    { say: '„Stopp“', title: 'Das Buch hält an', text: 'Das Paper läuft. Auf „Stopp“ hält die App an und beginnt mit der Aufnahme.', alt: 'Klopfgeist spielt ein Paper ab, der vorgelesene Satz steht groß auf dem Bildschirm, darunter der Status „Listening“.' },
    { say: 'der Kommentar', title: 'Jetzt wird gesprochen', text: 'Der Kommentar darf beliebig lang sein. Beginnt er mit „Schwäche“ oder „Frage“, wird er einsortiert.', alt: 'Klopfgeist nimmt einen gesprochenen Kommentar auf.' },
    { say: '„weiter“', title: 'Das Buch läuft weiter', text: 'Der Kommentar ist mit seinem Wortlaut gespeichert. Das Buch setzt kurz vor der Unterbrechung wieder ein.', alt: 'Die Liste der Kommentare in Klopfgeist, jeder mit Wortlaut und dem Satz, zu dem er gehört.' },
  ],
  featuresTitle: 'Was die App kann',
  features: [
    { title: 'Aus jedem Paper wird ein Hörbuch', text: 'PDF, Markdown, RTF und Textdateien lassen sich öffnen. Klopfgeist lässt Kopfzeilen, Autorenblöcke und Literaturverzeichnisse weg und liest den Rest mit einer Stimme auf dem Gerät vor.' },
    { title: 'Hände und Augen frei', text: 'Begutachten geht beim Spazieren, im Zug oder beim Kochen. Für jede Funktion gibt es einen Sprachbefehl. Die Tasten am Headset oder am Lenkrad funktionieren ebenfalls.' },
    { title: 'Kommentare sitzen am Satz', text: 'Jeder Kommentar wird verschriftlicht und an den Satz geheftet, der gerade lief. Die App rückt den Anker ein Stück zurück, weil man immer etwas verzögert reagiert.' },
    { title: 'Aus Notizen wird ein Gutachtenentwurf', text: 'Beginnt ein Kommentar mit „Stärke“, „Schwäche“, „Frage“, „Zusammenfassung“ oder „Kleinigkeit“, ordnet der Export ihn unter dieser Überschrift ein.' },
    { title: 'Drei Exportformate', text: 'Der Text mit den Kommentaren hinter jedem Satz, der Gutachtenentwurf oder das PDF mit einer Markierung und einer Notiz an jedem kommentierten Satz.' },
    { title: 'Die Stimme bleibt auf dem Gerät', text: 'Befehle und Kommentare werden auf dem Telefon oder Rechner erkannt. Ein Konto gibt es nicht. Der Abgleich ist freiwillig und nutzt einen eigenen Nextcloud- oder WebDAV-Ordner.' },
  ],
  commandsTitle: 'Alle Sprachbefehle',
  commandsIntro: 'Ein Befehl wird für sich gesprochen, in normaler Lautstärke, mit einer kurzen Pause davor und danach. Englische und deutsche Befehle sind getrennt, die Sprache wird in den Einstellungen gewählt. Jede Zeile nennt alle Wörter, die die App annimmt.',
  commandsHead: ['Was passiert', 'Englisch', 'Deutsch', 'Wirkt'],
  commands: [
    { does: 'Das Buch anhalten und einen Kommentar aufnehmen', en: ['stop', 'note', 'comment'], de: ['stopp', 'Notiz', 'Kommentar'], when: 'während das Buch läuft' },
    { does: 'Den Kommentar speichern und weiterhören, oder ein angehaltenes Buch starten', en: ['continue', 'go on', 'resume', 'play'], de: ['weiter', 'weitermachen', 'fortsetzen'], when: 'während eines Kommentars oder in der Pause' },
    { does: 'Den laufenden Kommentar verwerfen', en: ['cancel', 'discard', 'delete that'], de: ['abbrechen', 'verwerfen', 'löschen'], when: 'während eines Kommentars' },
    { does: '15 Sekunden zurück. Zweimal gesagt: 30.', en: ['back', 'go back', 'rewind'], de: ['zurück', 'zurückspulen'], when: 'solange ein Buch geöffnet ist' },
    { does: 'Den aktuellen Satz wiederholen', en: ['again', 'repeat'], de: ['nochmal', 'wiederholen'], when: 'während das Buch läuft' },
    { does: 'Ein Lesezeichen am eben gehörten Satz setzen. Innerhalb von zwei Minuten noch einmal gesagt, markiert es die ganze Passage.', en: ['bookmark', 'mark', 'bookmark this', 'bookmark that', 'mark this'], de: ['Lesezeichen', 'Markierung', 'markieren', 'Lesezeichen setzen', 'merken'], when: 'während das Buch läuft' },
    { does: 'Um 0,1× schneller', en: ['faster'], de: ['schneller'], when: 'während das Buch läuft' },
    { does: 'Um 0,1× langsamer', en: ['slower'], de: ['langsamer'], when: 'während das Buch läuft' },
  ],
  tagsTitle: 'Wörter, die einen Kommentar einsortieren',
  tagsIntro: 'Eines dieser Wörter als erstes Wort eines Kommentars genügt. Das Wort wird aus dem Wortlaut entfernt, und der Kommentar steht im Gutachtenentwurf unter der passenden Überschrift.',
  tagsHead: ['Überschrift', 'Englisch', 'Deutsch'],
  tags: [
    { tag: 'Zusammenfassung', en: ['summary'], de: ['Zusammenfassung'] },
    { tag: 'Stärken', en: ['strength', 'strengths'], de: ['Stärke', 'Stärken'] },
    { tag: 'Schwächen', en: ['weakness', 'weaknesses'], de: ['Schwäche', 'Schwächen'] },
    { tag: 'Fragen', en: ['question', 'questions'], de: ['Frage', 'Fragen'] },
    { tag: 'Kleinigkeiten', en: ['minor', 'minor issue', 'nitpick', 'nit', 'typo'], de: ['Kleinigkeit', 'Kleinigkeiten', 'Detail'] },
  ],
  buttonsTitle: 'Ohne ein Wort',
  buttonsIntro: 'Die Tasten am Headset, im Auto oder auf dem Sperrbildschirm leisten dasselbe.',
  buttons: [
    { button: 'Nächster Titel', does: 'beginnt einen Kommentar' },
    { button: 'Wiedergabe / Pause', does: 'während eines Kommentars: speichert ihn und spielt weiter' },
    { button: 'Vorheriger Titel', does: 'während eines Kommentars: verwirft ihn. Sonst: 15 Sekunden zurück' },
  ],
  tipsTitle: 'Wenn ein Befehl nicht ankommt',
  tips: [
    'Vor und nach dem Wort hilft eine kurze Pause. „Das sollten wir weiter verfolgen“ ist ein Satz, und die App behandelt ihn als Satz.',
    'Über den Lautsprecher des Telefons muss sich „Stopp“ vom Buch abheben. Mit Kopfhörern gelingt das leichter.',
    'Unter Settings › Diagnostics steht, was die App gehört hat und warum sie ein Wort übergangen hat. Die Oberfläche der App ist bisher englisch.',
  ],
  getTitle: 'Klopfgeist laden',
  downloads: [
    { platform: 'iPhone, iPad und Mac', title: 'TestFlight-Beta', note: tf ? 'Ab iOS 26 oder macOS 26 (Apple Silicon). Zuerst Apples TestFlight-App installieren, dann den Link auf dem Gerät öffnen.' : 'Ab iOS 26 oder macOS 26 (Apple Silicon). Die Builds liegen bei Apple zur Prüfung. Der öffentliche Link steht hier, sobald sie freigegeben sind.', href: tf || undefined, cta: tf ? 'In TestFlight öffnen' : 'Kommt bald' },
    { platform: 'Android', title: 'APK von GitHub', note: 'Ab Android 13, 64-Bit-ARM, rund 110 MB, weil die Sprachmodelle enthalten sind. Das Telefon fragt einmal, ob der Browser Apps installieren darf.', href: L.apk, cta: 'Neuestes Release' },
    { platform: 'Quelltext', title: 'Selbst bauen', note: 'SwiftUI und Jetpack Compose. Die Regeln für die Befehle gibt es zweimal, in Swift und in Kotlin, geprüft gegen dieselben Testfälle.', href: L.source, cta: 'geist-pro/klopfgeist' },
  ],
  betaTitle: 'Was von der Beta zu erwarten ist',
  beta: [
    'Klopfgeist ist eine Beta. Jeden Befehl haben wir auf einem Android-Telefon über dessen Lautsprecher getestet, gesprochen von synthetischen Stimmen eines Laptops. Auf Englisch sprachen sechs Stimmen je 28 Phrasen, und 141 von 168 Versuchen verliefen wie erwartet. „continue“, „comment“, „bookmark“ und „again“ kamen jedes Mal an. „stop“ wurde bei vier der sechs Stimmen erkannt, das kurze „back“ bei zwei.',
    'Auf Deutsch war das Ergebnis schlechter: 66 von 96 Versuchen mit vier Stimmen. „weitermachen“ und „abbrechen“ kamen jedes Mal an, „stopp“ nur bei einer von vier Stimmen. Kommt ein Wort nicht an, hilft oft ein anderes aus derselben Zeile der Tabelle.',
    'Die Apps für iPhone, iPad und Mac bestehen ihre automatischen Tests und waren kürzer auf echten Geräten im Einsatz. Headsets und Autos sind am wenigsten getestet. Kommt ein Befehl nicht an, lässt sich unter Settings › Diagnostics das Sitzungsprotokoll exportieren. Es hilft uns, wenn es der Meldung beiliegt.',
  ],
  betaLink: { label: 'Alle Testergebnisse (englisch)', href: L.voiceTests },
  nameTitle: 'Der Name',
  nameText: [
    'Ein Klopfgeist ist ein Geist, der sich durch Klopfen bemerkbar macht. Bekannter ist er unter dem Namen Poltergeist. Zu sehen ist ein Klopfgeist nie, er meldet sich durch Geräusche.',
    'Auch die App hört man vor allem. Eine Stimme liest vor, und man redet zurück.',
    'Der Name passt auch in die Reihe. Unsere Arbeitsgruppe heißt GEIST, und unsere andere App, Bergmönch, trägt ebenfalls den Namen eines Geistes.',
  ],
  nameLink: { label: 'Poltergeist in der Wikipedia', href: 'https://de.wikipedia.org/wiki/Poltergeist' },
  openTitle: 'Quelloffen',
  open: [
    'Klopfgeist ist freie Software unter der Apache-Lizenz 2.0. Die Spracherkennung unter Android stammt von Vosk. Die natürlichen Stimmen auf dem Mac sind Kokoro und Qwen3-TTS. Die App lädt sie, wenn sie zum ersten Mal ausgewählt werden.',
    'Es gibt kein Konto, keine Werbung und keine Nutzungsauswertung. Bücher, Kommentare und Aufnahmen bleiben auf dem Gerät, solange kein Abgleich mit einem eigenen Server eingeschaltet ist.',
  ],
  privacy: 'Datenschutz',
};
