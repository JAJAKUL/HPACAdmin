import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Router } from '@angular/router';
// const token = JSON.parse(localStorage.getItem('token'));
// const httpOptions: any = {
//   headers: new HttpHeaders({
//     'authorization': 'Bearer ' + token,
//     token: token
//   })
// }
@Injectable({
    providedIn: 'root'
})
export class AdminService implements OnInit {
    apiUrl = environment.endPoint;
    // token;
    // httpOptions;
    constructor(
        private httpClient: HttpClient,
        private router: Router,
        ) {

    }

     ngOnInit() {
      console.log('token======================dsfdsg dsfg dsf ====', this.headerToken());
      }
    // tslint:disable-next-line: typedef
    error(error: HttpErrorResponse) {
        let errorMessage;
        let obj = {};
        if (error.error instanceof ErrorEvent) {
            obj = {
                message: error.error,
                status: error.status,
            };
            errorMessage = obj;
        } else {
            obj = {
                message: error.error,
                status: error.status,
            };
            errorMessage = obj;
        }
      //   if (error.status === 401) {
      //     localStorage.clear();
      //      this.router.navigate(['/login']);
      // } else {

      // }
      return throwError(errorMessage);
    }
    headerToken() {
      const token1 = JSON.parse(localStorage.getItem('token'));
      const httpOptions: any = {
        headers: new HttpHeaders({
          'authorization': 'Bearer ' + token1,
          token: token1
        })
      }

      return httpOptions;
    }

    getservice(): Observable<any> {
        const API_URL = `${this.apiUrl}/getservice`;
        return this.httpClient.get(API_URL)
        .pipe(
            map(res => {
                return res;
            }),
            retry(1),
            catchError(this.error)
            );
    }
    getserviceWithId(id): Observable<any> {
        console.log('id====', id);
        const API_URL = `${this.apiUrl}/getserviceWithId/{id}`;
        return this.httpClient.get(API_URL)
        .pipe(
            map(res => {
                return res;
            }),
            retry(1),
            catchError(this.error)
            );
    }

    login(data): Observable<any> {
        const API_URL = `${this.apiUrl}/admin_login`;
      return this.httpClient.post(API_URL, data)
        .pipe(
            map(res => {
                return res;
            }),
            retry(1),
            catchError(this.error)
            );
    }

    GetAdminDetails(): Observable<any> {
        const API_URL = `${this.apiUrl}/get_admin_detail`;
        return this.httpClient.get(API_URL, this.headerToken())
        .pipe(
            map(res => {
                return res;
            }),
            retry(1),
            catchError(this.error)
            );
    }

    // RequestForgot(data): Observable<any> {
    //     const API_URL = `${this.apiUrl}/request_forgot`;
    //     return this.httpClient.post(API_URL, data)
    //     .pipe(
    //         map(res => {
    //             return res;
    //         }),
    //         retry(1),
    //         catchError(this.error)
    //         );
    // }
    // passwordReset(data): Observable<any> {
    //     const API_URL = `${this.apiUrl}/password-reset`;
    //     return this.httpClient.post(API_URL, data)
    //     .pipe(
    //         map(res => {
    //             return res;
    //         }),
    //         retry(1),
    //         catchError(this.error)
    //         );
    // }
    // getUserProfile(id): Observable<any> {
    //     console.log('id====', id);
    //     const API_URL = `${this.apiUrl}/profile/` + id;
    //     console.log('this.headerToken()=========', this.this.headerToken());
    //     return this.httpClient.get(API_URL, this.this.headerToken())
    //     .pipe(
    //         map(res => {
    //             return res;
    //         }),
    //         retry(1),
    //         catchError(this.error)
    //         );
    // }
    profileUpdate(data): Observable<any> {
        const API_URL = `${this.apiUrl}/edit_admin_detail`;
        console.log(API_URL);
        return this.httpClient.post(API_URL, data, this.headerToken())
        .pipe(
            map(res => {
                return res;
            }),
            retry(1),
            catchError(this.error)
            );
    }
    changePassword(data): Observable<any> {
        const API_URL = `${this.apiUrl}/change_admin_password`;
        return this.httpClient.post(API_URL, data, this.headerToken())
        .pipe(
            map(res => {
                return res;
            }),
            retry(1),
            catchError(this.error)
            );
    }

    forgotPassword(data): Observable<any> {
        const API_URL = `${this.apiUrl}/admin-forgot-password`;
        return this.httpClient.post(API_URL, data)
        .pipe(
            map(res => {
                return res;
            }),
            retry(1),
            catchError(this.error)
            );
    }

    resetPassword(data): Observable<any> {
        const API_URL = `${this.apiUrl}/admin-reset-password`;
        return this.httpClient.post(API_URL, data)
        .pipe(
            map(res => {
                return res;
            }),
            retry(1),
            catchError(this.error)
            );
    }

    addCategoryName(data): Observable<any> {
      const API_URL = `${this.apiUrl}/add-category-name`;
      return this.httpClient.post(API_URL, data, this.headerToken())
      .pipe(
          map(res => {
              return res;
          }),
          retry(1),
          catchError(this.error)
          );
  }



    UserListData(data): Observable<any> {
        const API_URL = `${this.apiUrl}/get-user-list`;
        console.log(API_URL)
        return this.httpClient.post(API_URL, data, this.headerToken())
        .pipe(
            map(res => {
                return res;
            }),
            retry(1),
            catchError(this.error)
            );
    }

    addUser(data): Observable<any> {
        const API_URL = `${this.apiUrl}/add-user`;
        return this.httpClient.post(API_URL, data, this.headerToken())
        .pipe(
            map(res => {
                return res;
            }),
            retry(1),
            catchError(this.error)
            );
    }


    userDetails(data): Observable<any> {
        const API_URL = `${this.apiUrl}/get-user-profile`;
        return this.httpClient.post(API_URL, data, this.headerToken())
        .pipe(
            map(res => {
                return res;
            }),
            retry(1),
            catchError(this.error)
            );
    }
    editUser(data): Observable<any> {
        const API_URL = `${this.apiUrl}/edit-user`;
        return this.httpClient.post(API_URL, data, this.headerToken())
        .pipe(
            map(res => {
                return res;
            }),
            retry(1),
            catchError(this.error)
            );
    }
    deleteUser(data): Observable<any> {
        const API_URL = `${this.apiUrl}/delete-user`;
        return this.httpClient.post(API_URL, data, this.headerToken())
        .pipe(
            map(res => {
                return res;
            }),
            retry(1),
            catchError(this.error)
            );
    }

    DeleteMultipleUsers(data): Observable<any> {
        const API_URL = `${this.apiUrl}/delete-multiple-category`;
        return this.httpClient.post(API_URL, data,this.headerToken())
        .pipe(
            map(res => {
                return res;
            }),
            retry(1),
            catchError(this.error)
            );
    }

/* add new service */

/* start category service */
  addCategory(data): Observable<any> {
    const API_URL = `${this.apiUrl}/add-category`;
    return this.httpClient.post(API_URL, data, this.headerToken())
    .pipe(
        map(res => {
            return res;
        }),
        retry(1),
        catchError(this.error)
        );
    }

  getActiveCategoryListData(): Observable<any> {
    const API_URL = `${this.apiUrl}/get-active-category-list`;
    return this.httpClient.get(API_URL, this.headerToken())
    .pipe(
      map(res => {
        return res;
      }),
      retry(1),
      catchError(this.error)
      );
    }

  getCategoryListData(data): Observable<any> {
    const API_URL = `${this.apiUrl}/get-category-list`;
    return this.httpClient.post(API_URL, data, this.headerToken())
    .pipe(
      map(res => {
        return res;
      }),
      retry(1),
      catchError(this.error)
      );
    }

  editCategory(data): Observable<any> {
    const API_URL = `${this.apiUrl}/edit-category`;
    return this.httpClient.post(API_URL, data, this.headerToken())
    .pipe(
        map(res => {
            return res;
        }),
        retry(1),
        catchError(this.error)
        );
      }

  DeleteCategory(data): Observable<any> {
    const API_URL = `${this.apiUrl}/delete-category`;
    return this.httpClient.post(API_URL, data,this.headerToken())
    .pipe(
        map(res => {
            return res;
        }),
        retry(1),
        catchError(this.error)
        );
    }

  DeleteMultipleCategory(data): Observable<any> {
    const API_URL = `${this.apiUrl}/delete-multiple-category`;
    return this.httpClient.post(API_URL, data,this.headerToken())
    .pipe(
        map(res => {
            return res;
        }),
        retry(1),
        catchError(this.error)
        );
    }

  changeStatusCategory(data): Observable<any> {
    const API_URL = `${this.apiUrl}/status-active-inactive`;
    return this.httpClient.post(API_URL, data,this.headerToken())
    .pipe(
        map(res => {
            return res;
        }),
        retry(1),
        catchError(this.error)
        );
    }
/* end category service */

/* start content about us, privacy policy, term and condition service */
AddContent(data): Observable<any> {
  const API_URL = `${this.apiUrl}/create-content`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

UpdateContent(data): Observable<any> {
  const API_URL = `${this.apiUrl}/save-update-content`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

GetAllContent(): Observable<any> {
  const API_URL = `${this.apiUrl}/get-allcontent`;
  return this.httpClient.get(API_URL, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );

    }

/* end content about us, privacy policy, term and condition service */

/* start FAQ's service */
AddFAQ(data): Observable<any> {
  const API_URL = `${this.apiUrl}/add-faq`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

GetFAQListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get-faq-list`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

EditFAQ(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit-faq`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
    }

DeleteFAQ(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-faq`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

DeleteMultipleFAQ(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-multiple-faq`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

/* end FAQ's service */

/* start Contact Us service */
AddContactUs(data): Observable<any> {
  const API_URL = `${this.apiUrl}/add-contact-us`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

GetContactUsListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get-contactus-list`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

DeleteContactUs(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-contact-us`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

DeleteMultipleContactUs(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-multiple-contactus`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

ContactUsReply(data): Observable<any> {
  const API_URL = `${this.apiUrl}/contactUs-reply`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

/* end Contact Us service */

/* start News Letter service */
AddNewsLetter(data): Observable<any> {
  const API_URL = `${this.apiUrl}/add-news-letter`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

GetNewsLetterListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get-news-letter-list`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

DeleteNewsLetter(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-news-letter`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

DeleteMultipleNewsLetter(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-multiple-news-letter`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

/* end News Letter service */

/* start Menus service */
AddMenus(data): Observable<any> {
  const API_URL = `${this.apiUrl}/add-menus`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

GetMenusListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get-menu-list`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

EditMenus(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit-menu`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
    }

DeleteMenus(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-menu`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

DeleteMultipleMenus(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-multiple-menu`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

/* end Menus service */

/* start Restaurant service */
AddRestaurant(data): Observable<any> {
  const API_URL = `${this.apiUrl}/add-restaurant`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

GetRestaurantListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get-restaurant-list`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

GetActiveRestaurantListData(): Observable<any> {
  const API_URL = `${this.apiUrl}/get-active-restaurant-list`;
  return this.httpClient.get(API_URL, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

EditRestaurant(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit-restaurant`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
    }

DeleteRestaurant(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-restaurant`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

DeleteMultipleRestaurant(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-multiple-restaurant`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

/* end Restaurant service */


/* start Promo code service */
AddPromoCode(data): Observable<any> {
  const API_URL = `${this.apiUrl}/add-promo-code`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

GetPromoCodeListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get-promo-code-list`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

EditPromoCode(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit-promo-code`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
    }

DeletePromoCode(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-promo-code`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

DeleteMultiplePromoCode(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-multiple-promo-code`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

/* end Promo code service */

/* end Dashboard service */
GetDashboardDataCard(): Observable<any> {
  const API_URL = `${this.apiUrl}/get-dashboard-card`;
  return this.httpClient.get(API_URL,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

/* end Dashboard service */


/* start State service */
AddState(data): Observable<any> {
  const API_URL = `${this.apiUrl}/add-state`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

GetStateListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get-state-list`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

EditState(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit-state`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
    }

DeleteState(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-state`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

DeleteMultipleState(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-multiple-state`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

 GetActiveState(): Observable<any> {
  const API_URL = `${this.apiUrl}/get-active-state`;
  return this.httpClient.get(API_URL,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

 GetActiveCity(): Observable<any> {
  const API_URL = `${this.apiUrl}/get-active-city`;
  return this.httpClient.get(API_URL,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

/* end state service */


/* start City service */
AddCity(data): Observable<any> {
  const API_URL = `${this.apiUrl}/add-city`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

GetCityListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get-city-list`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

EditCity(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit-city`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
    }

DeleteCity(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-city`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

DeleteMultipleCity(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-multiple-city`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }


/* end City service */

/* start Menus service */
AddCMS(data): Observable<any> {
  const API_URL = `${this.apiUrl}/add-CMS`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

GetCMSListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get-CMS-list`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

EditCMS(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit-CMS`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
    }

DeleteCMS(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-CMS`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }


/* end Menus service */

/* start state cityservice */

GetActiveStateListData(): Observable<any> {
  const API_URL = `${this.apiUrl}/get-active-state`;
  return this.httpClient.get(API_URL, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

GetStateCityListData(data:any): Observable<any> {
  const API_URL = `${this.apiUrl}/get-city-from-state`;
  return this.httpClient.post(API_URL, data)
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }


/* end state cityservice */


/* start Subscription service */
AddSubscription(data): Observable<any> {
  const API_URL = `${this.apiUrl}/add-subscription`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

GetSubscriptionListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get-subscription-list`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

EditSubscription(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit-subscription`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
    }

DeleteSubscription(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-subscription`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }


/* end Subscription service */

/* start Social media service */
AddSocialMedia(data): Observable<any> {
  const API_URL = `${this.apiUrl}/add-social-media`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

GetSocialMediaListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get-social-media-list`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

EditSocialMedia(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit-social-media`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
    }

DeleteSocialMedia(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-social-media`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }


/* end Social media service */

/* start Specialities service */
AddSpecialities(data): Observable<any> {
  const API_URL = `${this.apiUrl}/add-specialities`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

GetSpecialitiesListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get-specialities-list`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

EditSpecialities(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit-specialities`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
    }

DeleteSpecialities(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-specialities`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

DeleteMultipleSpecialities(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-multiple-specialities`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }


/* end Specialities service */

}
