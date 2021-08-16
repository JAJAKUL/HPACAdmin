import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth/auth.guard';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { UnderconstructionComponent } from './views/error/underconstruction.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
    data: {
      title: 'Forgot Page'
    }
  },

  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule),
    data: {
      title: 'Reset Page'
    }
  },
  {
    path: 'header',
    component: DefaultLayoutComponent,
    data: {
      title: 'Header'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'admin-profile',
        loadChildren: () => import('./admin-profile/admin-profile.module').then(m => m.AdminProfileModule),
        data: {
          title: 'Admin Profile'
        }
      },
        {
          path: 'inspectors-dashboard',
          loadChildren: () => import('./inspectors-dashboard/inspectors-dashboard.module').then(m => m.InspectorsDashboardModule),
          data: {
            title: 'Inspectors dashboard'
          }
      },
      {
        path: 'manage-cms',
        loadChildren: () => import('./mange-cms/mange-cms.module').then(m => m.MangeCmsModule),
        data: {
          title: 'manage cms web site content'
        }
      },
      {
        path: 'page-underconstruction',
        component: UnderconstructionComponent,
        data: {
          title: 'Under Construction'
        }
      },

      {
        path: 'restaurant-user',
        loadChildren: () => import('./restaurant-user/restaurant-user.module').then(m => m.RestaurantUserModule),
        data: {
          title: 'restaurant user'
        }
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule),
        data: {
          title: 'contact-us'
        }
      },
      {
        path: 'about-us',
        loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule),
        data: {
          title: 'about-us'
        }
      },
      {
        path: 'privacy-policy',
        loadChildren: () => import('./privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule),
        data: {
          title: 'privacy-policy'
        }
      },
      {
        path: 'terms-condition',
        loadChildren: () => import('./terms-condition/terms-condition.module').then(m => m.TermsConditionModule),
        data: {
          title: 'terms-condition'
        }
      },
      {
        path: 'faq-content',
        loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule),
        data: {
          title: 'Faq'
        }
      },
      {
        path: 'manage-realtors',
        loadChildren: () => import('./layouts/manage-realtors/manage-realtors.module').then(m => m.ManageRealtorsModule),
        data: {
          title: 'Realtors'
        }
      },
      {
        path: 'manage-buyers',
        loadChildren: () => import('./layouts/manage-buyers/manage-buyers.module').then(m => m.ManageBuyersModule),
        data: {
          title: 'Buyers'
        }
      },
      {
        path: 'home-inspect-subsciption',
        loadChildren: () => import('./layouts/manage-homeinspect-subscription/manage-homeinspect-subscription.module').then(m => m.ManageHomeinspectSubscriptionModule),
        data: {
          title: 'Home Inspect Subscription'
        }
      },
      {
        path: 'contractor-subscription',
        loadChildren: () => import('./layouts/manage-contractors-subscription/manage-contractors-subscription.module').then(m => m.ManageContractorsSubscriptionModule),
        data: {
          title: 'Contractor Subscription'
        }
      },
      {
        path: 'manage-contractor',
        loadChildren: () => import('./layouts/manage-contractors/manage-contractors.module').then(m => m.ManageContractorsModule),
        data: {
          title: 'Contractor'
        }
      },
      {
        path: 'details-contractor/:id',
        loadChildren: () => import('./layouts/contrators-details/contrators-details.module').then(m => m.ContratorsDetailsModule),
        data: {
          title: 'Details Contractor'
        }
      },
      {
        path: 'manage-home-inspector',
        loadChildren: () => import('./layouts/manage-homeinspect/manage-homeinspect.module').then(m => m.ManageHomeinspectModule),
        data: {
          title: 'Home Inspectors'
        }
      },
      {
        path: 'details-home-inspector/:id',
        loadChildren: () => import('./layouts/home-inspector-details/home-inspector-details.module').then(m => m.HomeInspectorDetailsModule),
        data: {
          title: 'Home Inspectors Details'
        }
      },
      {
        path: 'manage-service',
        loadChildren: () => import('./layouts/manage-service/manage-service.module').then(m => m.ManageServiceModule),
        data: {
          title: 'Service'
        }
      },


    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
