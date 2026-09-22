export const links = {
  github: 'https://github.com/diogocarvalho88',
  linkedin: 'https://linkedin.com/in/diogosscarvalho',
  scholar: 'https://scholar.google.com/citations?user=KJdkaCMAAAAJ&hl=en',
  openreview: 'https://openreview.net/profile?id=~Diogo_S._Carvalho1',
  orcid: 'https://orcid.org/0000-0003-3008-7322',
  gaips: 'https://gaips.inesc-id.pt/team/diogo-carvalho/',
  aihub: 'https://aihub.org/author/diogocarvalho/',
  inesc: 'https://www.inesc-id.pt/', tecnico: 'https://tecnico.ulisboa.pt/en/', rezolve: 'https://rezolve.com/'
};

export const academicProfiles = [
  ['Google Scholar', links.scholar], ['OpenReview', links.openreview], ['ORCID', links.orcid],
  ['GitHub', links.github], ['LinkedIn', links.linkedin], ['AIhub', links.aihub]
] as const;

export const affiliations = [
  ['GAIPS', links.gaips], ['INESC-ID', links.inesc], ['Instituto Superior Técnico', links.tecnico], ['Rezolve AI', links.rezolve]
] as const;

export const emails = ['diogo.s.carvalho@tecnico.ulisboa.pt', 'diogocarvalho@rezolve.com', 'carvalhomm88@gmail.com'];

export const themes = [
  { n: '01', title: 'Learning under uncertainty', text: 'How can agents keep learning when their data, representations, or environment change over time?' },
  { n: '02', title: 'Hierarchy & multi-agent intelligence', text: 'How do structure, delegation, and coordination make long-horizon competence possible?' },
  { n: '03', title: 'Planning, reasoning & abstraction', text: 'How can systems form reusable skills and allocate computation to the decisions that matter?' },
  { n: '04', title: 'Reliable applied AI', text: 'How should we evaluate and verify agents operating in consequential, real-world workflows?' }
];
