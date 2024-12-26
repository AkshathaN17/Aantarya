import React from 'react';
import { MapPin, Users, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative pt-16 pb-32">
        <div className="mt-12 mx-auto max-w-7xl px-4 sm:mt-16">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-bold text-earth sm:text-5xl md:text-6xl">
              <span className="block">Welcome to</span>
              <span className="block text-sage">Aantarya</span>
            </h1>
            <p className="mt-2 max-w-md mx-auto text-base text-earth/80 sm:text-lg md:mt-3 md:text-xl md:max-w-3xl">
              Your cultural bridge to Bengaluru - connecting locals and visitors with the city's rich heritage, hidden gems, and vibrant culture.
            </p>
          </div>

          <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Users className="h-8 w-8 text-sage" />}
                title="For Locals"
                description="Test your knowledge about Bengaluru's culture and history through interactive quizzes."
              />
              <FeatureCard
                icon={<GraduationCap className="h-8 w-8 text-sage" />}
                title="For Non-Locals"
                description="Learn essential Kannada phrases and cultural insights to connect with the city."
              />
              <FeatureCard
                icon={<MapPin className="h-8 w-8 text-sage" />}
                title="Explore Together"
                description="Discover authentic eateries and historical landmarks with AR-enhanced navigation."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="absolute top-2 left-6">{icon}</div> {/* Adjusted top further */}
      <div className="pt-8"> {/* Reduced padding to push text up */}
        <h3 className="text-xl font-medium text-earth">{title}</h3>
        <p className="mt-2 text-earth/70">{description}</p>
      </div>
    </div>
  );
};

export default Hero;
