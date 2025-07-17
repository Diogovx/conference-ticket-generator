import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  readonly _http = inject(HttpClient);

  public getLocation(): Promise<string>{
    return new Promise((resolve, reject) => {
      if(!navigator.geolocation){
        reject('Geolocalização não é suportada por esse navegador.');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          try{
            const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=pt-BR`;
            const response: any = await firstValueFrom(this._http.get(url));

            const city = response.city || response.town || response.village || '';
            const subdivisionCode = response.principalSubdivisionCode;
            let locationAbbr = '';

            if(subdivisionCode && subdivisionCode.includes('-')){
              locationAbbr = subdivisionCode.split('-')[1];
            } else {
              locationAbbr = response.countryCode;
            }
            

            resolve(`${city}, ${locationAbbr}`);
          } catch(error){
            resolve('Location not found');
          }
        },
        (error) => {
          console.warn('User denied location permission.');
          resolve('Location not allowed.');
        }
      );
    });
  }
}
