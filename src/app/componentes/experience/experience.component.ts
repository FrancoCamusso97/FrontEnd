import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/servicios/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  public experiences:Experience[]=[];
  public editExperience:Experience | undefined;
  public deleteExperience:Experience | undefined;



  constructor(private experienceService:ExperienceService) { }

  ngOnInit(): void {
    this.getExperience ()
  }

  
  public getExperience():void{
    this.experienceService.getExperience().subscribe({
      next:(Response: Experience[]) =>{
        this.experiences=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      },
    });
  }


  public onOpenModal(mode:String, experience?: Experience):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode==='add'){
      button.setAttribute('data-bs-target','#addExperienceModal');
    }else if(mode==='delete'){
      this.deleteExperience=experience;
      button.setAttribute('data-bs-target','#deleteExperienceModal');
    }else if(mode==='edit'){
      this.editExperience=experience;
      button.setAttribute('data-bs-target','#editExperienceModal');
    }
    container?.appendChild(button);
    button.click();

  }

  public onAddExperience(addForm: NgForm):void{
    document.getElementById('add-education-form')?.click();
    this.experienceService.addExperience(addForm.value).subscribe({
      next:(Response:Experience) =>{
        console.log(Response);
        this.getExperience();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    });
  }

  public onUpdateExperience(experience: Experience):void{
    this.editExperience=experience;
    document.getElementById('edit-education-form')?.click();
    this.experienceService.updateExperience(experience).subscribe({
      next:(Response:Experience) =>{
        console.log(Response);
        this.getExperience();
        
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }

    });
  }

  public onDeleteExperience(idExp: number):void{
    this.experienceService.deleteExperience(idExp).subscribe({
      next:(Response:void) =>{
        console.log(Response);
        this.getExperience();
        
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }

    });
  }


}
