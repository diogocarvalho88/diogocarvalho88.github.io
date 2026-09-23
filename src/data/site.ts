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
  minifootball: 'https://minifootball.pt/lisboa/',
  tigerbox: 'https://tigerbox.pt/',
  chezmoi: 'https://chezmoi.com.pt/',
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
  { title: 'Bambino a Roma', detail: 'Chico Buarque', url: 'https://penguinlivros.pt/loja/companhia-das-letras/livro/bambino-a-roma/' },
  { title: 'O Caçador de Elefantes Invisíveis', detail: 'Mia Couto', url: 'https://www.bertrand.pt/livro/o-cacador-de-elefantes-invisiveis-mia-couto/25460181' },
  { title: 'À Caça de Sombras', detail: 'Robert Bryndza', url: 'https://almadoslivros.pt/products/a-caca-de-sombras' }
] as const;

export const personalUpdates = [
  { label: 'Reading now', entries: [...currentlyReading] },
  { label: 'Playing · Nintendo Switch', entries: [
    { title: 'Pokémon FireRed, Sword & Brilliant Diamond', detail: 'Pokémon', url: 'https://www.pokemon.com/us/pokemon-video-games/' },
    { title: 'Hogwarts Legacy', detail: 'Nintendo Switch', url: 'https://www.hogwartslegacy.com/' },
    { title: 'Assassin’s Creed: The Rebel Collection', detail: 'Black Flag & Rogue · Nintendo Switch', url: 'https://www.ubisoft.com/en-us/game/assassins-creed/rebel-collection' }
  ] },
  { label: 'Watching', entries: [
    { title: 'The Gentlemen', detail: 'Series', url: 'https://www.imdb.com/title/tt13210838/' },
    { title: 'Only Murders in the Building', detail: 'Series', url: 'https://www.imdb.com/title/tt11691774/' },
    { title: 'Reacher', detail: 'Series', url: 'https://www.imdb.com/title/tt9288030/' },
    { title: 'Game of Thrones', detail: 'Rewatch', url: 'https://www.imdb.com/title/tt0944947/' },
    { title: 'The Odyssey', detail: 'Film', url: 'https://www.imdb.com/title/tt33764258/' },
    { title: 'Obsession', detail: 'Film', url: 'https://www.imdb.com/title/tt37287335/' }
  ] }
] as const;

export const emails = ['diogo.s.carvalho@tecnico.ulisboa.pt', 'diogocarvalho@rezolve.com', 'carvalhomm88@gmail.com'];

export const themes = [
  { n: '01', title: 'Convergent reinforcement learning', text: 'When do value-based methods with function approximation converge as representations or data distributions change?' },
  { n: '02', title: 'Hierarchical reinforcement learning', text: 'How should agents learn, reuse, and terminate temporally extended skills across long-horizon tasks?' },
  { n: '03', title: 'Adaptive planning & computation', text: 'When should an agent plan, act, reuse a plan, or allocate more reasoning to a decision?' },
  { n: '04', title: 'Reliable agentic systems', text: 'How can trace-based evaluations detect state, coordination, and execution failures in conversational and commerce agents?' }
];
