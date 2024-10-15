// import { BotMessageSquare } from "lucide-react";
// import { BatteryCharging } from "lucide-react";
// import { Fingerprint } from "lucide-react";
// import { ShieldHalf } from "lucide-react";
// import { PlugZap } from "lucide-react";
// import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/1.jpeg";
import user2 from "../assets/profile-pictures/4.jpeg";
import user3 from "../assets/profile-pictures/2.jpeg";
import user4 from "../assets/profile-pictures/5.jpeg";
import user5 from "../assets/profile-pictures/3.jpeg";
import user6 from "../assets/profile-pictures/6.jpeg";


import app1 from "../assets/images/toggü Maam.png";
import app2 from "../assets/images/allô Dakar.png";
import app3 from "../assets/images/galsen.png";
import chef1 from "../assets/images/omzo.jpg";



export const navItems = [
  { label: "Domaines", href: "#" },
  { label: "Equipe", href: "#" },
  { label: "Realisations", href: "#" },
  { label: "Temoignages", href: "#" },
  
  
];

export const testimonials = [
  {
    user: "Cheikh Diop",
    company: "Solutions Teranga",
    image: user1,
    text: "Je suis extrêmement satisfait des services offerts. L'équipe a été réactive, professionnelle et a livré des résultats au-delà de mes attentes.",
  },
  {
    user: "Awa Ndiaye",
    company: "Technologies Baobab",
    image: user2,
    text: "Je ne pourrais pas être plus heureuse du résultat de notre projet. La créativité et les compétences en résolution de problèmes de l'équipe ont été essentielles pour concrétiser notre vision.",
  },
  {
    user: "Moussa Sarr",
    company: "Innovations Jambar",
    image: user3,
    text: "Travailler avec cette entreprise a été un plaisir. Leur attention aux détails et leur engagement envers l'excellence sont à saluer. Je les recommande vivement à toute personne recherchant un service de premier ordre.",
  },
  {
    user: "Fatou Fall",
    company: "Dynamiques Naatal",
    image: user4,
    text: "Collaborer avec l'équipe de Naatal a été une véritable révolution pour notre projet. Leur souci du détail et leurs solutions innovantes nous ont permis d'atteindre nos objectifs plus rapidement que prévu. Nous leur sommes reconnaissants pour leur expertise et leur professionnalisme !",
  },
  {
    user: "Oumar Thiam",
    company: "Créations Visionnaires",
    image: user5,
    text: "Je suis impressionné par le niveau de professionnalisme et de dévouement de l'équipe. Ils ont su dépasser nos attentes et fournir des résultats exceptionnels.",
  },
  {
    user: "Mariama Faye",
    company: "Systèmes Synergie",
    image: user6,
    text: "L'équipe a fait des efforts incroyables pour assurer la réussite de notre projet. Leur expertise et leur dévouement sont incomparables. J'ai hâte de collaborer à nouveau avec eux à l'avenir.",
  },
  
];
export const features = [
  {
    icon: <img src={app1} alt="Drag-and-Drop Interface Icon" />,
    text: "Toggü Maam",
    description:
      "Application pour apprendre les differents plats existant dans le monde avec tout les details de la cuisson",
  },
  {
    icon: <img src={app2}alt="Multi-Platform Compatibility Icon" />,
    text: "Allô Dakar",
    description:
      "Application de covoiturage pour la reservation de voiture pour les voyages dans les regions",
  },
  {
    icon: <img src={app3} alt="Templates Icon" />,
    text: "Senegal Decouverte",
    description:
      "Site web pour la decouverte du senegal avec les informations et details des places, hotels etc..",
  },
  
];


export const checklistItems = [
  {
    title: "Analyse & Conception",
    description:
      "Definir les besoins du client mettre en place la structure du projet et definir les tâches et leurs durées de realisation",
  },
  {
    title: "Realisation",
    description:
      "Collaboration de l'equipe de developpeur pour la realisation du projet",
  },
  {
    title: "Deploiement",
    description:
      "Mise a disposition de l'application pour le grand public avec un deploiement continue et securiser",
  },
  {
    title: "Maintenance",
    description:
      "Suivi et mise a jour du projet pour garantir la durabilité du projet",
  },
];

export const pricingOptions = [
  {
    title: "Mouhamadou Mansour SY",
    post: "CEO",
    image: <img src={chef1} alt="Drag-and-Drop Interface Icon" />,
    
  },
  {
    title: "Oumar THIOMBANE",
    post: "DEPUTY CEO",
    image: <img src={chef1} alt="Drag-and-Drop Interface Icon" />,
  },
  {
    title: "Diouma BALDE",
    post: "FRONTEND DEVELOPER",
    image: <img src={chef1} alt="Drag-and-Drop Interface Icon" />,
    
  },
  {
    title: "Ousmane DIALLO",
    post: "BACKEND DEVELOPER",
    image: <img src={chef1} alt="Drag-and-Drop Interface Icon" />,
  },
  
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
