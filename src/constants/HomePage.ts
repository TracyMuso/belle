import type {
  NavLinks,
  ServiceCardType,
  TestimonialCardType,
} from '../../types';

export const NavLinkData: NavLinks[] = [
  {
    url: '#about',
    text: 'About',
  },
  {
    url: '#services',
    text: 'Services',
  },
  {
    url: '#contact',
    text: 'Contact',
  },
];

export const servicesCardData: ServiceCardType[] = [
  {
    img: '/assets/images/girl-with-pink-hair.jpeg',
    url: '#',
    text: 'We do all. Wig installations, braids, wet look, trims, you name it',
    title: 'Hair braiding',
  },
  {
    img: '/assets/images/nails.jpeg',
    url: '#',
    text: 'Manicures and pedicures of your liking. We do both acrylic and polygel nails.',
    title: 'Nails',
  },
  {
    img: '/assets/images/lashes.jpeg',
    url: '#',
    text: 'Be it lash extensions or falsies. We got you covered!',
    title: 'Lashes',
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
      'I have been going to belle fo 2 years now. They never fail to make me fell beautiful.',
    client: 'Annie Lombe',
  },
  {
    review:
      'They can pull off any look you want and keep you coming back for more! I love to get my hair done at Belles. They are so professional!',
    client: 'Miss Kay',
  },
];
