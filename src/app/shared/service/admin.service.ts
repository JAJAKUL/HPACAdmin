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
      if(!token1){
        localStorage.clear();
        this.router.navigate(['/login']);
      }
      console.log('token1====================', token1)
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

/***************************
 * Working on 05/08/2021 *
 ***************************/

/***************************
 * Call Common Service APIs *
 ***************************/

 changeStatusAllUsers(data): Observable<any> {
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
/***************************
 * End Common Service APIs *
 ***************************/

/***************************
 * Call User user apis *
 ***************************/

UserListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get_user_list`;
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

AddUser(data): Observable<any> {
  const API_URL = `${this.apiUrl}/register_user`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}

UserDetails(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit_user`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}

EditUser(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit_user`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}

DeleteUser(data): Observable<any> {
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

DeleteMultipleUser(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-multiple-user`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}

/***************************
 * end User user apis *
 ***************************/

/***************************
 * Call Buyers user apis *
 ***************************/

BuyersListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get_buyers_list`;
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

AddBuyers(data): Observable<any> {
  const API_URL = `${this.apiUrl}/register_buyers`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}

BuyersDetails(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit_buyers`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}

EditBuyers(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit_buyers`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}

DeleteBuyers(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-buyers`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}

DeleteMultipleBuyers(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-multiple-buyers`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}

/***************************
 * end Buyers user apis *
 ***************************/


/*************************************
 * Home Inspect Subscription APIs *
 *************************************/

AddHomeInspectSubscription(data): Observable<any> {
  const API_URL = `${this.apiUrl}/add-homeinspect-subscription`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

GetHomeInspectSubscriptionListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get-homeinspect-subscription-list`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

EditHomeInspectSubscription(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit-homeinspect-subscription`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
    }

DeleteHomeInspectSubscription(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-homeinspect-subscription`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

/*************************************
 * End Home Inspect Subscription APIs *
 *************************************/

/*************************************
 * Contractors Subscription APIs *
 *************************************/

AddContractorsSubscription(data): Observable<any> {
  const API_URL = `${this.apiUrl}/add-contractors-subscription`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

GetContractorsSubscriptionListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get-contractors-subscription-list`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

EditContractorsSubscription(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit-contractors-subscription`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
    }

DeleteContractorsSubscription(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-contractors-subscription`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

  ContractorsServiceDetails(data): Observable<any> {
  const API_URL = `${this.apiUrl}/contractors-service-details`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

/*************************************
 * End Contractors Subscription APIs *
 *************************************/

/***************************
 * Call Contractors user apis *
 ***************************/

 ContractorsListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get_contractors_list`;
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

ContractorsDetails(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get_user_details`;
  console.log(data)
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

AddContractors(data): Observable<any> {
  const API_URL = `${this.apiUrl}/register_contractors`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}



EditContractors(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit_contractors`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}

DeleteContractors(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-contractors`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}

DeleteMultipleContractors(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-multiple-contractors`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}

/***************************
 * end Contractors user apis *
 ***************************/

/***************************
 * Call HomeInspect user apis *
 ***************************/

 HomeInspectListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get_homeinspect_list`;
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


AddHomeInspect(data): Observable<any> {
  const API_URL = `${this.apiUrl}/register_homeinspect`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}

HomeInspectDetails(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get_user_details`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}

EditHomeInspect(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit_homeinspect`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}

DeleteHomeInspect(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-homeinspect`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}

DeleteMultipleHomeInspect(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-multiple-homeinspect`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}

/***************************
 * end HomeInspect user apis *
 ***************************/

/***************************
 * Call Service apis *
 ***************************/

 ServiceListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get_service_list`;
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

AddService(data): Observable<any> {
  const API_URL = `${this.apiUrl}/add_service`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}


EditService(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit_service`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}

DeleteService(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-service`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}

DeleteMultipleService(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-multiple-service`;
  return this.httpClient.post(API_URL, data,this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
}

/***************************
 * end HomeInspect user apis *
 ***************************/

/* start How it work service */
AddHowItWork(data): Observable<any> {
  const API_URL = `${this.apiUrl}/add-howit-work`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

GetHowItWorkListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get-howit-work-list`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

EditHowItWork(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit-howit-work`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
    }

DeleteHowItWork(data): Observable<any> {
  const API_URL = `${this.apiUrl}/delete-howit-work`;
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



GetContactInfoListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get-contact-info-list`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

EditContactInfo(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit-contact-info`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
    }



/* start How it work service */
AddHomePageContent(data): Observable<any> {
  const API_URL = `${this.apiUrl}/add-homepage-content`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

GetHomePageContentListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get-homepage-content-list`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

EditHomePageContent(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit-homepage-content`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
    }


/* start How it work service */
AddHomePageAboutUsBanner(data): Observable<any> {
  const API_URL = `${this.apiUrl}/add-homepage-aboutus-banner`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
  }

GetHomePageAboutUsBannerListData(data): Observable<any> {
  const API_URL = `${this.apiUrl}/get-homepage-aboutus-banner-list`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
    map(res => {
      return res;
    }),
    retry(1),
    catchError(this.error)
    );
  }

EditHomePageAboutUsBanner(data): Observable<any> {
  const API_URL = `${this.apiUrl}/edit-homepage-aboutus-banner`;
  return this.httpClient.post(API_URL, data, this.headerToken())
  .pipe(
      map(res => {
          return res;
      }),
      retry(1),
      catchError(this.error)
      );
    }



}
