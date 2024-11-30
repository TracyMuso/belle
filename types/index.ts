export interface NavLinks {
  url: string;
  text: string;
}

export interface ServiceCardType {
  img: string;
  url: string;
  text: string;
  title: string;
  services: string[];
}

export interface TestimonialCardType {
  review: string;
  client: string;
}

export interface DetailedServiceCardType {
  title: string;
  text: string;
  styles: Styles[];
}

export interface Styles {
  price: string;
  name: string;
}
