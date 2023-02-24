import { add } from '@/stores/modules/user'
<<<<<<< HEAD
import { Button } from 'antd';
import { useDispatch } from 'react-redux'

=======
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import request from '@/utils/request'
>>>>>>> 4a7b81305d2cc1585d8cb16488b48df677ad39c5
const Home: React.FC = () => {
  const dispatch = useDispatch()
  const clickHandler = () => {
    const action = add()
    dispatch(action)
  }
<<<<<<< HEAD
  return (
    <div>
        <Button type="primary" onClick={clickHandler}>Primary Button</Button>
=======
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
>>>>>>> 4a7b81305d2cc1585d8cb16488b48df677ad39c5
    </div>
  )
}

<<<<<<< HEAD
export default Home  
=======
export default Home
>>>>>>> 4a7b81305d2cc1585d8cb16488b48df677ad39c5
