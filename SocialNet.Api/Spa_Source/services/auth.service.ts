import { IUser } from '../models/models';
import { HttpMethod, HttpService } from './http.service';

export class AuthService
{
  public static auth(user: IUser): Promise<number>
  {
    return HttpService.httpService(`User/login`, HttpMethod.POST, user);
  }
}