import Header from '../components/Header'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer/index'
import { Helmet } from 'react-helmet-async';

function Home(){
    return(
        <div  data-theme="luxury" className='container mx-auto main-layout'>
            <Header
                title = "Welcome to the BookStore"
                slogan = "The Great Place to Buy Books!"
            />
            <ProductList className="content"/>
            <Footer className="footer" />
        </div>
    )
}

export default Home