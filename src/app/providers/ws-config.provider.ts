import { InjectionToken } from '@angular/core';

// tslint:disable-next-line:max-line-length
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjI2MTksImV4cCI6MTYxNzU0MDM3M30.PdecDih8o_P-hnnvTQDTnVgq4S4rhOAb0hc-YM-6Au4';

export const WS_CONNECTION_URL = new InjectionToken('ws-config', {
  providedIn: 'root',
  factory: () => `wss://beta-api.senuto.com/push/notifications?token=${accessToken}`,
});
