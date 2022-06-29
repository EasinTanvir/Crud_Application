import {hash,compare} from 'bcryptjs'

export default async function Auth(password) {

    const result = await hash(password,12)
    return result

  
}

export async function ChechPassword(hashPass,pass){
    const result = await compare(hashPass,pass)
    return result
}
