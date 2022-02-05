import { RESTDataSource } from 'apollo-datasource-rest'
import { GOOGLE_BOOKS_API_URL, VOLUMES_ENDPOINT } from './../../constants'

export class VolumesDataSource extends RESTDataSource{
    constructor(){
        super();
        this.baseURL=GOOGLE_BOOKS_API_URL
    }

    async searchVolumes(query:string ){
        const {items} = await this.get(GOOGLE_BOOKS_API_URL+ VOLUMES_ENDPOINT+query)
        return items;
    }
}