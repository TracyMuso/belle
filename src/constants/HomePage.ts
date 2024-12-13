import type {
  NavLinks,
  ServiceCardType,
  TestimonialCardType,
} from '../../types';

export const NavLinkData: NavLinks[] = [
  {
    url: '/',
    text: 'Home',
  },
  {
    url: '/hair-styling',
    text: 'Hair Styling',
  },
  {
    url: '/nails',
    text: 'Nails',
  },
  {
    url: '/makeup',
    text: 'Makeup',
  },
  {
    url: '/lashes',
    text: 'Lashes',
  },
];

export const servicesCardData: ServiceCardType[] = [
  {
    img: '/assets/images/girl-with-pink-hair.jpeg',
    url: '/hair-styling',
    text: 'We do it all for short hair and long hair',
    title: 'Hair styling',
    services: [
      'Braids',
      'Hair Relaxing',
      'Hair Trims',
      'Hair Dyeing',
      'Hair Extensions',
      'Keratin Treatment',
      'Wash and go',
    ],
  },
  {
    img: '/assets/images/nails.jpeg',
    url: '#',
    text: 'Manicures and pedicures of your liking',
    title: 'Nails',
    services: [
      'Manicure',
      'Pedicure',
      'Polygel nails',
      'Acrylic nails',
      'Polygel removal',
      'Nail extenstions',
      'Nailbed treatment',
    ],
  },
  {
    img: '/assets/images/lashes.jpeg',
    url: '#',
    text: 'Amping up your face card',
    title: 'Facials',
    services: [
      'Lash extensions',
      'Acne treatment',
      'Face Massage',
      'Face masks',
      'Brow henna',
      'Brow threading',
      'Europen Facial',
    ],
  },
];

export const TestimonialData: TestimonialCardType[] = [
  {
    review:
      'I had such a refreshing timee, good conversations and a great mani-pedi. You wont go wrong with Belle',
    client: 'Jane Doe',
  },
  {
    review:
      'They can pull off any look you want and keep you coming back for more! I love to get my hair done at Belles. They are so professional!',
    client: 'Miss Kay',
  },
  {
    review:
      'I have been going to belle fo 2 years now. They never fail to make me fell beautiful.',
    client: 'Annie Lombe',
  },
];
