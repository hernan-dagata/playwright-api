import {test, expect} from '@playwright/test';
import { EmployeeApi } from '../api/EmployeeApi';
import { ApiLogger } from '../utils/ApiLogger';

var id_empleado = 0;

test('Crear un nuevo empleado', async ({request}) => {
    const timestamp = Date.now();
    const newEmployee = {
        createdAt: new Date().toISOString(),
        name: `Hernan-${timestamp}`,
        avatar: `https://avatars.githubusercontent.com/u/${timestamp}`,
        mail: `hernan${timestamp}@gmail.com`,
        city: 'Yarumal',
        pin: Math.floor(Math.random() * 10000).toString()
    };

    const employeeApi = new EmployeeApi(request);
    const response = await employeeApi.createEmployee(newEmployee);

    expect(response.status()).toBe(201);
    const data = await response.json();
    expect(data.id).toBeDefined();
    expect(data.name).toBe(`Hernan-${timestamp}`);
    id_empleado = data.id;
    await ApiLogger.logResponse(response);
});

test('Consultar todos los empleados', async ({request}) => {
    const employeeApi = new EmployeeApi(request);
    const response = await employeeApi.getAllEmployees();

    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBeGreaterThan(0);
    await ApiLogger.logResponse(response);
});

test('Consultar un empleado por ID', async ({request}) => {
    const employeeApi = new EmployeeApi(request);
    const response = await employeeApi.getEmployee(1);

    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data).toHaveProperty('id', '1');
    expect(data.id).toBe('1');
    expect(data).toHaveProperty('name');
    await ApiLogger.logResponse(response);
});

test('Actualizar un empleado existente', async ({request}) => {
    const timestamp = Date.now();
    const updatedEmployee = {
        createdAt: new Date().toISOString(),
        name: `Hernan-actualizado-${timestamp}`,
        avatar: `https://avatars.githubusercontent.com/u/${timestamp}`,
        mail: `hernan${timestamp}@gmail.com`,
        city: 'Yarumal',
        pin: Math.floor(Math.random() * 10000).toString()
    };

    const employeeApi = new EmployeeApi(request);
    const response = await employeeApi.updateEmployee(id_empleado, updatedEmployee);
    const updatedData = await response.json();

    expect(response.status()).toBe(200);
    expect(updatedData.name).toBe(updatedEmployee.name);
    await ApiLogger.logResponse(response);
});

test('Eliminar un empleado', async ({request}) => {
    const employeeApi = new EmployeeApi(request);
    const response1 = await employeeApi.deleteEmployee(id_empleado);
    expect(response1.status()).toBe(200);
    await ApiLogger.logResponse(response1);

    console.log(`Empleado con ID ${id_empleado} eliminado. Verificando eliminación...`);

    const response2 = await employeeApi.getEmployee(id_empleado);
    expect(response2.status()).toBe(404);
    await ApiLogger.logResponse(response2);
});