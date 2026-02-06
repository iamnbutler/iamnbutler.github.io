export interface WorkEntry {
  company: string;
  role: string;
  dateStart: string;
  dateEnd: string;
  description: string;
}

export const work: WorkEntry[] = [
  { company: 'Zed Industries', role: 'Lead Designer', dateStart: '2021-01', dateEnd: 'Current', description: '' },
  { company: 'Facebook', role: 'Product Designer', dateStart: '2015-01', dateEnd: '2021-01', description: 'News Feed, Developer Experience, Productivity Tools, Facebook Stories' },
  { company: 'Format', role: 'Design Consultant', dateStart: '2014-01', dateEnd: '2014-12', description: '' },
  { company: 'LOOKBOOK', role: 'Designer & Developer', dateStart: '2013-01', dateEnd: '2014-01', description: '' },
  { company: 'York University', role: 'Web Developer', dateStart: '2011-01', dateEnd: '2013-01', description: '' }
];
