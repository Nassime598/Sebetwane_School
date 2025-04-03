import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'af';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, Record<Language, string>>;
}

const translations = {
  welcome: {
    en: 'Welcome to Sebetwane Middle School',
    af: 'Welkom by Sebetwane Middelskool'
  },
  motto: {
    en: 'Nurturing Tomorrow\'s Leaders Through African Excellence',
    af: 'Koester Môre se Leiers Deur Afrika-uitnemendheid'
  },
  about: {
    en: 'Our Legacy of Excellence',
    af: 'Ons Nalatenskap van Uitnemendheid'
  },
  aboutText: {
    en: 'Established in 1995, Sebetwane Middle School stands as a beacon of educational excellence in Pretoria. Named after the visionary African leader Sebetwane, our school embodies the principles of ubuntu and academic distinction. We pride ourselves on our unique approach that blends modern education with African values and traditions.\n\nOur dedicated team of educators, many of whom have over 15 years of teaching experience, ensures that each student receives personalized attention and guidance. With a student-to-teacher ratio of 25:1, we maintain an environment where every child can thrive and reach their full potential.',
    af: 'Sebetwane Middelskool, gestig in 1995, staan as \'n baken van opvoedkundige uitnemendheid in Pretoria. Vernoem na die visioenêre Afrika-leier Sebetwane, beliggaam ons skool die beginsels van ubuntu en akademiese onderskeiding. Ons is trots op ons unieke benadering wat moderne onderwys met Afrika-waardes en tradisies vermeng.\n\nOns toegewyde span opvoeders, waarvan baie meer as 15 jaar onderwyservaring het, verseker dat elke student persoonlike aandag en leiding ontvang. Met \'n student-tot-onderwyser-verhouding van 25:1, handhaaf ons \'n omgewing waar elke kind kan floreer en hul volle potensiaal kan bereik.'
  },
  vision: {
    en: 'Our Vision',
    af: 'Ons Visie'
  },
  visionText: {
    en: 'To be the leading African middle school that empowers students to excel globally while remaining rooted in their cultural heritage.',
    af: 'Om die toonaangewende Afrika-middelskool te wees wat studente bemagtig om wêreldwyd uit te blink terwyl hulle in hul kulturele erfenis gewortel bly.'
  },
  programs: {
    en: 'Our Programs',
    af: 'Ons Programme'
  },
  academics: {
    en: 'Academic Excellence',
    af: 'Akademiese Uitnemendheid'
  },
  academicsDesc: {
    en: 'Our curriculum integrates STEM education with African innovation and problem-solving approaches. We offer advanced mathematics, coding, robotics, and environmental science programs that prepare students for the digital age while addressing local challenges.',
    af: 'Ons kurrikulum integreer STEM-onderwys met Afrika-innovasie en probleemoplossingsbenaderings. Ons bied gevorderde wiskunde, kodering, robotika en omgewingswetenskapprogramme wat studente voorberei vir die digitale era terwyl dit plaaslike uitdagings aanspreek.'
  },
  sports: {
    en: 'Sports Development',
    af: 'Sportontwikkeling'
  },
  sportsDesc: {
    en: 'From traditional sports like cricket and rugby to indigenous games, our comprehensive sports program develops physical skills, teamwork, and leadership. Our teams regularly compete in regional and national tournaments.',
    af: 'Van tradisionele sporte soos krieket en rugby tot inheemse spele, ons omvattende sportprogram ontwikkel fisiese vaardighede, spanwerk en leierskap. Ons spanne neem gereeld deel aan streeks- en nasionale toernooie.'
  },
  arts: {
    en: 'Arts & Culture',
    af: 'Kuns & Kultuur'
  },
  artsDesc: {
    en: 'Our arts program celebrates African creativity through music, dance, visual arts, and storytelling. Students learn traditional instruments, participate in cultural festivals, and create contemporary art that bridges tradition and innovation.',
    af: 'Ons kunsprogram vier Afrika-kreatiwiteit deur musiek, dans, visuele kunste en storievertelling. Studente leer tradisionele instrumente, neem deel aan kulturele feeste en skep kontemporêre kuns wat tradisie en innovasie oorbrug.'
  },
  contact: {
    en: 'Contact Us',
    af: 'Kontak Ons'
  },
  address: {
    en: 'TLAKGAMENG VILLAGE, TLAKGAMENG ,VRYBURG, 8616 South Africa',
    af: 'TLAKGAMENG VILLAGE, TLAKGAMENG ,VRYBURG, 8616, Suid-Afrika'
  },
  email: {
    en: 'Email Us',
    af: 'E-pos Ons'
  },
  phone: {
    en: 'Call Us',
    af: 'Skakel Ons'
  },
  stats: {
    en: 'School Statistics',
    af: 'Skoolstatistieke'
  },
  students: {
    en: 'Students',
    af: 'Studente'
  },
  teachers: {
    en: 'Teachers',
    af: 'Onderwysers'
  },
  classrooms: {
    en: 'Classrooms',
    af: 'Klaskamers'
  },
  visitUs: {
    en: 'Visit Us',
    af: 'Besoek Ons'
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  translations
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);