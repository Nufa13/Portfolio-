import {
  Code2,
  Globe,
  Database,
  MonitorSmartphone,
  PenTool,
  Network,
  Layers,
  Briefcase,
  GraduationCap,
  Rocket,
  Server,
  Braces,
} from 'lucide-react'

export const profile = {
  name: 'Niyas Fathima Nufa',
  firstName: 'Nufa',
  shortName: 'N.Nufa',
  role: 'Software Developer & IT Undergraduate',
  location: 'Sri Lanka',
  email: 'niyassfathimanufa@gmail.com',
  phone: '+94 77 638 0466',
  phoneRaw: '+94776380466',
  linkedin: 'https://www.linkedin.com/in/niyass-fathima-nufa-350020346',
  linkedinShort: 'niyass-fathima-nufa-350020346',
  whatsapp: 'https://wa.me/94776380466',
  cvFile: 'Nufa-CV.pdf',
  tagline: 'Building user-friendly apps at the intersection of design, data, and code.',
  about:
    'Aspiring Software Developer and Information Technology undergraduate with a strong foundation in software development, web development, database management, system analysis and design, and software engineering. Currently pursuing a Higher National Diploma in Information Technology (HNDIT) at the Sri Lanka Institute of Advanced Technological Education (SLIATE).',
  highlights: [
    { icon: GraduationCap, title: 'HNDIT — SLIATE', text: 'Higher National Diploma in IT' },
    { icon: Server, title: 'Full-Stack Focus', text: 'Frontend + Backend + Databases' },
    { icon: Rocket, title: '3 Major Projects', text: 'Shipped end-to-end' },
  ],
  typedWords: ['Full-Stack Web Developer', 'React.js Developer', 'UI/UX Enthusiast', 'Database Designer', 'Problem Solver'],
  stats: [
    { value: 3, suffix: '+', label: 'Projects Built' },
    { value: 9, suffix: '+', label: 'Core Technologies' },
    { value: 2, suffix: '+', label: 'Years of Learning' },
  ],
}

export const techChips = [
  'React.js', 'JavaScript', 'PHP', 'HTML', 'CSS', 'MySQL', 'PostgreSQL',
  'Supabase', 'Vite', 'C#',
]

export const skillGroups = [
  {
    id: 'frontend',
    label: 'Frontend Development',
    icon: MonitorSmartphone,
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'HTML & CSS', level: 90 },
      { name: 'Vite', level: 82 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Databases',
    icon: Server,
    skills: [
      { name: 'PHP', level: 82 },
      { name: 'MySQL', level: 88 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Supabase', level: 78 },
    ],
  },
  {
    id: 'cs',
    label: 'Core CS & Design',
    icon: Braces,
    skills: [
      { name: 'OOP (C# / Java-based)', level: 84 },
      { name: 'System Analysis & Design', level: 86 },
      { name: 'UI/UX Design', level: 82 },
      { name: 'Computer Networks', level: 76 },
    ],
  },
  {
    id: 'info',
    label: 'IS & Project Mgmt',
    icon: Layers,
    skills: [
      { name: 'Information Systems', level: 85 },
      { name: 'Project Management', level: 80 },
      { name: 'Software Engineering', level: 83 },
      { name: 'Team Collaboration', level: 90 },
    ],
  },
]

export const projects = [
  {
    name: 'Lenzora.lk',
    tagline: 'Digital Services Platform',
    description:
      'A full-stack digital services platform connecting users with local services. Features secure authentication, service search, booking flows, and an admin dashboard.',
    stack: ['React.js', 'PHP', 'MySQL', 'Supabase'],
    icon: Globe,
    accent: '#7c6cff',
    link: '#',
  },
  {
    name: 'Cricket Scorecard System',
    tagline: 'Sports Analytics System',
    description:
      'A web-based system for recording live cricket matches, managing ball-by-ball scores, player stats, and generating match summaries with a clean scorecard UI.',
    stack: ['JavaScript', 'PHP', 'PostgreSQL', 'CSS'],
    icon: Code2,
    accent: '#00d4ff',
    link: '#',
  },
  {
    name: 'Smart Travel Assistant',
    tagline: 'Travel Intelligence App',
    description:
      'An intelligent travel companion that recommends destinations, plans itineraries, and manages trip data — built with modern web technologies and a polished UI/UX.',
    stack: ['React.js', 'Supabase', 'Vite', 'CSS'],
    icon: Rocket,
    accent: '#ff5ea8',
    link: '#',
  },
]

export const education = [
  {
    status: 'Current',
    period: '2023 — Present',
    degree: 'Higher National Diploma in Information Technology (HNDIT)',
    school: 'Sri Lanka Institute of Advanced Technological Education (SLIATE)',
    points: [
      'Advanced coursework in software engineering, database management, system analysis & design',
      'Societies, group projects, and industry-relevant practical labs',
    ],
  },
]

export const experiences = [
  {
    icon: Briefcase,
    title: 'Academic & Personal Projects',
    subtitle: 'Full-Stack Development',
    description:
      'Independently designed, developed, and deployed multiple full-stack applications — from requirement analysis to UI/UX design, database modelling, and implementation.',
    points: [
      'Practised agile iteration, version control, and clean responsive design',
      'Collaborated in team settings, communicating technical decisions clearly',
    ],
  },
]

export const contact = {
  email: 'niyassfathimanufa@gmail.com',
  phone: '+94 77 638 0466',
  phoneRaw: '+94776380466',
  location: 'Sri Lanka',
  linkedin: 'https://www.linkedin.com/in/niyass-fathima-nufa-350020346',
  whatsapp: 'https://wa.me/94776380466',
  cvFile: 'Nufa-CV.pdf',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/niyass-fathima-nufa-350020346', icon: 'linkedin' },
    { label: 'WhatsApp', href: 'https://wa.me/94776380466', icon: 'whatsapp' },
    { label: 'Email', href: 'mailto:niyassfathimanufa@gmail.com', icon: 'mail' },
  ],
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const domainIcon = PenTool
export const databaseIcon = Database
export const networkIcon = Network