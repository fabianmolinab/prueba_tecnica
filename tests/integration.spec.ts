import { test, expect } from '@playwright/test'

test.describe('Pruebas de integración de productos', () => {
  test.beforeAll(async ({ request }) => {
    await request.post('/productos', {
      data: { nombre: 'Producto 1', precio: 100, cantidad: 10 },
    })
  })

  test('Debería obtener una lista de productos', async ({ request }) => {
    const response = await request.get('/productos')
    expect(response.status()).toBe(200)
    const productos = await response.json()
    expect(productos).toBeInstanceOf(Array)
    expect(productos.length).toBeGreaterThan(0)
  })

  test('Debería crear un nuevo producto', async ({ request }) => {
    const nuevoProducto = {
      nombre: 'Producto Test',
      precio: 200,
      cantidad: 20,
    }

    const response = await request.post('/productos', {
      data: nuevoProducto,
    })
    expect(response.status()).toBe(201)
    const producto = await response.json()
    expect(producto.nombre).toBe(nuevoProducto.nombre)
    expect(producto.precio).toBe(nuevoProducto.precio)
    expect(producto.cantidad).toBe(nuevoProducto.cantidad)
  })

  test('Debería obtener un producto específico', async ({ request }) => {
    const response = await request.get('/productos/1')
    expect(response.status()).toBe(200)
    const producto = await response.json()
    expect(producto.id).toBe(1)
  })

  test('Debería actualizar un producto existente', async ({ request }) => {
    const updatedProducto = {
      nombre: 'Producto Actualizado',
      precio: 300,
      cantidad: 30,
    }

    const response = await request.put('/productos/1', {
      data: updatedProducto,
    })
    expect(response.status()).toBe(200)
    const producto = await response.json()
    expect(producto.nombre).toBe(updatedProducto.nombre)
    expect(producto.precio).toBe(updatedProducto.precio)
    expect(producto.cantidad).toBe(updatedProducto.cantidad)
  })

  test('Debería eliminar un producto existente', async ({ request }) => {
    const response = await request.delete('/productos/1')
    expect(response.status()).toBe(200)
    const message = await response.json()
    expect(message.mensaje).toBe('Producto eliminado')
  })
})
