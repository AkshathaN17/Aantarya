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
  },
  {
    id:'gandhi-bazaar',
    name:'Gandhi Bazzar',
    description: 'A timeless market where the old-world charm of flower stalls and vintage shops meets the pulse of modern Bangalore.',
    history:'Gandhi Bazaar, nestled in Basavanagudi, is a vibrant blend of tradition and modernity. Known for its bustling flower market and aromatic street food, it offers an authentic taste of Bangalore’s cultural essence. The area also features family-run silk shops, vintage bookstores, and handcrafted goods, alongside the spiritual significance of the nearby Bull Temple, making it a hidden gem.',
    imageUrl:'https://th-i.thgim.com/public/incoming/2kxf4b/article67443784.ece/alternates/FREE_1200/Gandhi_Bazar_05.jpg',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1582636714834-3ca8e6f6c46d?auto=format&fit=crop&q=80',
    streetViewUrl:'https://www.google.com/maps/place/Gandhi+Bazaar+Flower+Market/@12.9451615,77.5717031,3a,21.1y,240.24h,84.18t/data=!3m7!1e1!3m5!1s7HPbeQhdbovMnb7JcqFZIg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D5.816847687257507%26panoid%3D7HPbeQhdbovMnb7JcqFZIg%26yaw%3D240.23945180156537!7i13312!8i6656!4m14!1m7!3m6!1s0x3bae15f2e99d28ad:0x2c1d13e2af315f6c!2sGandhi+Bazaar+Flower+Market!8m2!3d12.9449464!4d77.5724053!16s%2Fg%2F11cssk8ps3!3m5!1s0x3bae15f2e99d28ad:0x2c1d13e2af315f6c!8m2!3d12.9449464!4d77.5724053!16s%2Fg%2F11cssk8ps3!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    id: 'chickpet',
    name: 'Chickpet',
    description: 'A historic marketplace known for its bustling streets, diverse shops, and vibrant atmosphere.',
    history: 'Chickpet, one of Bangalore’s oldest markets, dates back to the 16th century. Originally a trade center for merchants, it has evolved into a vibrant commercial hub, known for its wholesale textile shops, old-school goldsmiths, and vibrant street vendors. The area holds historical significance, reflecting Bangalore’s heritage, blending traditional commerce with modern-day hustle and bustle.',
    imageUrl: 'https://im.whatshot.in/img/2020/Jun/1495696269-horizontal-6-1547031124-1592899162.jpg',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&q=80&w=1000',
    streetViewUrl: 'https://www.google.com/maps/@12.9713658,77.5764999,3a,75y,15.72h,72.09t/data=!3m7!1e1!3m5!1sjF5mYooh8tEAdBu1E6dPJw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D17.906672810838955%26panoid%3DjF5mYooh8tEAdBu1E6dPJw%26yaw%3D15.715620297304213!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    id: 'bannerghatta-national-park',
    name: 'Bannerghatta National Park',
    description: 'A sprawling park with a zoo, butterfly park, and safari, perfect for nature and wildlife lovers.',
    history: 'Established in 1970, Bannerghatta Biological Park covers 1,100 hectares and was set up to provide a safe haven for wildlife. Originally a part of the Mysore Maharaja’s hunting grounds, it has since evolved into a conservation center, housing rare species such as tigers, lions, and elephants. The park also features a butterfly park and is known for its successful breeding programs aimed at preserving endangered species.',
    imageUrl: 'https://static.toiimg.com/photo/40193882.cms',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1564582686-b8e4a013a813?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjc0OXwwfDF8c2VhcmNofDkwfGJlYWxlcnklMjBhbmR8ZW58MHx8fHwxNjcwMTc0MjI3&ixlib=rb-1.2.1&q=80&w=1080',
    streetViewUrl: 'https://www.google.com/maps/@12.8003114,77.5727436,3a,75y,158.7h,68.91t/data=!3m7!1e1!3m5!1sAF1QipOkgUIOU5ZRendwrciiYk1sqxFf-t39k2iDywbM!2e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOkgUIOU5ZRendwrciiYk1sqxFf-t39k2iDywbM%3Dw900-h600-k-no-pi21.088771535452878-ya222.84119297396398-ro0-fo100!7i12000!8i6000?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'
},
{
  id: 'malleswaram',
  name: 'Malleswaram',
  description: 'A historic neighborhood with traditional South Indian temples, vibrant street markets, and iconic eateries.',
  history: 'Malleswaram, one of Bangalore’s oldest neighborhoods, was established in the 19th century and named after the Malleswara Temple, dedicated to Lord Shiva. The area retains much of its old-world charm, with a mix of narrow lanes, traditional homes, bustling local markets, and old-school eateries serving authentic South Indian cuisine.',
  imageUrl: 'https://bengaluruprayana.com/wp-content/uploads/2023/02/Malleshwaram-Street-Shopping.jpeg',
  fallbackImageUrl: 'https://images.unsplash.com/photo-1568584592-b55d44d0b67d?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjc0OXwwfDF8c2VhcmNofDN8fG1hbGxlc3dhcmFtfGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
  streetViewUrl: 'https://www.google.com/maps/@13.0055221,77.5692025,3a,75y,81.53h,94.71t/data=!3m7!1e1!3m5!1srWha0w5Om-Qg5Pun1_9dBA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-4.714589039278053%26panoid%3DrWha0w5Om-Qg5Pun1_9dBA%26yaw%3D81.53372269518476!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'
},
{
  id: 'dodda-alada-mara',
  name: 'Dodda Alada Mara (Big Banyan Tree)',
  description: 'A sprawling banyan tree covering over 3 acres, a serene spot perfect for nature lovers.',
  history: 'Located in the village of Kethohalli, the Dodda Alada Mara is over 400 years old. It is one of the largest banyan trees in India, with thousands of aerial roots creating a natural canopy. Revered for its longevity and cultural significance, the site is a peaceful retreat and a popular picnic destination for Bangaloreans.',
  imageUrl: 'https://bangaloretourism.in/images/v2/headers/dodda-alada-mara-bangalore-timings-entry-fee-bangalore-tourism-header-cr-ayushchh-04.jpg',
  fallbackImageUrl: 'https://images.unsplash.com/photo-1554782957-daeaa3a58a0e?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjc0OXwwfDF8c2VhcmNofDJ8fGJhbnlhbiUyMHRyZWV8ZW58MHx8fHwxNjcwMTc0MjI3&ixlib=rb-1.2.1&q=80&w=1080',
  streetViewUrl: 'https://www.google.com/maps/@12.9238588,77.386471,3a,75y,0h,80t/data=!3m7!1e1!3m5!1sAF1QipNU5n3VgHQPKs5oM6DwCZXKzXEzJtt7-uG8g2z9!2e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNU5n3VgHQPKs5oM6DwCZXKzXEzJtt7-uG8g2z9%3Dw900-h600-k-no-pi0-ya12.499993-ro0-fo100!7i8704!8i4352?entry=ttu'
}


  
];
