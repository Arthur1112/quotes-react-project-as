import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";

function QuotesList() {
  const [quotes, setQuotes] = useState();
  useEffect(() => {
    fetch("https://quotes-project-as.web.app/quotes")
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch(console.error);
  }, []);
  return (
    <>
      <div className="site-card-border-less-wrapper">
        <Row>
          {!quotes 
          ? (<h2 style={{color: 'white'}}>Loading Quotes...</h2>) 
          : (
            quotes.map((quote) => (
              <Col className="column" key={quote.id}>
                <Card headStyle={{color: 'rgb(120, 91, 18)', borderColor: 'rgb(120, 91, 18)' }} className="card" key={quote.id} title={quote.author}>
                  <p>{quote.quote}</p>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </div>
    </>
  );
}

export default QuotesList;
