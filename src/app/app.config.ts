import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { environment } from '../env/env.dev';
import { errInterceptor } from '../tools/interceptors/err.interceptor';
import { tokenInterceptor } from '../tools/interceptors/token.interceptor';
import { JwtHelperService } from '@auth0/angular-jwt';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    provideHttpClient(withInterceptors([errInterceptor, tokenInterceptor])),
    { provide: 'baseUrl', useValue: environment.baseUrl },
    provideAnimations(),JwtHelperService
  ],
};
