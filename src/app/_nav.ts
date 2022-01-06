import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },

  {
    name: 'Manage subscription',
    url: '/pages',
    icon: 'icon-tag',
    children: [

      {
        name: 'Home Inspectors',
        url: '/home-inspect-subsciption',
        icon: 'icon-people'
      },
      {
        name: 'Contractors',
        url: '/contractor-subscription',
        icon: 'icon-people'
      }
    ]
  },

  {
    name: 'Manage Services',
    url: '/manage-service',
    icon: 'icon-wrench'
  },
  {
    name: 'Realtors',
    url: '/manage-realtors',
    icon: 'icon-shield'
  },
  {
    name: 'Home Inspectors',
    url: '/manage-home-inspector',
    icon: 'icon-home',
  },
  {
    name: 'Buyers',
    url: '/manage-buyers',
    icon: 'icon-people'
  },
  {
    name: 'Contractors',
    url: '/manage-contractor',
    icon: 'icon-people',

  },
  {
    name: 'Newsletter',
    url: '/news-letter',
    icon: 'icon-people',

  },
  {
    name: 'Contact Us',
    url: '/contact-us',
    icon: 'icon-cursor'
  },
  {
    name: 'CMS ',
    url: '/pages',
    icon: 'icon-compass',
    children: [

      {
        name: 'About Us',
        url: '/about-us',
        icon: 'icon-speech'
      },
      {
        name: 'Home Page Banner',
        url: '/home-page-content',
        icon: 'icon-cursor'
      },
      {
        name: 'Home AboutUs Section',
        url: '/home-aboutus-banner',
        icon: 'icon-cursor'
      },
      {
        name: 'Contact Info',
        url: '/contact-info',
        icon: 'icon-cursor'
      },
      {
        name: 'How It Work',
        url: '/how-it-work',
        icon: 'icon-cursor'
      },
      {
        name: 'Terms & Conditions',
        url: '/terms-condition',
        icon: 'icon-docs'
      },
      {
        name: 'Privacy Policy',
        url: '/privacy-policy',
        icon: 'icon-doc'
      }
    ]
  },

];
