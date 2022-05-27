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
          {!quotes ? (
            <h2>Loading Quotes...</h2>
          ) : (
            quotes.map((quote) => (
              <Col style={{ 
                display: 'grid',
                justifyContent: 'center',
                alignContent: 'center',
                width: "300px", 
                margin: "1em"
                }} key={quote.id}>
                <Card
                  style={{
                    borderStyle: "solid",
                    backgroundColor: "rgba(225, 225, 225, 0.6)",
                    borderRadius: "15px",
                    padding: "15px",
                  }}
                  title={quote.author}
                >
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
