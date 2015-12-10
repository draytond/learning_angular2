/// <reference path="typings/angular2/angular2.d.ts" />

import {
  Component,
  View,
  bootstrap,
} from "angular2/angular2";

@Component({
  selector: 'goodbye-world'
})
@View({
  template: `<article>Goodbye world</article>`
})
class GoodbyeWorld {
}

bootstrap(GoodbyeWorld);
