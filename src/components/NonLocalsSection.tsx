import React, { useState, useCallback, useEffect } from 'react';
import { Volume2, ChevronDown, ChevronUp } from 'lucide-react';
import { kannadaData } from '../data/kannadaData';
import { AudioPlayer } from '../utils/audioUtils';

const NonLocalsSection: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [audioPlayer] = useState(() => new AudioPlayer());
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      audioPlayer.cleanup();
    };
  }, [audioPlayer]);

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  const playAudio = useCallback(async (text: string, pronunciation: string) => {
    if (isPlaying) return;

    setIsPlaying(text);
    try {
      // Try to play using the pronunciation guide first
      await audioPlayer.playAudio(pronunciation);
    } catch (error) {
      console.error('Failed to play audio:', error);
      // If pronunciation fails, try the original text
      try {
        await audioPlayer.playAudio(text);
      } catch (secondError) {
        console.error('Fallback audio also failed:', secondError);
      }
    } finally {
      setIsPlaying(null);
    }
  }, [audioPlayer, isPlaying]);

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-earth mb-8">Learn Essential Kannada</h2>
      
      <div className="space-y-6">
        {kannadaData.map((section) => (
          <div key={section.title} className="bg-white/50 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden">
            <button
              className="w-full px-6 py-4 flex items-center justify-between text-left"
              onClick={() => toggleSection(section.title)}
            >
              <div>
                <h3 className="text-xl font-semibold text-earth">{section.title}</h3>
                <p className="text-earth/70 text-sm mt-1">{section.description}</p>
              </div>
              {expandedSection === section.title ? (
                <ChevronUp className="w-5 h-5 text-earth" />
              ) : (
                <ChevronDown className="w-5 h-5 text-earth" />
              )}
            </button>

            {expandedSection === section.title && (
              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {section.words.map((word) => (
                    <div
                      key={word.id}
                      className="bg-white/70 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-2xl font-semibold text-earth mb-1">
                            {word.kannada}
                          </h4>
                          <p className="text-earth/70">{word.english}</p>
                        </div>
                        <button
                          onClick={() => playAudio(word.kannada, word.pronunciation)}
                          disabled={isPlaying !== null}
                          className={`p-2 rounded-full transition-colors ${
                            isPlaying === word.kannada
                              ? 'bg-sage/20'
                              : 'hover:bg-sage/10'
                          }`}
                          title="Play pronunciation"
                        >
                          <Volume2 className={`w-5 h-5 ${
                            isPlaying === word.kannada
                              ? 'text-sage/50'
                              : 'text-sage'
                          }`} />
                        </button>
                      </div>
                      <p className="text-sm text-earth/60 italic">
                        Pronunciation: {word.pronunciation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 bg-sage/10 rounded-lg p-4">
        <p className="text-earth/80 text-sm">
          Click the speaker icon to hear the Kannada pronunciation. The audio playback helps you learn 
          the correct way to say each word or phrase.
        </p>
      </div>
    </div>
  );
};

export default NonLocalsSection;