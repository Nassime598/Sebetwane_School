import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitch } from './LanguageSwitch';
import { BookOpen, Users, Palette, Phone, Mail, MapPin, GraduationCap, School, Building2 } from 'lucide-react';

export const Home: React.FC = () => {
  const { language, translations } = useLanguage();

  const features = [
    { 
      icon: BookOpen, 
      title: translations.academics[language],
      description: translations.academicsDesc[language]
    },
    { 
      icon: Users, 
      title: translations.sports[language],
      description: translations.sportsDesc[language]
    },
    { 
      icon: Palette, 
      title: translations.arts[language],
      description: translations.artsDesc[language]
    },
  ];

  const stats = [
    { icon: GraduationCap, count: '750+', label: translations.students[language] },
    { icon: Users, count: '32', label: translations.teachers[language] },
    { icon: Building2, count: '5', label: translations.classrooms[language] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700">
      <header className="fixed w-full bg-blue-900/50 backdrop-blur-sm z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Sebetwane MS</h1>
          <LanguageSwitch />
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center text-white px-4">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: 'url("https://www.educationcannotwait.org/sites/default/files/styles/de2e_standard/public/2022-03/CAR_banner%20%281%29.jpg?h=d3e04ee7&itok=ZxTHzJOp")',
              filter: 'brightness(0.3)'
            }}
          ></div>
          <div className="relative z-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {translations.welcome[language]}
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              {translations.motto[language]}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <stat.icon className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-3xl font-bold">{stat.count}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
              {translations.about[language]}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg mx-auto">
                {translations.aboutText[language].split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-700 mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-12 bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {translations.vision[language]}
                </h3>
                <p className="text-lg text-blue-800">
                  {translations.visionText[language]}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
              {translations.programs[language]}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-blue-900 text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              {translations.contact[language]}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">{translations.phone[language]}</h3>
                    <p>+27 53 998 7068</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">{translations.email[language]}</h3>
                    <p>Andile.Mthembu2187@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">{translations.address[language]}</h3>
                  </div>
                </div>
              </div>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7143.506599341407!2d24.342243147455687!3d-26.463680000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ea20812e27e8fab%3A0xc852af525eeb5762!2sSebetwane%20Middle%20School!5e0!3m2!1sen!2sma!4v1743648182106!5m2!1sen!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-950 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Sebetwane Middle School. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};