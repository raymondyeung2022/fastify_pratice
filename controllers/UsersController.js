import fastify from "../libs/fastify.js"
import fastifyMysql from "@fastify/mysql"

fastify.register(fastifyMysql, {
    connectionString: "mysql://root:mysql@localhost:3306/fastify_pratice"
})

const query = (action, reply, params) => {
    let queryAction = action
    fastify.mysql.getConnection(onConnect)
    function onConnect (err, client) {
        if (err) return reply.send(err)
        switch (queryAction) {
            case "getAllUsers":
                client.query(`SELECT id, name, email FROM users`,  
                    function onResult (err, result){
                        reply.send(err || result)
                    })
                break;
            case "getUser":
                client.query(`SELECT id, name, email FROM users WHERE id = ?`, 
                    [params.id],   
                    function onResult (err, result){
                        reply.send(err || {
                            "id": result[0].id,
                            "name": result[0].name,
                            "email": result[0].email,
                        })
                    })
                break;
            case "addUser":
                client.query(`INSERT INTO users (name, email) VALUES (?, ?)`, 
                    [params.name, params.email],    
                    function onResult (err, _){
                        reply.send(err || {
                            "name": params.name,
                            "email": params.email,
                        })
                    })
                break;
            case "updateUser":
                client.query(`UPDATE users SET name = ?, email = ? WHERE id = ?`, 
                    [params.name, params.email, params.id],   
                    function onResult (err, _){
                        reply.send(err || {
                            "name": params.name,
                            "email": params.email,
                        })
                    })
                break;
            case "deleteUser":
                client.query(`DELETE FROM users WHERE id = ?`, 
                    [params.id],
                    function onResult (err, _){
                        reply.send(err || { message: `User ${params.id} has been removed`})
                    })
                break
        }
    }
}

const getUsers = (_, reply) => {
    query("getAllUsers", reply)
}

const getUser = (req, reply) => {
    const { id } = req.params
    let params = {id: parseInt(id)}
    query("getUser", reply, params)
}

const addUser = (req, reply) => {
  let params = {
    name: req.body.name, 
    email: req.body.email
  }
  query("addUser", reply, params)
}

const deleteUser = (req, reply) => {
  let params = {id: req.params.id}
  query("deleteUser", reply, params)
}

const updateUser = (req, reply) => {
  let params = {
    id: req.params.id, 
    name: req.body.name, 
    email: req.body.email
  }
  query("updateUser", reply, params)
}

export const usersCRUD = {
  getUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser,
}
