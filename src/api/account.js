import http from '@/utils/http';

export function findProfile(){
  return http.get('/account/profile');
}