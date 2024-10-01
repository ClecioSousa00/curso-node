import { server } from './server/server'

console.log(process.env.PORT)

server.listen(process.env.PORT || 3333, () => {
  console.log(`Server is Running!!`)
})
