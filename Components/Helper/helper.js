import {MongoClient} from 'mongodb'

export default async function helper() {
    const userDatabase = `mongodb+srv://${process.env.username}:${process.env.password}@${process.env.clusters}.j34xwzp.mongodb.net/${process.env.server}?retryWrites=true&w=majority`
    const data = await MongoClient.connect(userDatabase)
    return data
  
}

//'mongodb+srv://tanvir:tanvir@cluster0.j34xwzp.mongodb.net/stream?retryWrites=true&w=majority'
