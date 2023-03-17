
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LogsService } from './logs.service';
import { Log } from '../models/log.model';
import { UsersLogsMock } from '../constants/UsersLogsMock';


describe('LogsService', () => {
  let logsService: LogsService;
  let httpTestingController: HttpTestingController;
  const baseUrl: string = "http://localhost:9192/api/database";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LogsService]
    });
    logsService = TestBed.inject(LogsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(logsService).toBeTruthy();
  });

  it('should return a list of logs', () => {
    const mockLogList: Log[] = UsersLogsMock;

    logsService.retrieveAllLogs().subscribe((data) => {
      expect(data).toEqual(mockLogList);
    });

    const req = httpTestingController.expectOne(`${baseUrl}` + `/logs`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockLogList);
  });

  it('should return a log by ID', () => {
    const mockLog: Log = UsersLogsMock[0];

    logsService.retrieveLog(1).subscribe((data) => {
      expect(data).toEqual(mockLog);
    });

    const req = httpTestingController.expectOne(`${baseUrl}` + `/logs/1`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockLog);
  });

  it('should create a log and return it', () => {
    const mockLog: Log = UsersLogsMock[0];

    logsService.createLog(mockLog).subscribe((data) => {
      expect(data).toEqual(mockLog);
    });

    const req = httpTestingController.expectOne(`${baseUrl}` + `/logs/create`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(mockLog);
    req.flush(mockLog);
  });
});