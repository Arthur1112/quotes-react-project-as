import { Layout } from "antd";
import QuotesList from "./components/QuotesList";
import './App.css'
import AddQuote from "./components/AddQuotes";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Menubar from "./components/MenuBar";
import AddQuoteTwo from "./components/2AddQuotes";


const {Header, Content} = Layout;


function App() {
  return (
    <BrowserRouter>
      <Layout className="Layout">
        <Header>
          <Menubar/>
        </Header>
        <Content>
          <Routes>
            <Route path='/quotes/addQuote' element={<AddQuoteTwo/>} />
            <Route path='/' element={<QuotesList/>} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
