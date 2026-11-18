// type
type IMenuDataType = {
  id: number;
  title: string;
  link: string;
  sub_menu?: {
    title: string;
    link: string;
  }[];
}

const menu_data: IMenuDataType[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'ABOUT US',
    // link: '/about',
    link: '#',
  },
  {
    id: 3,
    title: 'GAMES',
    // link: '/tournament',
    link: '#top-rated-games',
  },
  {
    id: 5,
    title: 'News',
    // link: '/blog',
    link: '#',
  },
  {
    id: 6,
    title: 'CONTACT',
    // link: '/contact',
    link: '#',
  },
];

export default menu_data;
