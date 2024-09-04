import { test, expect } from '@playwright/test'

test('GET /productos  devuelve lista de productos', async ({ request }) => {
  const response = await request.get('/productos')
  expect(response.status()).toBe(200)
  const productos = await response.json()
  expect(Array.isArray(productos)).toBe(true)
  expect(productos.length).toBeGreaterThan(0)
})

test('POST /productos  Agrega un nuevo producto', async ({ request }) => {
  const newProducto = {
    nombre: 'Producto Nuevo',
    precio: 500,
    cantidad: 5,
  }

  const response = await request.post('/productos', {
    data: newProducto,
  })
  expect(response.status()).toBe(201)
  const producto = await response.json()
  expect(producto.nombre).toBe('Producto Nuevo')
  expect(producto.precio).toBe(500)
  expect(producto.cantidad).toBe(5)
})

test('GET /productos/:id - Devuelve un producto específico', async ({
  request,
}) => {
  const response = await request.get('/productos/1')
  expect(response.status()).toBe(200)
  const producto = await response.json()
  expect(producto.id).toBe(1)
  expect(producto.nombre).toBe('Producto 1')
})

test('PUT /productos/:id - Actualiza un producto específico', async ({
  request,
}) => {
  const updatedProducto = {
    nombre: 'Producto Actualizado',
    precio: 600,
    cantidad: 6,
  }

  const response = await request.put('/productos/1', {
    data: updatedProducto,
  })
  expect(response.status()).toBe(200)
  const producto = await response.json()
  expect(producto.nombre).toBe('Producto Actualizado')
  expect(producto.precio).toBe(600)
  expect(producto.cantidad).toBe(6)
})

test('DELETE /productos/:id - Elimina un producto específico', async ({
  request,
}) => {
  const response = await request.delete('/productos/1')
  expect(response.status()).toBe(200)
  const message = await response.json()
  expect(message.mensaje).toBe('Producto eliminado')
})
