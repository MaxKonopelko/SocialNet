import { HttpMethod, HttpService } from './http.service';
import { IUser, User } from '../models/models';

export class UserService
{
  public static getAll(): Promise<User[]>
  {
    return HttpService.httpService('User/get-all', HttpMethod.GET);
  }

  public static add(user: IUser): Promise<number>
  {
    return HttpService.httpService(`User/add`, HttpMethod.POST, user);
  }
}