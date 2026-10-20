
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private readonly http = inject(HttpClient);

  // Replace with your actual backend endpoint.
  private readonly apiUrl = '/api/contact';

  sendMessage(payload: ContactPayload): Observable<unknown> {
    return this.http.post<unknown>(this.apiUrl, payload);
  }
}
