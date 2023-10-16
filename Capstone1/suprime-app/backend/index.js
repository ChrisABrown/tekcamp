import { MongoClient } from 'mongodb'
import app from './server.js'
import ItemsDAO from './DAO/itemsDAO.js'
// import OrdersDAO from './dao/ordersDAO'
// import UsersDAO from './dao/usersDAO'
// import MessagesDAO from './DAO/messagesDAO.js'

async function main() {
  const client = new MongoClient(process.env.SUPRIME_DB_URI, {
    tlsCertificateKeyFile: '../CA.pem',
  })
  const port = process.env.PORT || 4040

  try {
    await client.connect()
    await ItemsDAO.injectDB(client)
    // await UsersDAO.injectDB(client)
    // await OrdersDAO.injectDB(client)
    // await MessagesDAO.injectDB(client)

    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`)
    })
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
}

main().catch(console.error)
