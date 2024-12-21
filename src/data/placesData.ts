interface Place {
  id: string;
  name: string;
  description: string;
  history: string;
  imageUrl: string;
  fallbackImageUrl: string;
  streetViewUrl: string;
}

export const historicalPlaces: Place[] = [
  {
    id: 'bangalore-palace',
    name: 'Bangalore Palace',
    description: 'Tudor-style architecture with fortified towers, arches, and green lawns',
    history: 'Built in 1887 by King Chamaraja Wadiyar, inspired by England\'s Windsor Castle. It was inspired by England’s Windsor Castle, holds secrets beyond its Tudor-style charm. Once owned by Rev. J. Garrett, it became a royal treasure of the Wadiyars. The palace boasts a hidden network of tunnels, a lavish ballroom for royal gatherings, and an extensive collection of rare 19th-century art. Its grounds, hosting global music icons, blend heritage with modernity, making it a timeless cultural marvel.',
    imageUrl: 'https://www.adotrip.com/public/images/areas/master_images/5c6ce85950820-Bangalore-Palace_Attractions.jpg',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&q=80&w=1000',
    streetViewUrl: 'https://www.google.com/maps/@12.9985504,77.5924988,3a,90y,138.52h,92.62t/data=!3m8!1e1!3m6!1sAF1QipNJ1VeOwNheCpdftgRRi6uoLFYqoWkLMCXyDH84!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNJ1VeOwNheCpdftgRRi6uoLFYqoWkLMCXyDH84%3Dw900-h600-k-no-pi-2.618483412322277-ya182.51994387025314-ro0-fo100!7i8704!8i4352?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    id: 'vidhana-soudha',
    name: 'Vidhana Soudha',
    description: 'Seat of Karnataka\'s state legislature, Neo-Dravidian architecture',
    history: 'Vidhana Soudha, an architectural marvel in Bengaluru, is the seat of Karnataka\'s legislature. Built in 1956, this Neo-Dravidian masterpiece symbolizes India\'s independence and cultural heritage. It\'s the largest legislative building in India, covering 60 acres. Remarkably, the building uses no steel, relying solely on granite, showcasing Karnataka\'s rich natural resources and traditional craftsmanship.',
    imageUrl: 'https://www.fundayholidays.com/wp-content/uploads/2020/07/Vidhana-Soudha-1.jpg',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&q=80&w=1000',
    streetViewUrl:' https://www.google.com/maps/@12.9796309,77.5906865,3a,68.9y,325.28h,114.31t/data=!3m8!1e1!3m6!1sAF1QipPqZgHvng_i2ff-RZmf6E2xNB9wf3vcpS_6aWni!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO_-wxCRnxYh8XjIML7GBRJjTcU9D_LI6pS-SE1%3Dw900-h600-k-no-pi-24.314639393043308-ya3.2752747144968453-ro0-fo100!7i8704!8i4352?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    id: 'lalbagh',
    name: 'Lalbagh Botanical Garden',
    description: 'Historic botanical garden with diverse flora and a glass house',
    history: 'Lalbagh Botanical Garden, established in 1760 by Hyder Ali and later expanded by Tipu Sultan, spans 240 acres and houses over 1,800 plant species. It features India\'s first lawn clock and an iconic glasshouse modeled after London\'s Crystal Palace. Known for its stunning annual flower shows, Lalbagh also boasts one of the world\'s oldest rock formations, dating back 3,000 million years.',
    imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_154851008_20200123162547_20200123162603.png',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&q=80&w=1000',
    streetViewUrl: 'https://www.google.com/maps/@12.9535438,77.5851863,3a,75y,123.59h,92.63t/data=!3m8!1e1!3m6!1sAF1QipP6iFgkdyEKmG-IZakRdp2Mwn-sPphl3M4YpO9m!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOZT7XDVV8wv5RpDpy5gpSotAcUrbW3H4AhIyhL%3Dw900-h600-k-no-pi-2.6299999999999955-ya12.577998962402305-ro0-fo100!7i12000!8i6000?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    id: 'iskcon',
    name: 'ISKCON Temple',
    description: 'Modern hilltop temple complex dedicated to Krishna',
    history: 'ISKCON Temple Bengaluru, inaugurated in 1997, blends traditional temple architecture with modern design atop Hare Krishna Hill. It houses deities of Krishna and Radha, offering a serene spiritual ambiance. Known for its massive gold-plated flagpost and Kalash Shikara, the temple features cultural programs, vegetarian eateries, and Vedic education, drawing millions of visitors seeking peace and devotion annually.',
    imageUrl: 'https://www.mustvisitplace.com/wp-content/uploads/2023/03/radha_krishna_temple_bangalore-scaled.jpg',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&q=80&w=1000',
    streetViewUrl: 'https://www.google.com/maps/@13.0106111,77.5512237,2a,90y,199.81h,91.22t/data=!3m7!1e1!3m5!1shFvGccQobuFI6uQcNXSYpQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-1.2203791469194414%26panoid%3DhFvGccQobuFI6uQcNXSYpQ%26yaw%3D199.80822554540032!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    id: 'visvesvaraya-museum',
    name: 'Visvesvaraya Industrial and Technological Museum',
    description: 'Interactive exhibits on science, technology, and history',
    history: 'The Visvesvaraya Industrial and Technological Museum, inaugurated in 1962, honors Sir M. Visvesvaraya, India\'s engineering legend. Spread across four floors, it features interactive exhibits on aerospace, electronics, biotechnology, and more. Highlights include a working model of a jet engine and the Wright Brothers\' flyer replica. A haven for curious minds, it blends learning with hands-on exploration.',
    imageUrl: 'https://i.pinimg.com/736x/3e/0f/fa/3e0ffade4721e5277fab72c1e6bcb7b8.jpg',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1582636714834-3ca8e6f6c46d?auto=format&fit=crop&q=80',
    streetViewUrl: 'https://www.google.com/maps/@12.9754448,77.5968018,3a,75y,238.46h,72.45t/data=!3m8!1e1!3m6!1sAF1QipOubcCtXWnpXBzNz0EEVAcmIrPfW4o0rEc9Ec2O!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOubcCtXWnpXBzNz0EEVAcmIrPfW4o0rEc9Ec2O%3Dw900-h600-k-no-pi17.551225600770977-ya238.45929685044283-ro0-fo100!7i6080!8i3040?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'
  }
];