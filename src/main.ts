import { bootstrapApplication } from '@angular/platform-browser';
import { register } from 'swiper/element/bundle';

import { appConfig } from './app/app.config';
import { App } from './app/app';

// Register Swiper Web Components
register();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
