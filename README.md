# 🚀 Playwright API Automation

## 📌 Descripción

Proyecto de automatización de pruebas API con Playwright Test. Se valida la API de empleados a través de endpoints REST, realizando operaciones CRUD y comprobando respuestas JSON.

La suite aprovecha el soporte nativo de Playwright para solicitudes HTTP y generación de reportes HTML.

---

## 🧩 Estructura del proyecto

- `api/`
  - `EmployeeApi.ts` - Cliente API con métodos CRUD para el recurso `/employee`.
- `tests/`
  - `empleados.spec.ts` - Escenarios de prueba que cubren creación, lectura, actualización y eliminación de empleados.
- `utils/`
  - `ApiLogger.ts` - Logger que imprime el estado, cabeceras y cuerpo de cada respuesta.
- `playwright.config.ts` - Configuración de Playwright Test.
- `package.json` - Dependencias y metadatos del proyecto.

---

## ⚙️ Requisitos

- Node.js 18+ recomendado
- npm
- Conexión a internet para acceder al API remoto

---

## 🚀 Instalación

Desde la raíz del proyecto:

```bash
npm install
```

---

## 🧪 Ejecución de pruebas

### Ejecutar todas las pruebas

```bash
npx playwright test
```

### Ver reporte HTML

```bash
npx playwright show-report
```

---

## 🔧 Configuración actual

Archivo: `playwright.config.ts`

- `testDir`: `./tests`
- `workers`: `1`
- `timeout`: `30000`
- `reporter`: `html` y `list`
- `baseURL`: `https://6a28cddb4e1e783349a602f6.mockapi.io/api/v1`
- `extraHTTPHeaders`: `Content-Type: application/json`

---

## 🧪 Descripción de los casos de prueba

### `empleados.spec.ts`

1. Crear un nuevo empleado
2. Consultar todos los empleados
3. Consultar un empleado por ID
4. Actualizar un empleado existente
5. Eliminar un empleado y verificar la eliminación

### Flujo de datos

- Se crea un empleado con un nombre único usando `Date.now()`.
- El ID generado se usa en los tests siguientes para actualizar y eliminar el mismo empleado.
- Se valida el código de respuesta y los datos devueltos en cada paso.

---

## 📦 Clases principales

### `EmployeeApi.ts`

Métodos disponibles:

- `getEmployee(id: number)`
- `getAllEmployees()`
- `createEmployee(employeeData: object)`
- `updateEmployee(id: number, employeeData: object)`
- `deleteEmployee(id: number)`

### `ApiLogger.ts`

Método principal:

- `logResponse(response: APIResponse)`
  - Imprime `status`, `headers` y `body` de cada respuesta.

---

## 💡 Recomendaciones de mejora

- Añadir `scripts` en `package.json` para simplificar la ejecución.
- Externalizar variables de entorno como `baseURL`.
- Implementar validaciones de esquema JSON con `expect` más estrictas.
- Separar los datos de prueba en fixtures o helpers reutilizables.

---

## 📌 Buenas prácticas aplicadas

- Uso de `APIRequestContext` de Playwright para llamadas HTTP.
- Reportes generados en HTML por configuración estándar.
- Logging claro de respuestas a través de `ApiLogger`.

---