import React, { useState } from 'react';
import { MapPin, Clock, Coffee, Info, ChevronRight, ImageOff } from 'lucide-react';
import { historicalPlaces } from '../data/placesData';
import { eateries } from '../data/eateriesData';

const SharedSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'places' | 'eateries'>('places');
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const [selectedEatery, setSelectedEatery] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string, fallbackUrl?: string) => {
    if (!imageErrors[id] && fallbackUrl) {
      // Try fallback image first
      setImageErrors(prev => ({ ...prev, [id]: true }));
      const img = document.getElementById(`img-${id}`) as HTMLImageElement;
      if (img) img.src = fallbackUrl;
    } else {
      // If fallback also fails or no fallback available, show error state
      setImageErrors(prev => ({ ...prev, [id]: true }));
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-earth mb-8">Explore Bengaluru</h2>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('places')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'places'
              ? 'bg-sage text-cream'
              : 'bg-sage/10 text-earth hover:bg-sage/20'
          }`}
        >
          Storied Landmarks
        </button>
        <button
          onClick={() => setActiveTab('eateries')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'eateries'
              ? 'bg-sage text-cream'
              : 'bg-sage/10 text-earth hover:bg-sage/20'
          }`}
        >
          Authentic Eateries
        </button>
      </div>

      {/* Places Section */}
      {activeTab === 'places' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {historicalPlaces.map((place) => (
            <div
              key={place.id}
              className="bg-white/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 bg-sage/5">
                {imageErrors[place.id] ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-earth/40">
                    <ImageOff className="w-12 h-12 mb-2" />
                    <span className="text-sm">Image unavailable</span>
                  </div>
                ) : (
                  <img
                    id={`img-${place.id}`}
                    src={place.imageUrl}
                    alt={place.name}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(place.id, place.fallbackImageUrl)}
                    loading="lazy"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-earth mb-2">{place.name}</h3>
                <p className="text-earth/70 mb-4">{place.description}</p>
                <a
                  href={place.streetViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sage hover:text-sage/80 transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Street View</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
                <button
                  onClick={() => setSelectedPlace(selectedPlace === place.id ? null : place.id)}
                  className="flex items-center text-sage hover:text-sage/80 transition-colors"
                >
                  <Info className="w-4 h-4 mr-1" />
                  <span> Legacy Bits</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
                {selectedPlace === place.id && (
                  <div className="mt-4 p-4 bg-sage/10 rounded-lg">
                    <p className="text-earth/80 text-sm">{place.history}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Eateries Section */}
      {activeTab === 'eateries' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eateries.map((eatery) => (
            <div
              key={eatery.id}
              className="bg-white/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 bg-sage/5">
                {imageErrors[eatery.id] ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-earth/40">
                    <ImageOff className="w-12 h-12 mb-2" />
                    <span className="text-sm">Image unavailable</span>
                  </div>
                ) : (
                  <img
                    id={`img-${eatery.id}`}
                    src={eatery.imageUrl}
                    alt={eatery.name}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(eatery.id)}
                    loading="lazy"
                  />
                )}
                <div className="absolute top-4 right-4 bg-sage text-cream px-3 py-1 rounded-full text-sm">
                  {eatery.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-earth mb-2">{eatery.name}</h3>
                <p className="text-earth/70 mb-4">{eatery.description}</p>
                <div className="flex items-center text-earth/60 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{eatery.location}</span>
                </div>
                <div className="flex items-center text-earth/60 text-sm mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Est. {eatery.established}</span>
                </div>
                <a
                  href={eatery.arViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 inline-flex items-center text-sage bg-earth/10 hover:bg-earth/20 transition-colors px-3 py-2 rounded-md text-sm"
                >
                  <span>View in AR</span>
                </a>

                <button
                  onClick={() => setSelectedEatery(selectedEatery === eatery.id ? null : eatery.id)}
                  className="flex items-center text-sage hover:text-sage/80 transition-colors"
                >
                  <Coffee className="w-4 h-4 mr-1" />
                  <span>Specialties</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
                {selectedEatery === eatery.id && (
                  <div className="mt-4 p-4 bg-sage/10 rounded-lg">
                    <div className="flex flex-wrap gap-2">
                      {eatery.specialty.map((item, index) => (
                        <span
                          key={index}
                          className="bg-sage/20 text-earth px-3 py-1 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SharedSection;
