import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear()
   title : string = `@copyright ${this.year}`
   constructor (){

   }
   ngOnInit(): void {
     
   }
   toggleAddTask(){
     console.log('exit');
   }
  }
