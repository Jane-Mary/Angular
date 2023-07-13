import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  activePage: string = 'Home Page'
  username:string = ''
  derivedStyles:string = 'color:red;'
  imageUrl:string = 'https://google.com/logo'
  proveText:string = ''

  updateText(event: any){
  this.proveText = event.target.value
  }

  refreshPage(){
    alert('Yayyy...! Ihave been clicked')

  }
}
