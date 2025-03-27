import { usersCRUD } from '../controllers/UsersController.js'
  
  // User schema
  const User = {
    type: 'object',
    properties: {
      id: { type: 'number' },
      name: { type: 'string' },
      email: { type: 'string' },
    },
  }
  
  // Options for get all users
  const getUsersOpts = {
    schema: {
      response: {
        200: {
          type: 'array',
          users: User,
        },
      },
    },
    handler: usersCRUD.getUsers,
  }
  
  const getUserOpts = {
    schema: {
      response: {
        200: User,
      },
    },
    handler: usersCRUD.getUser,
  }
  
  const postUserOpts = {
    schema: {
      body: {
        type: 'object',
        required: ['name', 'email'],
        properties: {
          name: { type: 'string' },
          email: { type: 'string' },
        },
      },
      response: {
        201: User,
      },
    },
    handler: usersCRUD.addUser,
  }
  
  const deleteUserOpts = {
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
    handler: usersCRUD.deleteUser,
  }
  
  const updateUserOpts = {
    schema: {
      body: {
        type: 'object',
        required: ['name', 'email'],
        properties: {
          name: { type: 'string' },
          email: { type: 'string' },
        },
      },
      response: {
        201: User,
      },
    },
    handler: usersCRUD.updateUser,
  }
  
  function userRoutes(fastify, _, done) {
    // Get all users
    fastify.get('/users', getUsersOpts)
  
    // Get single user
    fastify.get('/users/:id', getUserOpts)
  
    // Add user
    fastify.post('/user', postUserOpts)
  
    // Delete user
    fastify.delete('/users/:id', deleteUserOpts)
  
    // Update user
    fastify.put('/users/:id', updateUserOpts)
  
    done()
  }
  
  export default userRoutes
  