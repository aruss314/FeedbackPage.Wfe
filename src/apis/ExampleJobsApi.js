import {URL, URLSearchParams } from "url"

export function JobsApi () {
    return ({
        GetJobs,
        PostJobs,
        GetJobByJobId,
        DeleteJobByJobId,
        PatchJobByJobId
    });
}

async function GetJobs(jobsRequest, access_token){
    try{
        var url = new URL(DatalakeAccessBaseUrl)
        var preppedParams = [];

        // We have to do this becasue we're passing data via querystring instead of a post
        Object.keys(jobsRequest).forEach(key => 
            preppedParams.push([key,''+jobsRequest[key]])
        );

        url.search = new URLSearchParams(preppedParams).toString();

        const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            //'Authorization' : 'Bearer '+ access_token
        }
        });
        if(response.ok === false){
          throw(new Error(`ERROR MESSAGE HERE: response.ok was ${response.ok}`));
        }
        const data = await response.json();
        return {
            success: true,
            data,
            errors: null
        };
    }
    catch(e){
        console.log(e.message);
        return {
            success: false,
            data: null,
            errors: e.message
        };
    }
}
async function PostJobs(){}
async function GetJobByJobId(){}
async function DeleteJobByJobId(){}
async function PatchJobByJobId(){}
