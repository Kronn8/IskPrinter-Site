import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticatorService {

  private accessToken: string;
  private loginUrl: string;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.accessToken = window.localStorage.getItem('accessToken');
    this.fetchLoginUrl()
        .then((loginUrl) => this.loginUrl = loginUrl);
  }

  isLoggedIn(): boolean {
    return !!this.accessToken;
  }

  getLoginUrl(): string {
    return this.loginUrl;
  }

  private async fetchLoginUrl(): Promise<string> {
    const params = { 'callback-url': `${environment.frontendUrl}/code-receiver/` };
    const response = await this.http.get(`${environment.backendUrl}/login-url`, { observe: 'response', params })
      .toPromise();
    return (response.body as any).loginUrl;
  }

  logOut(): void {
    window.localStorage.removeItem('accessToken');
    this.accessToken = undefined;
    this.router.navigate(['']);
  }

  async getAccessTokenFromCode(code: string): Promise<string> {
    const body = {
      code
    };
    const response = await this.http.post(`${environment.backendUrl}/tokens`, body, { observe: 'response' })
      .toPromise();

    this.setAccessToken((response.body as any).accessToken);
    return this.accessToken;
  }

  async renewAccessToken(accessToken: string): Promise<string> {
    const body = { accessToken };
    const response = await this.http.post(`${environment.backendUrl}/tokens`, body, { observe: 'response' })
      .toPromise();
    this.setAccessToken((response.body as any).accessToken);
    return this.accessToken;
  }

  private getAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders({ Authorization: `Bearer ${this.getAccessToken()}` });
  }

  public async requestWithAuth(method: string, url: string, body?: any): Promise<HttpResponse<Object>> {
    let options = {
      headers: this.getAuthorizationHeader(),
      body
    };
    try {
      return await this.http.request(method, url, { ...options, observe: "response", responseType: "json" })
        .toPromise();
    } catch (error) {
      if (![401, 403].includes(error.status)) {
        throw error;
      }
    }
    this.accessToken = await this.renewAccessToken(this.accessToken);
    options = {
      headers: this.getAuthorizationHeader(),
      body
    };
    return await this.http.request(method, url, { ...options, observe: "response", responseType: "json" })
      .toPromise();
  }

  getAccessToken(): string {
    const accessToken = this.accessToken || window.localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('No access token exists.');
    }
    return accessToken;
  }

  private setAccessToken(accessToken: string): void {
    if (!accessToken) {
      throw new Error("Expected response body to contain accessToken, but it didn't.");
    }
    this.accessToken = accessToken;
    window.localStorage.setItem('accessToken', accessToken);
  }

}
