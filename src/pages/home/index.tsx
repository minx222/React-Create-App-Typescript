import { add } from '@/stores/modules/user'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import request from '@/utils/request'
const Home: React.FC = () => {
  const dispatch = useDispatch()
  const clickHandler = () => {
    const action = add()
    dispatch(action)
  }
  useEffect(() => {
    request.get('/test').then((res) => {
      console.log(res)
    })
  }, [])
  return (
    <div>
      <Button type="primary" onClick={clickHandler}>
        Primary Button
      </Button>
    </div>
  )
}

export default Home
