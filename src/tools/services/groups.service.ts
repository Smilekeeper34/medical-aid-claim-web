import { Injectable } from '@angular/core';
import { ApisService } from './apis.service';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  constructor(private apis: ApisService) {

  }


  getUserGroups() {
    return this.apis.get(`/api/v1/group/all`);
  }
}
