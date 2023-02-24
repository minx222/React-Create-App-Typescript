import { Provider } from 'react-redux'
import stores from '@/stores';
import AppRouter from '@/routers';
const App: React.FC = ()=> 
  <Provider store={stores}>
    <AppRouter />
  </Provider>

export default App;
