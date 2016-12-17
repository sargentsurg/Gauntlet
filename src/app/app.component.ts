import { Component } from '@angular/core';

export class Hero {
    id: Number;
    name: String;
}

@Component({
    selector: 'gauntlet-app',
    template: '<h1>Hello {{name}} {{hero.name}} </h1>'
})
export class AppComponent {
    name:String = 'steve';

    hero: Hero = {
        id: 1,
        name: 'donald'
    }

}
