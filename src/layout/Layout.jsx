import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout: FC = () => {
  const { count } = useSelector((state: object) => state.userStore);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home", { replace: true });
  }, []);
  return (
    <div>
      {count}
      <Outlet />
    </div>
  );
};

export default Layout;
