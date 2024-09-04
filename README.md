# Proyecto de Servicio RESTful con Node.js y Playwright

Este proyecto es un servicio RESTful simple desarrollado con Node.js y Express que permite realizar operaciones CRUD sobre un recurso llamado "producto". Incluye pruebas automatizadas usando Playwright para garantizar el funcionamiento del servicio. Además, el proyecto está configurado para ejecutarse en un contenedor Docker.

## Estructura del Proyecto

- **src/**: Contiene el código fuente del servicio RESTful.
- **tests/**: Contiene las pruebas automatizadas.
- **Dockerfile**: Archivo de configuración para crear una imagen Docker del proyecto.
- **docker-compose.yml**: Archivo para definir y ejecutar contenedores Docker.
- **playwright.config.ts**: Configuración para Playwright.
- **package.json**: Gestión de dependencias y scripts del proyecto.

## Prerrequisitos de software

1. **Node.js v18**
2. **npm**

## Instalación

1. **Clonar el Repositorio**

   Clona el repositorio del proyecto desde GitHub usando el siguiente comando:

   ```bash
   git clone git@github.com:fabianmolinab/prueba_tecnica.git
   ```


2. **Navegar al Directorio del Proyecto**

   Cambia al directorio del proyecto:

   ```bash
   cd prueba_tecnica
   ```


3. **Instalar Dependencias**

   Instala las dependencias necesarias usando npm:

   ```bash
   npm install
   ```

4. **Ejecutar el Servidor**

Para iniciar el servidor, usa el siguiente comando:

```bash
npm run dev
```

El servidor escuchará en el puerto especificado (por defecto, el puerto 3000). Puedes acceder a la API en `http://localhost:3000`.

5. **Ejecutar Pruebas Automatizadas**

Para ejecutar las pruebas automatizadas, usa el siguiente comando:

```bash
npm run test
```

Este comando ejecutará las pruebas definidas en la carpeta `tests` y generará informes de resultados.

## Servicio RESTful

### Endpoints

- **GET /productos**
  - Devuelve una lista de productos.
- **POST /productos**

  - Agrega un nuevo producto.

- **GET /productos/:id**

  - Devuelve un producto específico por su ID.

- **PUT /productos/:id**

  - Actualiza un producto específico.

- **DELETE /productos/:id**
  - Elimina un producto específico.

### Ejemplo de Uso

1. **Obtener la lista de productos:**

   ```bash
   curl http://localhost:3000/productos
   ```

2. **Agregar un nuevo producto:**

   ```bash
   curl -X POST http://localhost:3000/productos -H "Content-Type: application/json" -d '{"nombre": "Producto 4", "precio": 400, "cantidad": 40}'
   ```

3. **Obtener un producto específico:**

   ```bash
   curl http://localhost:3000/productos/1
   ```

4. **Actualizar un producto existente:**

   ```bash
   curl -X PUT http://localhost:3000/productos/1 -H "Content-Type: application/json" -d '{"nombre": "Producto Actualizado", "precio": 500, "cantidad": 50}'
   ```

5. **Eliminar un producto específico:**

   ```bash
   curl -X DELETE http://localhost:3000/productos/1
   ```

## Pruebas Automatizadas

Las pruebas automatizadas están implementadas usando Playwright para verificar el funcionamiento de los endpoints del servicio RESTful.

### Ejecutar Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
npm run test
```

Esto ejecutará las pruebas y generará informes en formato HTML y JSON en la carpeta `playwright-report` y `test-results` respectivamente.

### Informes de Pruebas

- **HTML:** El informe HTML se genera en `playwright-report/index.html`.
- **JSON:** Los resultados en formato JSON se guardan en `test-results/test-results.json`.

## Despliegue con Docker

### Dockerfile

El archivo Dockerfile está configurado para construir una imagen de Docker para el proyecto. Asegúrate de tener Docker instalado y utiliza los siguientes comandos para construir y ejecutar el contenedor:

1. **Construir la imagen Docker:**

   ```bash
   docker build -t mi-servicio-restful .
   ```

2. **Ejecutar el contenedor:**

   ```bash
   docker run -p 3000:3000 mi-servicio-restful
   ```

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

```

```
