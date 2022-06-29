import { ObjectId } from 'mongodb'
import React from 'react'
import helper from '../../Components/Helper/helper'
import EditPost from '../../Components/Posts/EditPost'

export default function Edit({list}) {
 
  const result = JSON.parse(list)

  return (
    <div>
      <EditPost list={result}/>
    </div>
  )
}

export async function getServerSideProps(context){

  const {params} = context
  const userId=params.edit

  const client = await helper()
  const db=client.db()
  const usesr = await db.collection('posts').findOne({_id:ObjectId(userId)})
  const result = JSON.stringify(usesr)

  return {
    props:{

      list:result

    }
   
  }

}
