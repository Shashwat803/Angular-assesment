import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Data } from '../data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
 
  //dropdownList: any[]= [];
  
   ngOnInit() {
  
  }
  dropdownList = [
    { item_id: 1, item_text: 'Angular' },
    { item_id: 2, item_text: 'React' },
    { item_id: 3, item_text: 'Html' },
    { item_id: 4, item_text: 'Css' },
    { item_id: 5, item_text: 'JS' }

  ];
   selected = [{ item_id: 1, item_text: "Angular" }]

  data!:Data
  dataArr:Data[] = []
  
    constructor(private router:Router){
  this.data = new Data()
}

onSave(){
this.dataArr.push(this.data)
const isData = localStorage.getItem('UserData')
if(isData == null){
  const newdata = []
  newdata.push(this.data)
  localStorage.setItem('UserData', JSON.stringify(newdata))
}
else{
  const oldData  = JSON.parse(isData)
  oldData.push(this.data)
  localStorage.setItem('UserData',JSON.stringify(oldData))
}
}
logout(){
  this.router.navigate(['login'])
}

}
