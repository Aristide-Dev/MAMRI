import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import * as Icons from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect, useCallback } from 'react';

import {
  ArrowRight,
  Calculator,
  Building2,
  Coins,
  PiggyBank,
  Binary,
  Target,
  TrendingUp,
  Users,
  Gavel,
  Scale,
  Shield,
  CheckCircle,
  HandCoins,
  CircuitBoard,
  ShieldCheck,
  Handshake
}
  from 'lucide-react';

const directions = [
  {
    icon: Calculator,
    title: "Direction des Ressources Fiscales et Maîtrise des dépenses",
    description: "Optimisation de la collecte fiscale",
    href: route('directions.fiscales')
  },
  {
    icon: Building2,
    title: "Direction des Ressources Douanières",
    description: "Modernisation des douanes",
    href: route('directions.douanieres')
  },
  {
    icon: Coins,
    title: "Direction des Ressources Non Fiscales",
    description: "Diversification des revenus",
    href: route('directions.non_fiscales')
  },
  {
    icon: PiggyBank,
    title: "Direction de la Digitalisation",
    description: "Transformation numérique",
    href: route('directions.digitalisation')
  },
  // {
  //   icon: Binary,
  //   title: "Digitalisation",
  //   description: "Transformation numérique",
  //   href: route('directions.digitalisation')
  // }
];

const missions = [
  {
    icon: Target,
    title: "Notre Mission",
    description: "Accroître la mobilisation des ressources internes pour le développement de la Guinée"
  },
  {
    icon: TrendingUp,
    title: "Nos Objectifs",
    description: "Optimiser la collecte des ressources fiscales et douanières"
  },
  {
    icon: Users,
    title: "Notre Approche",
    description: "Une gouvernance collégiale impliquant toutes les parties prenantes"
  }
];

const slides = [
  {
    image: 'images/hero/CoverSite-PRG.jpg',
    title: 'Construire une Guinée plus forte',
    description: 'Mobilisation des Ressources Internes pour un développement durable.',
    buttons: [
      { label: 'En savoir plus', href: route('about.index'), style: 'primary' },
      { label: 'Nous contacter', href: route('contact.index'), style: 'secondary' },
    ],
  },
  {
    image: 'images/hero/mot_du_coordinateur_cover.jpg',
    title: 'Renforcer les capacités fiscales',
    description: "Des réformes innovantes pour élargir l'assiette fiscale.",
    buttons: [{ label: 'Découvrir les projets', href: route('directions.projets'), style: 'primary' }],
  },
  {
    image: 'images/hero/mamri_cover.jpg',
    title: 'Digitalisation et Traçabilité',
    description: 'Améliorer la gouvernance grâce à des outils modernes.',
    buttons: [
      { label: 'Explorer les initiatives', href: route('directions.digitalisation'), style: 'primary' },
    ],
  },
];

export default function Welcome() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    beforeChange: (_, next) => setActiveSlide(next),
    nextArrow: <Icons.ChevronRight className="slick-arrow slick-next" />,
    prevArrow: <Icons.ChevronLeft className="slick-arrow slick-prev" />,
    customPaging: i => (
      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeSlide ? 'bg-primary-600 scale-125' : 'bg-white/50'}`} />
    ),
  };

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(route('public.articles.featured'));
      setArticles(response.data);
      console.log("response.data", response.data);
    } catch (error) {
      console.error('Erreur lors du chargement des articles:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return (
    <AppLayout>
      <Head title="Bienvenue" description="Plateforme d'appui à la mobilisation des ressources internes" />

      {/* Hero Section avec animations améliorées */}
      <section className="relative overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative h-[40vh] min-h-[400px]">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
              </div>
              <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="text-white max-w-2xl">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg mb-4 leading-relaxed text-gray-200">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {slide.buttons.map((button, idx) => (
                      <a
                        key={idx}
                        href={button.href}
                        className={`px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center ${button.style === 'primary'
                          ? 'bg-primary text-white'
                          : 'bg-white text-gray-900'
                          }`}
                      >
                        {button.label}
                        <Icons.ChevronRight className="ml-2" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="relative mx-auto bg-gray-100 w-full">
        <div className="container mx-auto px-4 py-10  bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {/* Colonne gauche : Profil du Coordinateur */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src="/images/mohamed_lamine_doumbouya_coordinateur_mamri_2024.png"
                  alt="Dr Mohamed Lamine DOUMBOUYA"
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <h3 className="text-xl font-bold mb-1">Dr Mohamed Lamine DOUMBOUYA</h3>
                  <p className="text-sm text-white/90">Coordonnateur Général de la MAMRI</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4 line-clamp-4">
                  "Notre mission est de renforcer la mobilisation des ressources internes pour
                  un développement durable de la Guinée."
                </p>
                <a
                  href={route('about.mot_Coordinateur')}
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg"
                >
                  Mot du Coordonnateur
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Colonne centrale : Chantiers de la transition */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-primary to-primary-800 text-white">
                <h2 className="text-2xl font-bold text-center">Chantiers de la Transition</h2>
              </div>
              <div className="p-6 space-y-6">
                {[
                  {
                    icon: Users,
                    title: "LA REFONDATION DE L'ETAT",
                    description: "Prôner un fonctionnement dépersonnalisé et dépolitisé des institutions."
                  },
                  {
                    icon: Scale,
                    title: "L'APAISEMENT SOCIOPOLITIQUE",
                    description: "Apaiser les esprits et détendre une atmosphère sociopolitique."
                  },
                  {
                    icon: Gavel,
                    title: "LES RÉFORMES INSTITUTIONNELLES",
                    description: "Modernisation et renforcement des institutions publiques."
                  },
                  {
                    icon: Shield,
                    title: "LA LUTTE CONTRE LES PRÉVARICATIONS",
                    description: "Combat contre la corruption et les détournements."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne droite : Mission */}<div className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="p-6 bg-gradient-to-r from-primary to-primary-800 rounded-t-2xl text-white">
                <h2 className="text-2xl font-bold text-center">Notre Mission</h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {[
                    {
                      title: "Mobilisation des ressources",
                      description: "Intensifier la mobilisation des ressources internes pour le développement.",
                      icon: <HandCoins className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                    },
                    {
                      title: "Modernisation des systèmes",
                      description: "Moderniser les systèmes de collecte et de gestion des ressources.",
                      icon: <CircuitBoard className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    },
                    {
                      title: "Transparence opérationnelle",
                      description: "Renforcer la transparence et l'efficacité des processus.",
                      icon: <ShieldCheck className="w-6 h-6 text-primary-700 mt-1 flex-shrink-0" />
                    },
                    {
                      title: "Partenariats stratégiques",
                      description: "Développer des partenariats stratégiques nationaux et internationaux.",
                      icon: <Handshake className="w-6 h-6 text-primary-800 mt-1 flex-shrink-0" />
                    }
                  ].map((mission, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 group hover:translate-x-2 transition-transform"
                    >
                      {mission.icon}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{mission.title}</h3>
                        <p className="text-gray-700">{mission.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href={route('about.index')}
                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg
         shadow-lg hover:bg-primary-800 transition-all duration-300 group"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Missions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Ce que nous faisons</h2>
            <p className="text-lg text-gray-600">
              Découvrez notre mission, nos objectifs et notre approche pour le développement durable de la Guinée.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {missions.map((mission, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
              >
                <div className="flex items-center justify-center w-14 h-14 mb-3 bg-primary-100 rounded-full">
                  <mission.icon className="w-7 h-7 text-primary-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{mission.title}</h3>
                <p className="text-gray-700">
                  {mission.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directions de Projet */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-3">Nos Directions de Projet</h2>
            <p className="text-lg text-gray-100">Accédez rapidement aux principales initiatives visant à renforcer la mobilisation des ressources.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2">
            {directions.map((direction, index) => (
              <a
                key={index}
                href={direction.href}
                className="flex flex-col items-start p-5 bg-white rounded-lg shadow-md"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mb-3">
                  <direction.icon className="w-7 h-7 text-primary-800" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{direction.title}</h3>
                <p className="text-gray-700 text-sm">{direction.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>



      {/* Actualités */}
      <section className="py-16 bg-white">
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          </div>
        ) : (
          <>
            {/* Articles Grid */}
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Actualités</h2>
                <a href={route('actualites.index')} className="flex items-center text-primary hover:text-primary-800">
                  Toutes les actualités
                  <ArrowRight size={20} className="ml-2" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {articles?.map((item) => (
                  <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={"/storage/" + item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <span className="text-xs text-gray-500">{new Date(item.published_at).toLocaleDateString()}</span>
                      <h3 className="text-lg font-semibold mt-1 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{item.excerpt}</p>
                      <a
                        href={route('actualites.show', { slug: item.slug })}
                        className="text-primary text-sm"
                      >
                        Lire la suite
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </>
        )}
      </section>

      <style jsx>{`
        /* Animations personnalisées */
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-ken-burns {
          animation: ken-burns 20s ease-out infinite alternate;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        /* Styles du slider */
        .slick-dots {
          bottom: 2rem;
        }

        .slick-arrow {
          z-index: 10;
          width: 3rem;
          height: 3rem;
          background: white;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .slick-arrow:hover {
          background: #f3f4f6;
          transform: scale(1.1);
        }

        /* Autres styles personnalisés... */
      `}</style>
    </AppLayout>
  );
}
