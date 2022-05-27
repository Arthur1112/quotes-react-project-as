import { Layout, PageHeader } from "antd";
import QuotesList from "./components/QuotesList";
import './App.css'
import AddQuote from "./components/AddQuotes";

const {Header, Content} = Layout;


function App() {
  return (
    <Layout className="layout">
      <PageHeader className="site-page-header" title="Motivational Quotes"/>
      <QuotesList/>
      <AddQuote/>
    </Layout>
  );
}

export default App;
