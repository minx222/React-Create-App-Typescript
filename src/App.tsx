import { Provider } from 'react-redux';

import AppRouter from '@/routers';
import stores from '@/stores';
const App: React.FC = () => (
  <Provider store={stores}>
    <AppRouter />
  </Provider>
);

export default App;
