import { Component, OnInit } from '@angular/core';
import { ChangeRequest, ModelRole } from '../model-role.model';
import { ModelRoleService } from '../model-role.service';

@Component({
  selector: 'app-model-role-read',
  templateUrl: './model-role-read.component.html',
  styleUrls: ['./model-role-read.component.sass']
})
export class ModelRoleReadComponent implements OnInit {

  modelRoleArray: ModelRole[] = [];
  modelChangeRequestArray: ChangeRequest[] = [];

  constructor(private service: ModelRoleService) { }

  ngOnInit(): void {
    this.getModelRoles();
  }

  getModelRoles(): void {
    this.service.findAllModelRoles()
    .subscribe({
      next: (response) => {
        this.modelRoleArray = response;
        console.log(this.modelRoleArray);
      },
      error: (errorResp) => {
        console.log(errorResp);
      }
    })
  }

  createNewModelRole(roleName: string, roleDesc: string, modal: HTMLElement): void {

    const newObj: ModelRole = {
      id: 0,
      name: roleName,
      description: roleDesc,
      sonRoles: []
    }

    this.service.createNewModelRole(newObj)
    .subscribe({
      next: (response) => {
        console.log(response);
        this.toggleModal(modal);
        alert("ModelRole created succesfully!");
        this.modelRoleArray.push(newObj);
      },
      error: (errorResp) => {
        console.log(errorResp);
        this.toggleModal(modal);
        alert("Failure creating ModelRole");
      }
    })

  }

  editExistingRoles(roleName: string, roleOrDesc: string, roleChange: string, roleChangeWhy: string, modal: HTMLElement): void {
    
    const newObj: ChangeRequest = {
      name: roleName,
      who: roleOrDesc,
      newname: roleChange,
      why: roleChangeWhy,
    }

    this.service.changeRequestRole(newObj)
    .subscribe({
      next: (response) => {
        console.log(response);
        this.toggleModal(modal);
        alert("Resquest sent succesfully!");
        this.modelChangeRequestArray.push(newObj);
      },
      error: (errorResp) => {
        console.log(errorResp);
        this.toggleModal(modal);
        alert("Request fail");
      }
    })
  }

  toggleModal(modal: any) {
    modal.classList.toggle('is-active');
  }

}
