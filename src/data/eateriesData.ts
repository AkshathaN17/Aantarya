interface Eatery {
  id: string;
  name: string;
  description: string;
  specialty: string[];
  category: string;
  location: string;
  established: string;
  imageUrl: string;
  arViewUrl: string;
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
    imageUrl: 'https://imgmediagumlet.lbb.in/media/2017/10/59e60f3771bcd60e10287592_588c1a3f90cd0e15f04de93f_1508249399280.jpg',
    arViewUrl: 'https://mywebar.com/p/Project_3_2invc2cx79'
  },
  {
    id: 'mtr',
    name: 'Mavalli Tiffin Room (MTR)',
    description: 'Iconic restaurant known for traditional South Indian breakfast',
    specialty: ['Rava Idli', 'Masala Dosa', 'Filter Coffee', 'Bisibelebath'],
    category: 'South Indian',
    location: 'Lalbagh Road',
    established: '1924',
    imageUrl: 'https://4.bp.blogspot.com/-kRH__VosQj8/UenzTcz-ilI/AAAAAAAATjE/01JvjZ-ZyZ8/s1600/MTR.jpg',
    arViewUrl: 'https://mywebar.com/p/Project_4_8kvqi2hpr3'
  },
  {
    id: 'ctr',
    name: 'Central Tiffin Room (CTR)',
    description: 'Famous for its benne (butter) masala dosa',
    specialty: ['Benne Masala Dosa', 'Khara Bath', 'Coffee'],
    category: 'South Indian',
    location: 'Malleshwaram',
    established: '1920',
    imageUrl: 'https://static.tripzilla.in/media/5084/conversions/15bb108f-fc52-4cf5-9d22-3342e78ec683-w768.webp',
    arViewUrl: 'https://mywebar.com/p/Project_2_f51md28cj8'
  },
  {
    id: 'brahmin-coffee-bar',
    name: 'Brahmin\'s Coffee Bar',
    description: 'Popular breakfast spot known for idli-vada',
    specialty: ['Idli', 'Vada', 'Khara Bath', 'Filter Coffee'],
    category: 'South Indian',
    location: 'Shankarapuram',
    established: '1965',
    imageUrl: 'https://www.sheknowsgrub.com/wp-content/uploads/2016/05/DSC_0703-1024x678.jpg',
    arViewUrl: 'https://mywebar.com/p/Project_2_p12xrw68ej'
  },
  {
    id: 'veena-stores',
    name: 'Veena Stores',
    description: 'Iconic breakfast place famous for idli and khara bath',
    specialty: ['Idli', 'Khara Bath', 'Filter Coffee'],
    category: 'South Indian',
    location: 'Malleshwaram',
    established: '1977',
    imageUrl: 'https://pbs.twimg.com/media/FB6ETNNVkAIRrFZ.jpg:large',
    arViewUrl: 'https://mywebar.com/p/Project_0_88xhckn3w7'
  },
  {
    id: 'halli-mane',
    name: 'Halli Mane',
    description: 'Festive food offerings',
    specialty: ['Akki Rotti', 'Kai Holige', 'Kadubu'],
    category: 'South Indian',
    location: 'Malleshwaram',
    established: '1990',
    imageUrl: 'https://b.zmtcdn.com/data/pictures/7/51967/f058ee69d80346a84d9d67214a4dfc07.jpg?fit=around|750:500&crop=750:500;*,*',
    arViewUrl: 'https://mywebar.com/p/Project_1_zuirjmb7wm'
  }
];
