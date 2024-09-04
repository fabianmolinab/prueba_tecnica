import express, { Request, Response } from 'express'
import { Producto } from './models/producto'
import { sequelize } from './db'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/productos', async (req: Request, res: Response) => {
  const productos = await Producto.findAll()
  res.json(productos)
})

app.get('/productos/:id', async (req: Request, res: Response) => {
  const producto = await Producto.findByPk(req.params.id)
  if (producto) {
    res.json(producto)
  } else {
    res.status(404).send({ mensaje: 'Producto no encontrado' })
  }
})

app.post('/productos', async (req: Request, res: Response) => {
  const nuevoProducto = await Producto.create(req.body)
  res.status(201).json(nuevoProducto)
})

app.put('/productos/:id', async (req: Request, res: Response) => {
  const producto = await Producto.findByPk(req.params.id)
  if (producto) {
    await producto.update(req.body)
    res.json(producto)
  } else {
    res.status(404).send({ mensaje: 'Producto no encontrado' })
  }
})

app.delete('/productos/:id', async (req: Request, res: Response) => {
  const producto = await Producto.findByPk(req.params.id)
  if (producto) {
    await producto.destroy()
    res.send({ mensaje: 'Producto eliminado' })
  } else {
    res.status(404).send({ mensaje: 'Producto no encontrado' })
  }
})

if (process.env.NODE_ENV !== 'test') {
  sequelize.sync({ force: true }).then(() => {
    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`)
    })
  })
}

export { app }
