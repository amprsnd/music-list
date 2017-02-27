import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Demo App</h5>
          <p class="grey-text text-lighten-4">by ampersand</p>
        </div>
        <div class="col l4 offset-l2 s12">
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        2017
        <a class="grey-text text-lighten-4 right" href="https://github.com/amprsnd/music-list">Github repo</a>
      </div>
    </div>
  `
})

export class FooterComponent {}
