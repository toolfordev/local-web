import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService extends ApiService {

  protected getApiPath(): string {
    return 'http://localhost:14003/global-variable';
  }

}
