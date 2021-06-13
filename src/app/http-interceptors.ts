import{Injectable}from '@angular/core'
import{HttpEvent,HttpInterceptor,HttpHandler,HttpRequest, HttpErrorResponse, HttpResponse}from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import{environment} from '../environments/environment.prod';
import{catchError, map}from 'rxjs/Operators'
import { ErrorResponseService } from './error-response/error-response.service';

@Injectable()
export class AuthheaderInterceptor implements HttpInterceptor{

    constructor(public errorresponseService:ErrorResponseService)
    {

    }
    intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{


        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        const url=request.clone({url:environment.baseUrl+request.url})
        return next.handle(url).pipe(
            
            map((event: HttpEvent<any>) => {

                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
              
                let data = {};
                data = {
                    reason: error && error.error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
               this.errorresponseService.openDialog(data);
               
                return throwError(error);
            }));
        
    } 
}