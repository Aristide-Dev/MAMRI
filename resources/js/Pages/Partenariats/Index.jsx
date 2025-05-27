import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { partners } from '@/constants/partners';

const PartenairesPage = () => {
  const partenaires = [
    {
      nom: "Banque Africaine de Développement",
      logo: "/images/partenaires/Banque-Africaine-de-Developpement.jpg",
      actions: [
        "Évaluation de la performance du système d’administration fiscal",
        "Modernisation du modèle technique d’administration fiscale",
        "Digitalisation"
      ]
    },
    {
      nom: "Agence Française de Développement",
      logo: "/images/partenaires/Agence-Francaise-de-Developpement.jpg",
      actions: [
        "Réforme du système de financement des collectivités locales",
        "Appui Institutionnel"
      ]
    },
    {
      nom: "Expertise France",
      logo: "/images/partenaires/expert_france.png",
      actions: [
        "Appui institutionnel à la modernisation",
        "Digitalisation des processus internes",
        "Formation et renforcement des capacités"
      ]
    }
  ];

  return (
    <AppLayout>
      <Head title="Partenaires - MAMRI" />

      {/* Section Introduction */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-800 text-white h-full max-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Nos Partenaires</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez nos partenaires stratégiques qui nous accompagnent dans la transformation et la modernisation des systèmes fiscaux, douaniers et locaux.
          </p>
        </div>
      </section>

      

      {/* Section Partenaires */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Nos Partenaires</h2>
            <p className="text-lg text-primary">Ensemble pour le développement de la Guinée</p>
          </div> */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-4 bg-primary-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  title={partner.name}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section Partenaires */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partenaires.map((partenaire, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <img
                    src={partenaire.logo}
                    alt={partenaire.nom}
                    className="w-24 h-24 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                    {partenaire.nom}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {partenaire.actions.map((action, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default PartenairesPage;
