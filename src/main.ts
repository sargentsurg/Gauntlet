import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app/app.module';

//scss
import '!style-loader!css-loader!sass-loader!./styles/main.scss';



platformBrowserDynamic().bootstrapModule(AppModule);