import express, { Request, Response } from 'express'

const app = express()
const port = 3000

app.use(express.json())

// Interfaz para definir un producto
interface Producto {
  id: number
  nombre: string
  precio: number
  cantidad: number
}

const productos: Producto[] = [
  { id: 1, nombre: 'Producto 1', precio: 100, cantidad: 10 },
  { id: 2, nombre: 'Producto 2', precio: 200, cantidad: 20 },
  { id: 3, nombre: 'Producto 3', precio: 300, cantidad: 30 },
]

app.get('/productos', (req: Request, res: Response) => {
  res.json(productos)
})

app.get('/productos/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const producto = productos.find((p) => p.id === id)
  if (producto) {
    res.json(producto)
  } else {
    res.status(404).send({ mensaje: 'Producto no encontrado' })
  }
})

app.post('/productos', (req: Request, res: Response) => {
  const nuevoProducto: Producto = {
    id: productos.length + 1, // Generar ID automáticamente
    nombre: req.body.nombre,
    precio: req.body.precio,
    cantidad: req.body.cantidad,
  }
  productos.push(nuevoProducto)
  res.status(201).json(nuevoProducto)
})

app.put('/productos/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const productoIndex = productos.findIndex((p) => p.id === id)
  if (productoIndex !== -1) {
    productos[productoIndex] = {
      id: id,
      nombre: req.body.nombre,
      precio: req.body.precio,
      cantidad: req.body.cantidad,
    }
    res.json(productos[productoIndex])
  } else {
    res.status(404).send({ mensaje: 'Producto no encontrado' })
  }
})

app.delete('/productos/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const productoIndex = productos.findIndex((p) => p.id === id)
  if (productoIndex !== -1) {
    productos.splice(productoIndex, 1)
    res.send({ mensaje: 'Producto eliminado' })
  } else {
    res.status(404).send({ mensaje: 'Producto no encontrado' })
  }
})

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})
