interface Eatery {
  id: string;
  name: string;
  description: string;
  specialty: string[];
  category: string;
  location: string;
  established: string;
  imageUrl: string;
}

export const eateries: Eatery[] = [
  {
    id: 'vidyarthi-bhavan',
    name: 'Vidyarthi Bhavan',
    description: 'Historic South Indian restaurant famous for its crispy masala dosa',
    specialty: ['Masala Dosa', 'Filter Coffee', 'Rava Vada'],
    category: 'South Indian',
    location: 'Gandhi Bazaar, Basavanagudi',
    established: '1943',
    imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/12/be/b0/91/the-popular-masala-dosa.jpg'
  },
  {
    id: 'mtr',
    name: 'Mavalli Tiffin Room (MTR)',
    description: 'Iconic restaurant known for traditional South Indian breakfast',
    specialty: ['Rava Idli', 'Masala Dosa', 'Filter Coffee', 'Bisibelebath'],
    category: 'South Indian',
    location: 'Lalbagh Road',
    established: '1924',
    imageUrl: 'https://4.bp.blogspot.com/-kRH__VosQj8/UenzTcz-ilI/AAAAAAAATjE/01JvjZ-ZyZ8/s1600/MTR.jpg'
  },
  {
    id: 'ctr',
    name: 'Central Tiffin Room (CTR)',
    description: 'Famous for its benne (butter) masala dosa',
    specialty: ['Benne Masala Dosa', 'Khara Bath', 'Coffee'],
    category: 'South Indian',
    location: 'Malleshwaram',
    established: '1920',
    imageUrl: 'https://static.tripzilla.in/media/5084/conversions/15bb108f-fc52-4cf5-9d22-3342e78ec683-w768.webp'
  },
  {
    id: 'brahmin-coffee-bar',
    name: 'Brahmin\'s Coffee Bar',
    description: 'Popular breakfast spot known for idli-vada',
    specialty: ['Idli', 'Vada', 'Khara Bath', 'Filter Coffee'],
    category: 'South Indian',
    location: 'Shankarapuram',
    established: '1965',
    imageUrl: 'https://www.sheknowsgrub.com/wp-content/uploads/2016/05/DSC_0703-1024x678.jpg'
  },
  {
    id: 'veena-stores',
    name: 'Veena Stores',
    description: 'Iconic breakfast place famous for idli and khara bath',
    specialty: ['Idli', 'Khara Bath', 'Filter Coffee'],
    category: 'South Indian',
    location: 'Malleshwaram',
    established: '1977',
    imageUrl: 'https://im.whatshot.in/img/2020/Jul/veena-stores-is-cropped-1595229176.png'
  },
  {
    id: 'halli-mane',
    name: 'Halli Mane',
    description: 'Festive food offerings',
    specialty: ['Akki Rotti', 'Kai Holige', 'Kadubu'],
    category: 'South Indian',
    location: 'Malleshwaram',
    established: '1990',
    imageUrl: 'https://content3.jdmagicbox.com/v2/comp/bangalore/i7/080pxx80.xx80.180824183056.l1i7/catalogue/hallimane-food-factory-bangalore-restaurants-ce2wgwbm86.jpg'
  }
];