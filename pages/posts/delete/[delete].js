import { useRouter } from 'next/router'
import DeletePost from '../../../Components/Posts/DeletePost'


export default function Delete() {
    const router = useRouter()

    const userId = router.query.delete;
    
  return (
    <div>
      <DeletePost userId={userId}/>
    </div>
  )
}
