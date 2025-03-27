import { v4 as uuidv4 } from 'uuid'
import defaultItems from '../DefaultItems.js'

let items = defaultItems

const getItems = (_, reply) => {
  reply.send(items)
}

const getItem = (req, reply) => {
  const { id } = req.params

  const item_detail = items.find((item) => item.id === id)

  reply.send(item_detail)
}

const addItem = (req, reply) => {
  let { name } = req.body
  let item = {
    id: uuidv4(),
    name,
  }

  items = [...items, item]

  reply.code(201).send(item)
}

const deleteItem = (req, reply) => {
  const { id } = req.params

  items = items.filter((item) => item.id !== id)

  reply.send({ message: `Item ${id} has been removed` })
}

const updateItem = (req, reply) => {
  const { id } = req.params
  const { name } = req.body

  items = items.map((item) => (item.id === id ? { id, name } : item))

  let updated_item = items.find((item) => item.id === id)

  reply.send(updated_item)
}

export const itemsCRUD = {
  getItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
}
