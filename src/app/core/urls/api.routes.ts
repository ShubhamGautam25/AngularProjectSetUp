import { environment } from "../../../environments/environment";
const REST_APIS = environment.REST_APIS;

export const APIS = {
    // need to change this path
    getAllReports: REST_APIS + "processingapi/configurable_filters/reports/" 
};