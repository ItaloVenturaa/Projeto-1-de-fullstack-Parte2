import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { SearchProvider } from "../contexts/SearchContext";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import "../styles/styles.css";

const Login = React.lazy(() => import("../pages/Login"));
const SearchForm = React.lazy(() => import("../components/SearchForm"));
const Results = React.lazy(() => import("../components/Results"));
const ErrorMessage = React.lazy(() => import("../components/ErrorMessage"));

// Proteção de rota - apenas usuários logados acessam
const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <SearchProvider>
        <Router>
          <Container>
            <Row>
              <Col>
                <h1>Pesquisa Valorant</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <Suspense fallback={<div>Carregando...</div>}>
                  <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                      path="/search"
                      element={
                        <PrivateRoute>
                          <SearchForm />
                          <Results />
                          <ErrorMessage />
                        </PrivateRoute>
                      }
                    />
                    <Route path="*" element={<Navigate to="/login" />} />
                  </Routes>
                </Suspense>
              </Col>
            </Row>
          </Container>
        </Router>
      </SearchProvider>
    </AuthProvider>
  );
}

export default App;
