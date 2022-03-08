import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class EncryptedVariableService extends ApiService {

  protected getApiPath(): string {
    return 'http://localhost:14004/encrypted-variable';
  }

}
