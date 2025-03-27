import { itemsCRUD } from '../controllers/ItemsController.js'
  
  // Item schema
  const Item = {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
    },
  }
  
  // Options for get all items
  const getItemsOpts = {
    schema: {
      response: {
        200: {
          type: 'array',
          items: Item,
        },
      },
    },
    handler: itemsCRUD.getItems,
  }
  
  const getItemOpts = {
    schema: {
      response: {
        200: Item,
      },
    },
    handler: itemsCRUD.getItem,
  }
  
  const postItemOpts = {
    schema: {
      body: {
        type: 'object',
        required: ['name'],
        properties: {
          name: { type: 'string' },
        },
      },
      response: {
        201: Item,
      },
    },
    handler: itemsCRUD.addItem,
  }
  
  const deleteItemOpts = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            message: { type: 'string' },
          },
        },
      },
    },
    handler: itemsCRUD.deleteItem,
  }
  
  const updateItemOpts = {
    schema: {
      response: {
        200: Item,
      },
    },
    handler: itemsCRUD.updateItem,
  }
  
  function itemRoutes(fastify, _, done) {
    // Get all items
    fastify.get('/items', getItemsOpts)
  
    // Get single items
    fastify.get('/items/:id', getItemOpts)
  
    // Add item
    fastify.post('/items', postItemOpts)
  
    // Delete item
    fastify.delete('/items/:id', deleteItemOpts)
  
    // Update item
    fastify.put('/items/:id', updateItemOpts)
  
    done()
  }
  
  export default itemRoutes
  