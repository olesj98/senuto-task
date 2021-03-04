export interface WsEvent<T = any> {
  created: string;
  id: number;
  parameters: T;
  type: string;
  user_id: number;
}
