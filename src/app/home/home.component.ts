import { Component, OnInit } from '@angular/core';
import { data } from '../data';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl:'./home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private _ApiDataService:ApiDataService){

  }
  
  usersData:data[]=[]
 
  ngOnInit(): void {
    this._ApiDataService.getData().subscribe({
      next:(res)=>{

        this.usersData=res;
        console.log(res);
        
      },
      error:(err)=>{
        console.log(err);
      }
    

    })
  }
  

  
}
