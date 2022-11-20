import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormBuilder ,FormGroup} from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { BnademModel } from './bnadem.model';
@Component({
  selector: 'app-bnadem',
  templateUrl: './bnadem.component.html',
  styleUrls: ['./bnadem.component.css']
})
export class BnademComponent implements OnInit {

   formValue !: FormGroup ;
   BnademModelObj : BnademModel = new BnademModel();
   BnademData !: any ;
   showAdd !: boolean ;
   showUpdate !: boolean ;

  constructor( private fb:FormBuilder , private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.fb.group({
      id:[''],
      Name : [''],
      Email : [''],
      Age : [''],
    })
    this.getAllBnadem();
  }
  clickAddBnadem(){
    this.formValue.reset();
    this.showAdd=true ;
    this.showUpdate = false ;
  }
  postBnademDetails(){
   this.BnademModelObj = Object.assign({}, this.formValue!.value);
    // this.BnademModelObj.name = this.formValue.value.name ;
    // this.BnademModelObj.email = this.formValue.value.email ;
    // this.BnademModelObj.age = this.formValue.value.age ;

    this.api.postBnadem(this.BnademModelObj).subscribe(res => {
      console.log(res);
      alert("Bnadem tezaaade");
      this.formValue.reset();
      this.getAllBnadem();
    }, err => {
      alert ("Bnadem walou mabashe itezade");
    })
  }
getAllBnadem(){
  this.api.getBnadem().subscribe(res =>{
      this.BnademData = res ;
  })
}
deleteeBnadem(row : any){
  this.api.deleteBnadem(row.id).subscribe(res => {
    alert ("bndaem has been deleted");
    this.getAllBnadem();
  }, err =>{
    alert("Failed to delete employe information");

  });
}
EditeBnadem(row :any){
  this.showAdd=false ;
  this.showUpdate = true ;
this.formValue.controls['id'].setValue(row.id);
this.formValue.controls['Name'].setValue(row.Name);
this.formValue.controls['Email'].setValue(row.Email);
this.formValue.controls['Age'].setValue(row.Age);
}
UpdateBnademDetails(){
  this.BnademModelObj = Object.assign({}, this.formValue!.value);
  this.api.updateBnadem(this.BnademModelObj , this.BnademModelObj.id).subscribe(res => {
    alert("Updated successfully");
    this.getAllBnadem();
    let close = document.getElementById('cancel');
    close?.click();
    this.getAllBnadem();
    
   
  }, err =>{
    alert("ERROR in updating bnadem infomation");
  })
}

}
