import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { SearchProvider } from '../contexts/SearchContext'; 
import '../styles/styles.css';
const SearchForm = React.lazy(() => import('../components/SearchForm'));
const Results = React.lazy(() => import('../components/Results'));
const ErrorMessage = React.lazy(() => import('../components/ErrorMessage'));

function App() {
  return (
    <SearchProvider>
      <Container>
        <Row>
          <Col>
            <h1>Pesquisa Valorant</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Suspense fallback={<div>Carregando</div>}>
              <SearchForm />
              <Results />
              <ErrorMessage />
            </Suspense>
          </Col>
        </Row>
      </Container>
    </SearchProvider>
  );
}

export default App;
