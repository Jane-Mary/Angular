import { Component } from '@angular/core';

//Component Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  name:string ='Our Beloved Showcase App'
  description:string = ' The best Angular showcase software'
  creators:any = {name:['Mr Kambang','Web Legends']};
  age = 40;
  price= 300

username:string = ''

  sayHi(){
    return 'Hello' + this.name + 'how are you?'
  }
  title = 'showcase';

}
