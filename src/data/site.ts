export const links = {
  github: 'https://github.com/diogocarvalho88',
  linkedin: 'https://linkedin.com/in/diogosscarvalho',
  scholar: 'https://scholar.google.com/citations?user=KJdkaCMAAAAJ&hl=en',
  openreview: 'https://openreview.net/profile?id=~Diogo_S._Carvalho1',
  orcid: 'https://orcid.org/0000-0003-3008-7322',
  gaips: 'https://gaips.inesc-id.pt/team/diogo-carvalho/',
  aihub: 'https://aihub.org/author/diogocarvalho/',
  instagram: 'https://www.instagram.com/diogoocarvalio/',
  goodreads: 'https://www.goodreads.com/friend/i?invite_token=ZjdiODgwMmMtZGJmYS00MTFiLWFkNzEtYmE0MDBjODg0NGM0',
  curtiZona: 'https://diogocarvalho88.github.io/curti-zona-fc/',
  inesc: 'https://www.inesc-id.pt/', tecnico: 'https://tecnico.ulisboa.pt/en/', rezolve: 'https://rezolve.com/'
};

export const academicProfiles = [
  ['Google Scholar', links.scholar], ['OpenReview', links.openreview], ['ORCID', links.orcid],
  ['GitHub', links.github], ['LinkedIn', links.linkedin], ['AIhub', links.aihub]
] as const;

export const affiliations = [
  ['GAIPS', links.gaips], ['INESC-ID', links.inesc], ['Instituto Superior Técnico', links.tecnico], ['Rezolve AI', links.rezolve]
] as const;

export const personalProfiles = [
  ['Instagram', links.instagram], ['Goodreads', links.goodreads], ['Curti Zona FC', links.curtiZona]
] as const;

export const currentlyReading = [
  'Bambino a Roma',
  'O Caçador de Elefantes Invisíveis',
  'À Caça de Sombras'
] as const;

export const personalUpdates = [
  { label: 'Reading now', entries: [...currentlyReading] },
  { label: 'Playing', entries: ['Pokémon FireRed, Sword & Brilliant Diamond', 'Hogwarts Legacy and Assassin’s Creed: The Rebel Collection'] },
  { label: 'Watching', entries: ['The Gentlemen, Only Murders in the Building, Reacher, and a Game of Thrones rewatch', 'Recent films I enjoyed include Odisseia and Obsession'] }
] as const;

export const emails = ['diogo.s.carvalho@tecnico.ulisboa.pt', 'diogocarvalho@rezolve.com', 'carvalhomm88@gmail.com'];

export const themes = [
  { n: '01', title: 'Convergent reinforcement learning', text: 'When do value-based methods with function approximation converge as representations or data distributions change?' },
  { n: '02', title: 'Hierarchical reinforcement learning', text: 'How should agents learn, reuse, and terminate temporally extended skills across long-horizon tasks?' },
  { n: '03', title: 'Adaptive planning & computation', text: 'When should an agent plan, act, reuse a plan, or allocate more reasoning to a decision?' },
  { n: '04', title: 'Reliable agentic systems', text: 'How can trace-based evaluations detect state, coordination, and execution failures in conversational and commerce agents?' }
];
