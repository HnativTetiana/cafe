import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import Header from './pagesElements/Header.tsx';
import Footer from './pagesElements/Footer.tsx';
import Content from './pagesElements/Content.tsx';
import store from './store/store.ts';

import './styles/App.css';
import './styles/HeaderFooter.css';
import './styles/Main.css';
import './styles/CartModal.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
