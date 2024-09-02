import Footer from "./footer/footer"
import { Header } from "./header/header"
import HomePage from "./homePage"

const Home = () => {
  return (
    <div className="home w-[100vw] overflow-x-hidden ">
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default Home