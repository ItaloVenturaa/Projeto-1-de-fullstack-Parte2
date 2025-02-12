import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { SearchProvider } from '../contexts/SearchContext'; 
import { AuthProvider } from '../context/AuthContext'; 
import AppRoutes from '../routes/AppRoutes';
import '../styles/styles.css';

const SearchForm = React.lazy(() => import('../components/SearchForm'));
const Results = React.lazy(() => import('../components/Results'));
const ErrorMessage = React.lazy(() => import('../components/ErrorMessage'));

function App() {
  return (
    <AuthProvider> {/* Envolve o app com o contexto de autenticação */}
      <SearchProvider>
        <Router> {/* Gerencia a navegação */}
          <Container>
            <Row>
              <Col>
                <h1>Pesquisa Valorant</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <Suspense fallback={<div>Carregando...</div>}>
                  <SearchForm />
                  <Results />
                  <ErrorMessage />
                </Suspense>
              </Col>
            </Row>
            <AppRoutes /> {/* Renderiza as rotas */}
          </Container>
        </Router>
      </SearchProvider>
    </AuthProvider>
  );
}

export default App;
