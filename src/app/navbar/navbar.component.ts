import { Component, ComponentFactory, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() showAboutShowcase: EventEmitter<boolean> = new EventEmitter();
  isClicked = false

  showAbout(){
    this.isClicked = !this.isClicked
      this.showAboutShowcase.emit(this.isClicked);
    }
}
