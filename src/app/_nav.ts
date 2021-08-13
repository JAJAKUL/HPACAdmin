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
        name: 'Contact Us',
        url: '/page-underconstruction',
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
