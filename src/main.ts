import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'bootstrap';
import '!style-loader!css-loader!sass-loader!./styles/main.scss';



import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app/app.module';




platformBrowserDynamic().bootstrapModule(AppModule);