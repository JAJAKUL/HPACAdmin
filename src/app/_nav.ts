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
        url: '/inspectors-dashboard',
        icon: 'icon-people'
      },
      {
        name: 'Contractors',
        url: '/page-underconstruction',
        icon: 'icon-people'
      }
    ]
  },

  {
    name: 'Manage Services',
    url: '/page-underconstruction',
    icon: 'icon-wrench'
  },
  {
    name: 'Realtors',
    url: '/page-underconstruction',
    icon: 'icon-shield'
  },
  {
    name: 'Home Inspectors',
    url: '/pages',
    icon: 'icon-home',
    children: [

      {
        name: 'Free Trial',
        url: '/page-underconstruction',
        icon: 'icon-briefcase'
      },
      {
        name: 'Subscribed',
        url: '/page-underconstruction',
        icon: 'icon-briefcase'
      },
      {
        name: 'UnSubscribed',
        url: '/page-underconstruction',
        icon: 'icon-briefcase'
      }
    ]
  },
  {
    name: 'Buyers',
    url: '/page-underconstruction',
    icon: 'icon-people'
  },
  {
    name: 'Contractors',
    url: '/pages',
    icon: 'icon-people',
    children: [

      {
        name: 'Free Trial',
        url: '/page-underconstruction',
        icon: 'icon-rocket'
      },
      {
        name: 'Subscribed',
        url: '/page-underconstruction',
        icon: 'icon-tag'
      },
      {
        name: 'UnSubscribed',
        url: '/page-underconstruction',
        icon: 'icon-ban'
      }
    ]
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
