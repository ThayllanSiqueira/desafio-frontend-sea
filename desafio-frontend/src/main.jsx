import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'

import App from './App';
import { AppGlobalProvider } from './hooks/useAppContext';

import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppGlobalProvider>
      <App/>
    </AppGlobalProvider>
  </Provider>
);
