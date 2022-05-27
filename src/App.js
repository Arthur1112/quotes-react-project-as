import { Layout } from "antd";
import QuotesList from "./components/QuotesList";
import './App.css'

const {Header, Content} = Layout;


function App() {
  return (
    <Layout className="layout">
      <QuotesList/>
    </Layout>
  );
}

export default App;
