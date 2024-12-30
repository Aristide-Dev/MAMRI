import React, { useState, useEffect, useCallback } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { 
  PlayCircle, Calendar, X, Download, Share2, ChevronLeft, ChevronRight,
  Search, Filter, ChevronDown, Eye, ZoomIn, Facebook, Twitter, Linkedin, 
  Instagram, Grid, List, SortAsc, SortDesc, FileText, Image as ImageIcon
} from 'lucide-react';

export default function MediaPage() {
  // États
  const [state, setState] = useState({
    medias: [],
    searchQuery: "",
    activeTab: "photo",
    selectedMedia: null,
    currentIndex: 0,
    selectedFilter: "all",
    isFullscreen: false,
    showShareMenu: false,
    isLoading: false,
    viewMode: 'grid',
    sortBy: 'date',
    sortOrder: 'desc',
    showFilters: false,
    currentPage: 1,
    itemsPerPage: 12,
    categories: ['Tous', 'Réunions', 'Formations', 'Événements', 'Présentations'],
    selectedCategory: 'Tous'
  });

  // Fonction utilitaire pour mettre à jour l'état
  const updateState = useCallback((updates) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  // Gestion des filtres et de la recherche
  const filteredMedia = useCallback(() => {
    return state.medias.filter(media => {
      const matchesSearch = media.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          media.category.toLowerCase().includes(state.searchQuery.toLowerCase());
      const matchesCategory = state.selectedCategory === 'Tous' || media.category === state.selectedCategory;
      const matchesType = state.activeTab === 'photo' ? media.type === 'image' : media.type === 'video';
      return matchesSearch && matchesCategory && matchesType;
    }).sort((a, b) => {
      const order = state.sortOrder === 'asc' ? 1 : -1;
      switch (state.sortBy) {
        case 'title':
          return order * a.title.localeCompare(b.title);
        case 'date':
          return order * (new Date(b.published_at) - new Date(a.published_at));
        default:
          return 0;
      }
    });
  }, [state.medias, state.searchQuery, state.selectedCategory, state.activeTab, state.sortBy, state.sortOrder]);

  // Pagination
  const paginatedMedia = useCallback(() => {
    const filtered = filteredMedia();
    const start = (state.currentPage - 1) * state.itemsPerPage;
    return filtered.slice(start, start + state.itemsPerPage);
  }, [filteredMedia, state.currentPage, state.itemsPerPage]);

  // Chargement des médias
  const fetchMedia = useCallback(async () => {
    updateState({ isLoading: true });
    try {
      const response = await axios.get('/api/medias', {
        params: {
          type: state.activeTab == 'photo' ? 'image' : state.activeTab,
          category: state.selectedCategory !== 'Tous' ? state.selectedCategory : undefined,
          search: state.searchQuery || undefined,
        }
      });
      updateState({ medias: response.data });
    } catch (error) {
      console.error('Erreur lors du chargement des médias:', error);
    } finally {
      updateState({ isLoading: false });
    }
  }, [state.activeTab, state.selectedCategory, state.searchQuery]);

  useEffect(() => {
    fetchMedia();
  }, [fetchMedia]);

  // Gestion du modal et de la navigation
  const handleMediaClick = useCallback((media, index) => {
    updateState({
      selectedMedia: media,
      currentIndex: index,
      isLoading: true
    });
  }, []);

  const handleNavigation = useCallback((direction) => {
    const filtered = filteredMedia();
    const newIndex = direction === 'next'
      ? (state.currentIndex + 1) % filtered.length
      : state.currentIndex === 0 ? filtered.length - 1 : state.currentIndex - 1;
    
    updateState({
      currentIndex: newIndex,
      selectedMedia: filtered[newIndex],
      isLoading: true
    });
  }, [state.currentIndex, filteredMedia]);


  const handlePrevImage = (e) => {
    e?.stopPropagation();
    setState(prev => ({ ...prev, ... isLoading= true }));
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : state.medias.length - 1));
    };
    
    const handleNextImage = (e) => {
    e?.stopPropagation();
    setState(prev => ({ ...prev, ... isLoading= true }));
    setCurrentImageIndex((prev) => (prev < state.medias.length - 1 ? prev + 1 : 0));
    };



  
  const isExternalUrl = (url) => url.startsWith('http://') || url.startsWith('https://');

  // Rendu des éléments média
  const renderMediaItem = useCallback((media, index) => {
    const isImage = media.type === 'image';
    const itemClasses = `
      ${state.viewMode === 'grid' ? 'aspect-w-16 aspect-h-9' : 'flex gap-4 items-center'}
      group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
      transition-all duration-300 transform hover:-translate-y-1 cursor-pointer
    `;

    return (
      <div key={media.id} className={itemClasses} onClick={() => handleMediaClick(media, index)}>
        {isImage ? (
          <div className="relative overflow-hidden">
            <img
              src={isExternalUrl(media.url) ? media.url : `/storage/${media.url}`}
              alt={media.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-2">
                      {media.category}
                    </span>
                    <h3 className="text-lg font-bold line-clamp-2">{media.title}</h3>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                      <ZoomIn size={20} />
                    </button>
                    <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={media.embed_url}
                title={media.title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {media.category}
                </span>
                <span className="text-sm text-gray-500 flex items-center">
                  <PlayCircle size={16} className="mr-1" />
                  {media.duration}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                {media.title}
              </h3>
            </div>
          </div>
        )}
      </div>
    );
  }, [state.viewMode]);

  return (
    <AppLayout>
      <Head title="Médiathèque MAMRI" />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary-800 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Médiathèque MAMRI</h1>
            <p className="text-xl text-white/90 mb-12">
              Explorez notre collection de photos et vidéos
            </p>

            {/* Barre de recherche et filtres */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full bg-white/10 backdrop-blur-sm text-white placeholder-white/60 px-12 py-4 rounded-xl"
                  value={state.searchQuery}
                  onChange={(e) => updateState({ searchQuery: e.target.value })}
                />
              </div>
              
              {/* Contrôles supplémentaires */}
              <div className="flex gap-2">
                <button
                  onClick={() => updateState({ showFilters: !state.showFilters })}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl text-white flex items-center"
                >
                  <Filter className="mr-2" />
                  Filtres
                </button>
                <button
                  onClick={() => updateState({ viewMode: state.viewMode === 'grid' ? 'list' : 'grid' })}
                  className="p-2 bg-white/10 backdrop-blur-sm rounded-xl text-white"
                >
                  {state.viewMode === 'grid' ? <Grid /> : <List />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        {/* Filtres étendus */}
        {state.showFilters && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catégorie
                </label>
                <select
                  value={state.selectedCategory}
                  onChange={(e) => updateState({ selectedCategory: e.target.value })}
                  className="w-full border-gray-300 rounded-lg"
                >
                  {state.categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Trier par
                </label>
                <select
                  value={state.sortBy}
                  onChange={(e) => updateState({ sortBy: e.target.value })}
                  className="w-full border-gray-300 rounded-lg"
                >
                  <option value="date">Date</option>
                  <option value="title">Titre</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ordre
                </label>
                <button
                  onClick={() => updateState({ sortOrder: state.sortOrder === 'asc' ? 'desc' : 'asc' })}
                  className="flex items-center px-4 py-2 border rounded-lg"
                >
                  {state.sortOrder === 'asc' ? <SortAsc className="mr-2" /> : <SortDesc className="mr-2" />}
                  {state.sortOrder === 'asc' ? 'Croissant' : 'Décroissant'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl shadow-lg p-1 inline-flex">
            <button
              onClick={() => updateState({ activeTab: 'photo' })}
              className={`px-6 py-2 rounded-lg transition-colors ${
                state.activeTab === 'photo' ? 'bg-primary text-white' : 'text-gray-600'
              }`}
            >
              <ImageIcon className="w-5 h-5 inline-block mr-2" />
              Photos
            </button>
            <button
              onClick={() => updateState({ activeTab: 'video' })}
              className={`px-6 py-2 rounded-lg transition-colors ${
                state.activeTab === 'video' ? 'bg-primary text-white' : 'text-gray-600'
              }`}
            >
              <PlayCircle className="w-5 h-5 inline-block mr-2" />
              Vidéos
            </button>
          </div>
        </div>

        {/* Grille de médias */}
        <div className={`grid gap-6 ${
          state.viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {paginatedMedia().map((media, index) => renderMediaItem(media, index))}
        </div>

      </div>

      

      <div className="py-6">
        {state.selectedMedia && (
          <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
            <button
              className="absolute top-4 left-4 text-white"
              onClick={() => updateState({ selectedMedia: null })}
            >
              Close
            </button>
            <div className="relative w-full max-w-4xl">
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 text-white"
                onClick={() => handleNavigation('prev')}
              >
                <ChevronLeft size={32} />
              </button>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                {state.selectedMedia.type === 'image' ? (
                  <img
                    src={state.selectedMedia.url.startsWith('http') ? state.selectedMedia.url : `/storage/${state.selectedMedia.url}`}
                    alt={state.selectedMedia.title}
                    className="w-full"
                  />
                ) : (
                  <iframe
                    src={state.selectedMedia.embed_url}
                    title={state.selectedMedia.title}
                    className="w-full h-96"
                    allowFullScreen
                  />
                )}
              </div>
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white"
                onClick={() => handleNavigation('next')}
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
