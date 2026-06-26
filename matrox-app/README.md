# Matrox

Aplicacion web desarrollada con Next.js que simula un catalogo de productos tecnologicos.

## Descripcion del tema y API integrada
Matrox es un e-commerce frontend orientado a productos tecnologicos. La app fue pensada para simular una experiencia de compra completa: desde la exploracion del catalogo hasta la gestion del carrito.

Funcionalidades principales:
- Catalogo dinamico de productos consumido desde una API externa.
- Filtro por categoria y ordenamiento para facilitar la busqueda.
- Vista de detalle por producto con informacion ampliada.
- Seccion de carrito con manejo de cantidades, eliminacion de productos, vaciado total y calculo de subtotal/total.
- Persistencia del carrito en `localStorage` para mantener la sesion del usuario.
- Codigo de descuento (`MATROX10`) aplicado sobre el total del carrito.
- Paginas complementarias de navegacion como inicio, categorias, login, about y contacto.

Se integra la API publica **DummyJSON** (`https://dummyjson.com`), utilizada como fuente de datos para productos y categorias.

Endpoints principales utilizados:
- `GET /products`
- `GET /products/categories`
- `GET /products/{id}`

## Grupo y equipo
- **Numero de grupo:** 16
- **Nombre del equipo:** Warriors

## Integrantes
- Arballo Federico
- Cepeda Caceres Emanuel
- Rodriguez Joaquin

## Instrucciones para correr el proyecto en local
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/FedeAr25/Tp-grupal-next.git
   ```
2. Entrar al proyecto:
   ```bash
   cd Tp-grupal-next/matrox-app
   ```
3. Instalar dependencias:
   ```bash
   npm install
   ```
4. Ejecutar en desarrollo:
   ```bash
   npm run dev
   ```
5. Abrir en el navegador:
   - `http://localhost:3000`

## Scripts disponibles
- `npm run dev`: inicia en modo desarrollo.
- `npm run build`: genera build de produccion.
- `npm run start`: ejecuta la app en produccion.
- `npm run lint`: corre el linter.
