// Every app on apps.geist.pro. To add one: an icon in src/assets, an entry here, and (when it has a page) a folder
// in src/pages/<slug>/. An app without `href` is listed but not linked.
import type { ImageMetadata } from 'astro';
import bergmoench from '../assets/bergmoench-icon.png';
import klopfgeist from '../assets/klopfgeist-icon.png';

export type AppStatus = 'beta' | 'soon' | 'released';
export type App = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  status: AppStatus;
  platforms: string[];
  icon: ImageMetadata;
  href?: string;
};

export const STATUS_LABEL: Record<AppStatus, string> = { beta: 'Beta', soon: 'Coming soon', released: 'Available' };

export const apps: App[] = [
  {
    slug: 'bergmoench',
    name: 'Bergmönch',
    tagline: 'Flashcards that open Anki decks',
    summary: 'Plans your reviews, shows the minutes they take today, and keeps everything on your device. Free and open source.',
    status: 'beta',
    platforms: ['iPhone', 'iPad', 'Android'],
    icon: bergmoench,
    href: '/bergmoench/',
  },
  {
    slug: 'klopfgeist',
    name: 'Klopfgeist',
    tagline: 'Listen to a paper, review it by voice',
    summary: 'Reads a paper to you like an audiobook. Say “stop”, speak your comment, say “continue”. The comments become a review draft. Free and open source.',
    status: 'beta',
    platforms: ['iPhone', 'iPad', 'Mac', 'Android'],
    icon: klopfgeist,
    href: '/klopfgeist/',
  },
];

// Bergmönch download links. Set `testflight` to the public link once Apple has approved the beta.
export const bergmoenchLinks = {
  testflight: 'https://testflight.apple.com/join/9QZujZ7f' as string,
  apk: 'https://github.com/geist-pro/bergmoench/releases/latest',
  source: 'https://github.com/geist-pro/bergmoench',
  defaults: 'https://github.com/geist-pro/bergmoench/blob/main/docs/science-defaults.md',
  deckProgrammieren: 'https://github.com/geist-pro/deck-programmieren',
  deckCoopSys: 'https://github.com/geist-pro/deck-cooperation-systems',
} as const;

// Klopfgeist download links. One TestFlight link serves iPhone, iPad and Mac; set it once Apple has approved the beta.
export const klopfgeistLinks = {
  testflight: '' as string,
  apk: 'https://github.com/geist-pro/klopfgeist/releases/latest',
  source: 'https://github.com/geist-pro/klopfgeist',
  voiceTests: 'https://github.com/geist-pro/klopfgeist/tree/main/docs/voice-suite',
} as const;
