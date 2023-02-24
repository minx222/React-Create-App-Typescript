import { Provider } from 'react-redux'
<<<<<<< HEAD
import stores from '@/stores';
import AppRouter from '@/routers';
const App: React.FC = ()=> 
  <Provider store={stores}>
    <AppRouter />
  </Provider>

export default App;
=======
import stores from '@/stores'
import AppRouter from '@/routers'
const App: React.FC = () => (
  <Provider store={stores}>
    <AppRouter />
  </Provider>
)

export default App
>>>>>>> 4a7b81305d2cc1585d8cb16488b48df677ad39c5
