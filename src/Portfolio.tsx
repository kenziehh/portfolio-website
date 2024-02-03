import CategoryCard from "./components/CategoryCard";
import PortfolioCard from "./components/PortfolioCard";

const Portfolio = () => {
  return (
    <section
      className="container py-20 flex flex-col gap-12 h-screen"
      id="portfolio"
    >
      <h1>My Portfolios</h1>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-8 md:gap-20">
          <PortfolioCard
            name="CareerHub"
            link="https://github.com/kenziehh/CareerHub"
          >
            <div className="flex gap-3 mb-4">
              <CategoryCard>JavaScript</CategoryCard>
              <CategoryCard>React</CategoryCard>
              <CategoryCard>Tailwind CSS</CategoryCard>
            </div>
            <p>
              - Membuat Tampilan website menggunakan bahasa pemrograman
              JavaScript dengan framework React, Vite, dan Tailwind CSS.
            </p>
            <p>- Deploy dan Memastikan seluruh fitur berjalan dengan lancar</p>
          </PortfolioCard>
          <PortfolioCard
            name="DelivEat"
            link="https://github.com/romves/food-delivery-app"
          >
            <div className="flex gap-3 mb-4">
              <CategoryCard>Java</CategoryCard>
              <CategoryCard>Maven</CategoryCard>
              <CategoryCard>T-SQL</CategoryCard>
            </div>
            <p>- Merancang database, dan membuat DDL serta DML nya.</p>
            <p>
              - Memprogram sistem dengan menggunakan bahasa pemrograman Java
              baik Front End maupun Back End.
            </p>
            <p>
              - Membuat flow mulai dari akun dibuat hingga pesanan selesai
              dengan 2 sisi user (Customer dan Restaurant)
            </p>
          </PortfolioCard>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
