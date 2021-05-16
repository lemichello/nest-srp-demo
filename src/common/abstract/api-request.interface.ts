import { Request } from 'express';

export interface IApiRequest extends Request {
  user: {
    sub: string;
  };
}
