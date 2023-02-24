<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout: FC = () => {
  const { count } = useSelector((state: object) => state.userStore);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home", { replace: true });
  }, []);
=======
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Layout: FC = () => {
  const { count } = useSelector((state: object) => state.userStore)
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/home', { replace: true })
  }, [])
>>>>>>> 4a7b81305d2cc1585d8cb16488b48df677ad39c5
  return (
    <div>
      {count}
      <Outlet />
    </div>
<<<<<<< HEAD
  );
};

export default Layout;
=======
  )
}

export default Layout
>>>>>>> 4a7b81305d2cc1585d8cb16488b48df677ad39c5
