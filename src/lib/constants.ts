import { FaLinkedinIn } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithub } from "react-icons/vsc";
import { VscGithubInverted } from "react-icons/vsc";
import { IoMailSharp } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

export const profileData = {
  backgroundImage: "/landing.avif",
  profileImage: "/aryan.jpeg",
  name: "Aryan Soni",
  title: "SENIOR SMART CONTRACT DEVELOPER",
  phone: "+91-9406561205",
  email: "aryan.s400029@gmail.com",
  address: "Indore, India",
  dob: "January 27, 1995",
  introduction:"Results-driven Senior Smart Contract Developer with extensive experience in designing and implementing complex decentralized finance (DeFi) solutions. Proficient in developing matching engine components, automated market makers (AMMs), and perpetual futures with robust contract integration. Demonstrated expertise in deploying solutions on Layer 2 networks such as Polygon, Arbitrum, and Optimism, ensuring scalability and efficiency.\nSkilled in crafting secure Solidity contracts adhering to ERC-20 standards, incorporating advanced security measures to safeguard user funds. Proven track record in implementing decentralized oracle solutions for accurate price feeds, as well as designing comprehensive perpetual settlement mechanisms utilizing Chainlink oracles.",
  socialLinks: [
    {
      href: "https://www.linkedin.com/in/aryan-soni-329297317/",
      icon: SlSocialLinkedin,
      iconAlt: FaLinkedinIn,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/aryansonid",
      icon: VscGithub,
      iconAlt: VscGithubInverted,
      label: "GitHub",
    },
    {
      href: "mailto:aryan.s400029@gmail.com",
      icon: IoMailOutline,
      iconAlt: IoMailSharp,
      label: "Email",
    },
  ],
};

export const expertiseData = [
  { category: "Blockchain Scaling", description: "Optimized sequencer performance with a 20% improvement. Improved transaction throughput and reduced latency." },
  { category: "DeFi & AMMs", description: "Developed high-throughput Perpetual Relayer service and optimized AMM with derivatives integration. Enhanced liquidity management for seamless trades." },
  { category: "L2 Scaling", description: "Designed and implemented L2 scaling solution, including Optimistic Rollups and Arbitrum Nitro. Increased transaction scalability and reduced fees." },
  { category: "Oracle Solutions", description: "Implemented a decentralized Oracle solution and developed oracles for on-chain data submission. Provided accurate off-chain data feeds for smart contracts." },
  { category: "Cross-Chain Bridges", description: "Developed Ethereum bridge contracts and designed fee structures for bridge transfers. Enabled seamless cross-chain transactions and asset transfers." },
  { category: "P2P Networks", description: "Developed a P2P communication hub for validators and implemented a Gossip Protocol. Strengthened validator network communication for better consensus." },
  { category: "Consensus Mechanisms", description: "Designed a perpetual settlement mechanism and developed POSA for Chainlink data bridge. Improved trustless data validation and seamless integration." },
];

export const experienceData = [
  {
    startMonth: "July",
    startYear: "2023",
    endYear: "",
    position: "Senior Smart Contract Developer",
    company: "Tokamak Network",
    description: `Developed and deployed a decentralized lending and borrowing protocol. 
    Implemented algorithmic interest rate models that dynamically adjust based on supply and demand. 
    Integrated collateral management systems to assess and manage user collateral. 
    Designed user-friendly interfaces for seamless interaction with the lending platform`,
  },
  {
    startMonth: "December",
    endMonth: "June",
    startYear: "2020",
    endYear: "2023",
    position: "Smart Contract Developer",
    company: "Peta Chain",
    description: `Engaged in comprehensive exploration of challenges within the blockchain industry. 
    Developed strategic solutions aimed at fortifying Petachain's presence in the finance sector. 
    Led education initiatives to cultivate a robust understanding of blockchain technology. 
    Conducted research and development to keep Petachain at the forefront of technology`,
  },
  {
    startMonth: "March",
    endMonth: "November",
    startYear: "2019",
    endYear: "2020",
    position: "Blockchain Developer",
    company: "Deqode Labs",
    description: `Developed a blockchain communication hub using libP2P and Go Ethereum. 
    Built blockchain infrastructure, including multisig wallets for Bitcoin, Ethereum, and Ripple. 
    Integrated major Ethereum Improvement Proposals (EIPs) to enhance platform capabilities. 
    Implemented liquidity for staked tokens using an ETH fork, optimizing yield generation`,
  },
];

export const educationData = [
  {
    startMonth: "August",
    startYear: "2014",
    endMonth: "May",
    endYear: "2018",
    course: "Bachelor of Technology",
    institute: "Indian Institute of Technology, Indore",
    grade: "8+",
  },
  {
    startMonth: "December",
    endMonth: "June",
    startYear: "2020",
    endYear: "2023",
    course: "Class XII",
    institute: "Christ Jyoti Senior Secondary School, Satna",
    grade: "8+",
  },
  {
    startMonth: "March",
    endMonth: "November",
    startYear: "2019",
    endYear: "2020",
    course: "Class X",
    institute: "Christukula Mission Higher Secondary School, Satna",
    grade: "8+",
  },
];

export const skills = ["Solidity", "Go", "JavaScript", "Blockchain & Web3", "Smart Contracts", "Hardhat", "Git", "NextJS"];

export const clientsData = {
  deqode: { src: "/deqode.svg", alt: "Deqode", width: 120, height: 60 },
  petachain: { src: "/petachain.png", alt: "Petachain", width: 60, height: 60 },
  tokamak: { src: "/Tokamak.svg", alt: "Tokamak", width: 60, height: 60 },
};

export const navItems = [
  { id: "experience", label: "EXPERIENCE" },
  { id: "education", label: "EDUCATION" },
  { id: "clients", label: "CLIENTS" },
  { id: "skills", label: "SKILLS" },
  { id: "expertise", label: "EXPERTISE" },
  { id: "contact", label: "CONTACT" },
];