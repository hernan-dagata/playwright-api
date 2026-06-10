import { APIResponse } from '@playwright/test';

export class ApiLogger {

    static async logResponse(response: APIResponse) {
        console.log('--- INIT API RESPONSE ---');
        console.log('STATUS:', response.status());
        console.log('HEADERS:');
        console.log(response.headers());
        console.log('BODY:');
        console.log(await response.text());
        console.log('--- END API RESPONSE ---');
    }
}