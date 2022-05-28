import { Layout, PageHeader } from "antd";
import QuotesList from "./components/QuotesList";
import './App.css'
import AddQuote from "./components/AddQuotes";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';


const {Header, Content} = Layout;


function App() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <PageHeader className="site-page-header" title="Motivational Quotes"/>
        <Routes>
          <Route>
          <Route path='/quotes/addQuote' element={<AddQuote/>} />
          <Route path='/' element={<QuotesList/>} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
