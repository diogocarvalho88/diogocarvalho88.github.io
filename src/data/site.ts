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
  { n: '01', title: 'Convergent reinforcement learning', text: 'When do value-based methods with function approximation converge as representations or data distributions change?' },
  { n: '02', title: 'Hierarchical reinforcement learning', text: 'How should agents learn, reuse, and terminate temporally extended skills across long-horizon tasks?' },
  { n: '03', title: 'Adaptive planning & computation', text: 'When should an agent plan, act, reuse a plan, or allocate more reasoning to a decision?' },
  { n: '04', title: 'Reliable agentic systems', text: 'How can trace-based evaluations detect state, coordination, and execution failures in conversational and commerce agents?' }
];
