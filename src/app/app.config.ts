import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, HttpClientJsonpModule, HttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { headerInterceptor } from './sheard/interceptors/header.interceptor';
import { errorsInterceptor } from './sheard/interceptors/errors.interceptor';
import { provideToastr } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { lodingScreenInterceptor } from './sheard/interceptors/loding-screen.interceptor';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}




export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withViewTransitions()),
  provideClientHydration()
    , provideAnimations(), provideToastr()
    , provideHttpClient(withInterceptors([headerInterceptor, errorsInterceptor, lodingScreenInterceptor]))
    , importProvidersFrom(HttpClientModule, RouterModule, NgxSpinnerModule,
      TranslateModule.forRoot({
        defaultLanguage: "en",
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )

  ]
};
