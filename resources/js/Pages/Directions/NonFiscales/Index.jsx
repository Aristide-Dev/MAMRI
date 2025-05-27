import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { 
  Coins, ChevronRight, TrendingUp, FileText, 
  BarChart2, Database, Settings, Target, Globe,
  ArrowRight, Shield, Users, CheckCircle,
  ChartBar, ArrowUpRight, Sparkles, Book,
  Gavel, Building2, HandCoins, Gift
} from 'lucide-react';

const RessourcesNonFiscalesPage = () => {
  const content = {
    overview: {
      title: "Ressources Non Fiscales",
      description: "Les ressources non fiscales constituent une part importante des recettes de l'État, comprenant les revenus des services publics et l'exploitation du patrimoine national.",
      stats: {
        contribution: "1,2%",
        description: "du PIB en 2019"
      }
    },
    evolution: {
      years: [
        { year: "2021", amount: "1 170,68", pib: "159 337", pib_percent: "0.73%" },
        { year: "2022", amount: "1 771,86", pib: "170 314", pib_percent: "1.04%" },
        { year: "2023", amount: "1 126,51", pib: "190 694", pib_percent: "0.59%" },
        { year: "2024", amount: "1 881,024", pib: "238 037,7", pib_percent: "0.79%" }
      ]
    },
    performance2020: {
      expected: "812 852 176 000 GNF",
      target: "1 170 918 997 000 GNF",
      gap: "-358 066 821 000 GNF"
    },
    objectives: [
      {
        title: "Optimisation des Ressources",
        description: "Gestion efficace des ressources naturelles et patrimoniales",
        icon: Target
      },
      {
        title: "Digitalisation",
        description: "Modernisation des systèmes de collecte et de suivi",
        icon: Settings
      },
      {
        title: "Renforcement des Capacités",
        description: "Formation et équipement des agents",
        icon: Users
      },
      {
        title: "Transparence",
        description: "Amélioration de la gouvernance et du reporting",
        icon: Shield
      }
    ],
    reforms: [
      {
        title: "Télépaiement",
        description: "Mise en place des systèmes de paiement électronique",
        status: "seront partagées sous peu",
        progress: 75
      },
      {
        title: "Guichet Unique",
        description: "Centralisation des services et paiements",
        status: "seront partagées sous peu",
        progress: 60
      },
      {
        title: "Formation",
        description: "Programme de formation des agents",
        status: "seront partagées sous peu",
        progress: 85
      }
    ]
  };

  return (
    <AppLayout>
      <Head title="Ressources Non Fiscales - MAMRI" />
      
      {/* Hero Section Modernisée */}
      <div className="relative bg-gradient-to-br from-primary via-primary-700 to-primary-900 py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-700/90 to-primary-900/90"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <Coins className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Direction de Projet</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Ressources Non Fiscales
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              {content.overview.description}
            </p>
          </div>
        </div>
      </div>

      {/* Section Statistiques avec Cards Modernes */}
      <section className="relative -mt-16 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <ChartBar className="w-6 h-6 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Contribution au PIB</h3>
              <p className="text-3xl font-bold text-primary mt-2">{content.overview.stats.contribution}</p>
              <p className="text-sm text-gray-600 mt-1">du PIB en 2019</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Croissance Annuelle</h3>
              <p className="text-3xl font-bold text-green-500 mt-2">+15.2%</p>
              <p className="text-sm text-gray-600 mt-1">par rapport à 2022</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Target className="w-6 h-6 text-blue-500" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Objectif 2024</h3>
              <p className="text-3xl font-bold text-blue-500 mt-2">1.881</p>
              <p className="text-sm text-gray-600 mt-1">Milliards GNF</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Évolution avec Tableau Moderne */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Évolution des Recettes</h2>
            <p className="text-lg text-gray-600">Suivi annuel des performances financières</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Année</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Montant (Mds GNF)</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">PIB (Mds GNF)</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">% PIB</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {content.evolution.years.map((year, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{year.year}</td>
                      <td className="px-6 py-4 text-sm text-primary font-semibold">{year.amount}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{year.pib}</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-medium">{year.pib_percent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 px-6 py-3">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Source:</span> INS, Rapports d'exécution budgétaires, *PIB Prévisionnel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nature des RNF avec Design Moderne */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Book className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-medium">Comprendre les RNF</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nature et Structure des RNF</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une vue détaillée des composantes et du fonctionnement des Ressources Non Fiscales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">A propos des ressources non fiscales (RNF)</h3>
                  <p className="text-gray-600 text-justify">
                    Les ressources non fiscales ou autres recettes sont constituées par les recettes de la vente de services publics et de l'exploitation du patrimoine de l'État. <br />
                    Elles sont des recettes additives aux impôts sans aucun caractère obligatoire pour les personnes physique ou morales.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Volet 1 : Recettes Administratives</h4>
                  <ul className="space-y-2">
                    {[
                      "Les recettes judiciaires ",
                      "Les amendes de pénalités ",
                      "divers droits et frais administratifs sur contrôle de conformité et d'analyse",
                      "Les pièces d'état civil",
                      "Les recettes d'immatriculation et d'enregistrement ",
                      "Les permis divers",
                      "etc...",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                      <p className="text-gray-600 font-bold text-justify">
                        C'est aussi le produit sur les biens corporels et incorporels de l'Etat exploités à des fins de rentabilité, directement par l'Etat ou indirectement par toute autre personne.
                      </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Volet 2 : Exploitation du Patrimoine</h4>
                  <ul className="space-y-2">
                    {[
                      "Télécommunications",
                      "Espace aérien et maritime",
                      "Locations de bâtiments administratifs",
                      "Domaines publics",
                      "Dividendes des entreprises publiques et mixtes",
                      "etc...",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <Target className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enjeux et Potentiel</h3>
                    <p className="text-gray-600 text-justify">
                      Issues de la vente de services publics, les ressources non fiscales (autres recettes) représentent une opportunité importante pour accroître le taux de pression fiscale sans alourdir les obligations des contribuables.
                    </p>
                    <p className="text-gray-600 text-justify mt-4">
                      L'objectif de la Direction Projet Ressources Non Fiscales (DPRNF) est de maximiser leur contribution au budget de l'Etat en améliorant la mobilisation sur l'existant et en identifiant et formalisant les sources inexploitées et non maitrisées.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    "Amélioration de la mobilisation des ressources existantes",
                    "Identification des sources inexploitées",
                    "Modernisation des systèmes de collecte",
                    "Renforcement de la transparence"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary-800 rounded-2xl shadow-lg p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Impact et Potentiel</h3>
                    <p className="text-white/90">
                      Opportunité majeure pour accroître les revenus de l'État sans augmenter la pression fiscale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nature Juridique des RNF */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Gavel className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-medium">Cadre Juridique</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nature Juridique des RNF</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprendre le cadre légal et la classification des Ressources Non Fiscales
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Définition */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Définition</h3>
                  <p className="text-gray-600 text-justify leading-relaxed">
                    Les ressources non fiscales concernent toutes les recettes perçues par l'État ou les collectivités publiques qui ne proviennent pas des impôts ou des taxes. Autrement dit, ce sont des revenus que l'État obtient hors de la fiscalité.
                  </p>
                </div>
              </div>
            </div>

            {/* Types de Ressources */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 lg:row-span-2">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Types de Ressources Non Fiscales</h3>
                  <p className="text-gray-600">Classification des différentes sources de revenus non fiscaux</p>
                </div>
              </div>

              <div className="space-y-6 mt-6">
                {[
                  {
                    title: "Revenus du domaine public",
                    description: "Loyers, concessions, redevances payées pour l'utilisation de biens publics (terrains, bâtiments, etc.).",
                    icon: Building2
                  },
                  {
                    title: "Dividendes et revenus des participations de l'État",
                    description: "Profits versés par les entreprises publiques ou semi-publiques (ex. : bénéfices de sociétés où l'État détient des actions).",
                    icon: TrendingUp
                  },
                  {
                    title: "Produits, amendes et pénalités",
                    description: "Produits des démarches administratives, Amendes judiciaires, infractions routières, pénalités administratives, etc.",
                    icon: Gavel
                  },
                  {
                    title: "Recettes des ventes de biens et services",
                    description: "Vente de terrains publics à titre indicatif les droits d'inscription à l'université, les frais administratifs, etc.",
                    icon: HandCoins
                  },
                  {
                    title: "Dons et legs",
                    description: "Argent ou biens donnés volontairement à l'État ou à une collectivité.",
                    icon: Gift
                  },
                  {
                    title: "Aides ou subventions",
                    description: "Dans certains cas, ces aides de pays étrangers ou d'organismes internationaux sont considérées comme des recettes non fiscales.",
                    icon: Globe
                  }
                ].map((type, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-white rounded-lg">
                        <type.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {index + 1}. {type.title}
                        </h4>
                        <p className="text-gray-600 text-justify">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Caractéristiques clés */}
            <div className="bg-gradient-to-br from-primary to-primary-800 rounded-2xl shadow-lg p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-white/10 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Caractéristiques clés</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Recettes additives aux impôts sans caractère obligatoire</span>
                    </li>
                    <li className="flex items-center space-x-3 text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Services publics rémunérés selon des taux préalablement définis par les textes administratifs réglementaires</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Axes de Travail avec Cards Modernes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Target className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-medium">Nos Actions</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Axes de Travail Prioritaires</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nos domaines d'intervention stratégiques pour l'amélioration des RNF
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Formation",
                description: [
                  "Renforcement de capacité des agents administratifs, des élus locaux en matière de mobilisation des ressources propres en mettant l'accent sur l'aspect digitalisation",
                  "Renforcement de capacité des cadres des services juridiques à l'élaboration d'actes réglementaires conformes"
                ],
                color: "primary"
              },
              {
                icon: Settings,
                title: "Réorganisation",
                description: [
                  "Définition des normes permettant de recouvrer un minimum de recettes et de dividendes par le Trésor public",
                  "Réorganisation administrative et comptable pour la diversification"
                ],
                color: "blue"
              },
              {
                icon: FileText,
                title: "Révision des Textes",
                description: [
                  "Recensement et révision des textes générateurs de RNF"
                ],
                color: "green"
              },
              {
                icon: Globe,
                title: "Digitalisation",
                description: [
                  "Mise en place de moyen de paiement électronique via un Guichet unique, Trésor-paie, et les moyens de paiement mobile"
                ],
                color: "purple"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className={`p-3 bg-${item.color}/10 rounded-lg w-fit mb-6`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-500`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <ul className="space-y-4">
                  {item.description.map((desc, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <ChevronRight className={`w-5 h-5 text-${item.color}-500 mt-1 flex-shrink-0`} />
                      <span className="text-gray-600 text-justify">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Études et Réformes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-medium">Études et Réformes</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Propositions Clés</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Les propositions formulées permettront d'améliorer la mobilisation des RNF
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Users,
                    title: "Renforcement des Capacités",
                    description: "Renforcement des capacités des agents dans le domaine de la digitalisation"
                  },
                  {
                    icon: Settings,
                    title: "Réorganisation Administrative",
                    description: "Réorganisation administrative pour diversifier et rentabiliser les ressources"
                  },
                  {
                    icon: FileText,
                    title: "Modernisation des Textes",
                    description: "Révision des textes réglementaires et modernisation des circuits de collecte"
                  },
                  {
                    icon: Globe,
                    title: "Digitalisation des Paiements",
                    description: "Mise en place de moyen de paiement électronique via un Guichet unique, Trésor-paie, et les moyens de paiement mobile"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-justify">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Objectif Global</h3>
                    <p className="text-gray-600 text-justify">
                      Ces propositions visent à moderniser et optimiser la collecte des ressources non fiscales tout en renforçant les capacités des acteurs impliqués dans le processus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Réformes avec Timeline Moderne */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Settings className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-medium">Réformes</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Réformes en Cours</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Suivi des initiatives de modernisation et d'amélioration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.reforms.map((reform, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{reform.title}</h3>
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {reform.progress}%
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{reform.description}</p>
                <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${reform.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA Moderne */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary-700 to-primary-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Participez à l'amélioration des ressources non fiscales
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Ensemble, optimisons la mobilisation des ressources pour le développement de la Guinée
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={route('contact.index')}
                className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-50 transition-all"
              >
                Nous Contacter
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all"
              >
                En savoir plus
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default RessourcesNonFiscalesPage;