import { HttpInterceptorFn } from '@angular/common/http';

export const basicAuthInterceptor: HttpInterceptorFn = (req, next) => {
  const username = 'Omora';
  const password = 'Jinxvi2205';
  const token = btoa(`${username}:${password}`);

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Basic ${token}`
    }
  });

  return next(authReq);
};