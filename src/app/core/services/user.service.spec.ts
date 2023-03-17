
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { User } from '../models/user.model';
import { UsersListMock } from '../constants/UsersListMock';

describe('UserService', () => {
  let userService: UserService;
  let httpTestingController: HttpTestingController;
  const baseUrl: string = "http://localhost:9191/api/database";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    userService = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should return a list of users', () => {
    const itemList: User[] = UsersListMock;

    userService.retrieveAllUsers().subscribe((data) => {
      expect(data).toEqual(itemList);
    });

    const req = httpTestingController.expectOne(`${baseUrl}` + `/users`);
    expect(req.request.method).toEqual('GET');
    req.flush(itemList);
  });

  it('should return a user by ID', () => {
    const mockUser: User = UsersListMock[0];

    userService.retrieveUser(1).subscribe((data) => {
      expect(data).toEqual(mockUser);
    });

    const req = httpTestingController.expectOne(`${baseUrl}` + `/users/1`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockUser);
  });

  it('should create a user and return it', () => {
    const mockUser: User = UsersListMock[0];

    userService.createUser(mockUser).subscribe((data) => {
      expect(data).toEqual(mockUser);
    });

    const req = httpTestingController.expectOne(`${baseUrl}` + `/create`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(mockUser);
    req.flush(mockUser);
  });

  it('should update a user and return it', () => {
    const mockUser: User = UsersListMock[0];

    userService.updateUser(mockUser).subscribe((data) => {
      expect(data).toEqual(mockUser);
    });

    const req = httpTestingController.expectOne(`${baseUrl}` + `/update/1`);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(mockUser);
    req.flush(mockUser);
  });

  it('should delete a user and return no content', () => {
    userService.deleteUser(1).subscribe((data) => {
      expect(data).toBeNull();
    });

    const req = httpTestingController.expectOne(`${baseUrl}` + `/delete/1`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(null, { status: 204, statusText: 'No Content' });
  });
});