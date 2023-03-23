import Article from "./components/Article";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './style.css'
function App() {
  const article1 = {
    date:"11/12/20",
    title:"On the Street in Brooklyn",
    img:"https://ps-java-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg",
    text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, inventore. Sit nam cumque aliquam a commodi similique, totam aperiam pariatur, est dicta quo alias accusantium dolore magni laboriosam tenetur molestias laborum quae quidem. Vel architecto magnam, voluptatibus, cumque non reprehenderit error, officia illum quibusdam dolorum repudiandae sunt laborum libero molestiae fugiat iste perferendis? Ex dolorum laborum soluta nostrum autem facere?"
  }
  const article2 = {
    date:"11/11/20",
    title:"Vintage in Vogue",
    img:"https://ps-java-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg",
    text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatibus, amet obcaecati quisquam provident necessitatibus neque rem, sunt molestias nostrum architecto! Rem quasi nesciunt quam possimus, culpa fugit eligendi, voluptas eveniet nisi nobis, dignissimos nemo libero aliquid? Dolorem nemo itaque nihil, id sapiente temporibus quia laborum, facere blanditiis illum ipsam!"
  }
  return (
    <div >
      <Header/>
      <Article article={article1}/>
      <Article article={article2}/>
      <Footer/>
    </div>
  );
}

export default App;
