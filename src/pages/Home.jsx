import "./Home.css";
import Product from "../components/Product";
import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProductInfo() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/products`,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      setProducts(response.data);
      console.log(response.data);
    }
  }, []);

  return (
    <main>
      <section className="container-fluid">
        <div className="hero-section">
          <img className="hero-img" src="/public/img/home/header_home.webp" alt="hero image" />
          <div className="hero-content">
            <h1>Want it Hoppy?</h1>
            <p>Come explore our Hoppy styles</p>
          </div>
        </div>
        <div className="hero-stats"></div>
      </section>
      <section id="featured_products" className="container-fluid">
        <div className="row">
          <Product />
        </div>
      </section>
      {products &&
        products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
    </main>
  );
}

export default Home;
