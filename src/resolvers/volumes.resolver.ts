export const volumesResolver = {
    Query:{
        volumes:( _: any , { query }: any,{ dataSources }: any)=>{
            return dataSources.volumesAPI.searchVolumes(query)
        }
    }
}