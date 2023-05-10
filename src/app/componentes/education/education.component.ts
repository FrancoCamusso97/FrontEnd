import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/servicios/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  public educations:Education[]=[];
  public editEducation:Education | undefined;
  public deleteEducation:Education | undefined;
 
  
  constructor(private educationService:EducationService) { }

  ngOnInit(): void {
    this.getEducation();
  }

  public getEducation():void{
    this.educationService.getEducation().subscribe({
      next:(Response: Education[]) =>{
        this.educations=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      },
    });
  }

  public onOpenModal(mode:String, education?: Education):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode==='add'){
      button.setAttribute('data-bs-target','#addEducationModal');
    }else if(mode==='delete'){
      this.deleteEducation=education;
      button.setAttribute('data-bs-target','#deleteEducationModal');
    }else if(mode==='edit'){
      this.editEducation=education;
      button.setAttribute('data-bs-target','#editEducationModal');
    }
    container?.appendChild(button);
    button.click();

  }
  public onAddEducation(addForm: NgForm):void{
    document.getElementById('add-education-form')?.click();
    this.educationService.addEducation(addForm.value).subscribe({
      next:(Response:Education) =>{
        console.log(Response);
        this.getEducation();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    });
  }
  public onUpdateEducation(education: Education):void{
    this.editEducation=education;
    document.getElementById('edit-education-form')?.click();
    this.educationService.updateEducation(education).subscribe({
      next:(Response:Education) =>{
        console.log(Response);
        this.getEducation();
        
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }

    });
  }

  public onDeleteEducation(idEdu: number):void{
    this.educationService.deleteEducation(idEdu).subscribe({
      next:(Response:void) =>{
        console.log(Response);
        this.getEducation();
        
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }

    });
  }


  



}
