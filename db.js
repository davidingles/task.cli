import { connect, connection } from 'mongoose'

const connectDB = async () => {
  await connect(process.env.MONGODB_URI)
  console.log(connection.name)
}
