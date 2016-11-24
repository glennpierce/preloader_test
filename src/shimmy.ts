import {inject, Lazy, autoinject, singleton} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

// polyfill fetch client conditionally
const fetch = !self.fetch ? System.import('isomorphic-fetch') : Promise.resolve(self.fetch);

function mapToJson(map) : string {
    return JSON.stringify(Array.from(map.entries()));
    //return "";
}

// function jsonToMap(jsonStr : string) {
//     let json = JSON.parse(jsonStr);
//     return new Map<number, ITrack>(json);
//     //return new Map();
// }

export interface IPage {
  id: number;
  title: string;
  header: string;
  section_name: string;
}

export interface IFlatPage {
  id: number;
  title: string;
  header: string;
  section_name: string;
  sidebar_content: string,
  outer_content: string,
  content: string,
  active: boolean,
}

export interface ISearchResult {
  url: string;
  name: string;
}

@inject(Lazy.of(HttpClient))
export class Shimmy {
  debug : boolean = false;
  base : string = 'http://shimmybicestertest.carnegosystems.net/';
  pages: Array<IPage> = [];
  http: HttpClient;

  constructor(private getHttpClient: () => HttpClient) {

    this.http = this.getHttpClient();

    let self = this;

    //Authorization: Token 9914b05199c62bcf9418ad846dd0e4bbdfc6ee4b
    this.http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl(self.base)
        .withDefaults({
            headers: {
              'content-type': 'application/json',
              'Accept': 'application/json',
              'X-Requested-With': 'Fetch'
            }
          })
          ;
    });
  }

  isAuthenticated() {
    return true;
  }

  async getPages() {
      return [];
   }
}
