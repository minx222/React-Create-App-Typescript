import { add } from '@/stores/modules/user'
import { Button } from 'antd';
import { useDispatch } from 'react-redux'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const clickHandler = () => {
    const action = add()
    dispatch(action)
  }
  return (
    <div>
        <Button type="primary" onClick={clickHandler}>Primary Button</Button>
    </div>
  )
}

export default Home  