import type { NavLinks, ServiceCardType } from '../../types';

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
    img: 'src/assets/images/girl-with-pink-hair.jpeg',
    url: '#',
    text: 'We do all. Wig installations, braids, wet look, trims, you name it',
    title: 'Hair braiding',
  },
  {
    img: 'src/assets/images/nails.jpeg',
    url: '#',
    text: 'Manicures and pedicures of your liking. We do both acrylic and polygel nails.',
    title: 'Nails',
  },
  {
    img: 'src/assets/images/lashes.jpeg',
    url: '#',
    text: 'Be it lash extensions or falsies. We got you covered!',
    title: 'Lashes',
  },
];
