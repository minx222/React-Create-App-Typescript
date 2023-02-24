import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Layout: React.FC = () => {
  const { count } = useSelector((state: any) => state.userStore)
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/home', { replace: true })
  }, [])
  return (
    <div>
      {count}
      <Outlet />
    </div>
  )
}

export default Layout
