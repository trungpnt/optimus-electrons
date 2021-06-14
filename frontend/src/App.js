import logo from './logo.svg';
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomeScreen from '../src/screens/HomeScreen'
import ProductScreen from '../src/screens/ProductScreen'

function App() {
    return (
        <Router>
            <main className="py-3">
                    <Header />
                    <main className="py-3">
                        <Container>
                            {/*because every page starts with a forward slash /, exact is added, now it knows to render the home screen only on this page*/} 
                            <Route path='/' component={HomeScreen} exact />
                            
                            {/* look at here, we pass the dynamic id as the param */}
                            <Route path='/product/:id' component={ProductScreen} />
                        </Container>
                    </main>
                    <Footer />

            </main>
            </Router>  
     );
}

export default App;
