// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript & Typescript',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Assembly',
    competency: 4,
    category: ['Languages', 'CTFing', 'Pentesting'],
  },
  {
    title: 'Exploit Development - Shellcoding/Scripting',
    competency: 4,
    category: ['CTFing', 'Pentesting'],
  },
  {
    title: 'Database stack - NoSql/PostgreSQL/SQLite3/SQL',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'API testing - Burpsuit/Scripting/Automating',
    competency: 3,
    category: ['Web Development', 'Pentesting', 'Tools'],
  },
  {
    title: 'Express.JS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Git/Mercurial',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Binary Analysis',
    competency: 4,
    category: ['CTFing', 'Pentesting', 'Linux'],
  },
  {
    title: 'Web exploitation',
    competency: 4,
    category: ['CTFing', 'Web Development'],
  },
  {
    title: 'Communication',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'PHP',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['CTFing', 'Languages'],
  },
  {
    title: 'Cryptography',
    competency: 4,
    category: ['CTFing'],
  },
  {
    title: 'Debugging/Reverse Engineering - GBD/Web Debug/IDA/etc',
    competency: 4,
    category: ['CTFing', 'Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
