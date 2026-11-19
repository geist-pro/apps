// One place for the site's name, address and outbound links. The provider is the GEIST group at TU Clausthal;
// the legal pages live on geist.pro and are linked from the footer.
export const site = {
  url: 'https://apps.geist.pro',
  name: 'GEIST Apps',
  institute: 'Human-Centered Information Systems · TU Clausthal',
  parentOrg: 'Clausthal University of Technology',
  address: ['Clausthal University of Technology', 'Institute of Informatics, Human-Centered Information Systems', 'Julius-Albert-Straße 4', '38678 Clausthal-Zellerfeld, Germany'],
  contactEmail: 'kai.kunze@tu-clausthal.de',
  home: 'https://geist.pro',
  github: 'https://github.com/geist-pro',
  legal: [
    { label: 'Impressum', href: 'https://geist.pro/impressum/', lang: 'de' },
    { label: 'Datenschutz', href: 'https://geist.pro/datenschutz/', lang: 'de' },
    { label: 'Barrierefreiheit', href: 'https://geist.pro/barrierefreiheit/', lang: 'de' },
  ],
  description: 'Apps from GEIST, the Human-Centered Information Systems group at TU Clausthal.',
} as const;
