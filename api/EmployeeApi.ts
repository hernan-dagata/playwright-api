import { APIRequestContext } from '@playwright/test';

export class EmployeeApi {

    constructor(
        private request: APIRequestContext
    ) {}

    async getEmployee(id: number) {
        return await this.request.get(`/employee/${id}`);
    }

    async getAllEmployees() {
        return await this.request.get(`/employee`);
    }

    async createEmployee(employeeData: object) {
        return await this.request.post(`/employee`, {
            data: employeeData
        });
    }

    async updateEmployee(id: number, employeeData: object) {
        return await this.request.put(`/employee/${id}`, {
            data: employeeData
        });
    }

    async deleteEmployee(id: number) {
        return await this.request.delete(`/employee/${id}`);
    }
}