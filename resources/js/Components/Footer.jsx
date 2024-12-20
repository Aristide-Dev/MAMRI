import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-primary to-primary-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex flex-col gap-0 items-center">
              <img
                className="h-8"
                src="/images/logo/brandingGn.png"
                alt="Logo Lassiri"
                loading="lazy"
              />
              <img
                className="h-16"
                src="/images/logo/logo-mamri-02.png"
                alt="Logo Lassiri"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">À propos</h3>
            <p className="text-gray-300">
              La Mission d'Appui à la Mobilisation des Ressources Internes en République de Guinée.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>(+224) 629 00 13 79</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>contacts@mamri.gov.gn</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Sandervalia 6ème AV, Conakry- République de Guinée</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="http://www.presidence.gov.gn/" className="hover:text-primary">Présidence de la République de Guinée</a></li>
              <li><a href="https://www.primature.gov.gn/" className="hover:text-primary">Primature</a></li>
              <li><a href="https://mbudget.gov.gn/" className="hover:text-primary">Ministère du Budget</a></li>
              <li><a href="http://mef.gov.gn/" className="hover:text-primary">Ministère de L’Économie et des Finances</a></li>
              <li><a href="https://mines.gov.gn/" className="hover:text-primary">Ministère des Mines et de La Géologie</a></li>
              <li><a href="https://mpten.gov.gn/" className="hover:text-primary">Ministère des Postes (MPTEN)</a></li>
              <li><a href="http://www.mplan.gov.gn/" className="hover:text-primary">Ministère du Plan (MPDE)</a></li>
              <li><a href="https://www.bcrg-guinee.org/" className="hover:text-primary">Banque Centrale de la République de Guinée</a></li>
              <li><a href="https://dni.gov.gn/" className="hover:text-primary">Direction Nationale des Impôts</a></li>
              <li><a href="https://dgd.gov.gn/" className="hover:text-primary">Direction Générale des Douanes</a></li>
              {/* <li><a href="https://mef.gov.gn/" className="hover:text-primary">Direction Nationale du Trésor (DNTCP)</a></li> */}








            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/MAMRIGN" className="hover:text-primary">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com/MAMRI_GN" className="hover:text-primary">
                <Twitter size={24} />
              </a>
              <a href="https://www.linkedin.com/company/mamri-r%C3%A9publique-de-guin%C3%A9e/" className="hover:text-primary">
                <Linkedin size={24} />
              </a>
              <a href="https://www.youtube.com/channel/UC-_gdoMNdf_aG_3HMi6QCfA" className="hover:text-primary">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MAMRI - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;