import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 50) {
          section.classList.add("visible");
        }
      });
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background-image: url('https://images.creativemarket.com/0.1.0/ps/6061137/1820/1213/m1/fpnw/wm1/u43ylku7m1s7scueplq5jt8zuyr4khmojhlpw7goe2kvz9tjbch9bcpbwlyh8x8b-.jpg?1552513532&s=6e4ce5d0f58a7b159bd0bf3723bfa1fe');
          background-size: cover;
          background-position: center;
          color: #333;
          line-height: 1.6;
          overflow-x: hidden;
        }

        header {
          text-align: center;
          padding: 40px 20px;
          background-color: rgba(69, 162, 158, 0.8);
          color: #fff;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          animation: fadeIn 1.5s ease-out;
          border-radius: 8px;
          margin: 20px;
        }

        header h1 {
          font-size: 2.5em;
          margin-bottom: 10px;
          animation: slideIn 1.5s ease-out;
        }

        header p {
          font-size: 1.1em;
          opacity: 0.9;
        }

        .hero {
          position: relative;
          overflow: hidden;
          height: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
          animation: fadeInUp 1.5s ease-out;
        }

        .image-carousel {
          display: flex;
          animation: scroll 20s linear infinite;
          width: 100%;
        }

        .image-carousel img {
          width: calc(100% - 20px);
          height: 400px;
          object-fit: cover;
          max-width: 100%;
          display: block;
          margin: 0 10px;
          border-radius: 8px;
          transition: transform 0.3s;
        }

        .image-carousel img:hover {
          transform: scale(1.05);
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        .hero h2 {
          font-size: 3em;
          margin: 0;
          animation: slideIn 1.5s ease-out;
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
        }

        .navbar {
          background: rgba(0, 65, 109, 0.8);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          animation: fadeIn 1s ease-out;
          border-radius: 8px;
          margin: 20px;
        }

        .navbar ul {
          list-style-type: none;
          display: flex;
          justify-content: center;
          padding: 10px;
          margin: 0;
          flex-wrap: wrap;
        }

        .navbar ul li {
          margin: 0 10px;
        }

        .navbar ul li a {
          text-decoration: none;
          color: #fff;
          font-size: 0.9em;
          font-weight: bold;
          padding: 8px 12px;
          border-radius: 5px;
          transition: background-color 0.3s, transform 0.3s, text-shadow 0.3s;
          white-space: nowrap;
        }

        .navbar ul li a:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.05);
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
        }

        main {
          padding: 40px 20px;
          text-align: center;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 8px;
          margin: 20px auto;
          width: 90%;
          max-width: 800px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          animation: fadeInUp 1.5s ease-out;
        }

        section h2 {
          font-size: 2em;
          color: #333;
          margin-bottom: 15px;
        }

        section p {
          font-size: 1.1em;
          color: #666;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fadeInUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        section {
          margin-top: 40px;
          padding: 20px;
          border: 1px solid #eaeaea;
          border-radius: 8px;
          background: #f9f9f9;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.5s forwards;
        }

        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 600px) {
          header h1 {
            font-size: 2em;
          }

          .hero h2 {
            font-size: 2em;
          }

          .navbar ul {
            flex-direction: column;
            align-items: center;
          }

          .navbar ul li {
            margin: 5px 0;
          }

          .image-carousel img {
            max-width: 80%;
            margin: 0 5px;
          }
        }
      `}</style>

      <header>
        <h1>Smart Canteen | A Smarter Way to Dine</h1>
        <p>Welcome to your digital canteen experience!</p>
      </header>

      {/* Hero Section */}
      <div className="hero">
        <div className="image-carousel">
          <img src="https://img.lovepik.com/free-template/bg/20200922/bg/89f62409cf6c4_415671.png_list.jpg" alt="img" />
          <img src="https://i.pinimg.com/originals/21/2d/57/212d57e1c725204a1e34369dd3f92113.png" alt="img" />
          <img src="https://i.pinimg.com/originals/32/92/26/32922628d4b01b32d31eb9d42afc0f55.jpg" alt="img" />
          <img src="https://masterbundles.com/wp-content/uploads/2023/03/specieal-offer-850.jpg" alt="img" />
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="menu.html">Menu</a></li>
          <li><a href="preferences.html">Preferences</a></li>
          <li><a href="qr_code.html">QR Payment</a></li>
          <li><a href="queue.html">Queue</a></li>
          <li><a href="specials.html">Specials</a></li>
          <li><a href="ratings.html">Feedback</a></li>
          <li><a href="nutrition.html">Nutrition</a></li>
          <li><a href="myorder.html">CART</a></li>
          <li><a href="order.html">ORDER</a></li>
        </ul>
      </nav>

      <main>
        <section>
          <h2>Welcome to the Smart Canteen!</h2>
          <p>Choose an option from the navigation menu to explore our features.</p>
        </section>
        <section>
          <h2>Why Choose Us?</h2>
          <p>Experience a seamless and digital dining journey with our innovative features.</p>
        </section>
        <section>
          <h2>Our Special Offers</h2>
          <p>Don't miss out on our daily specials and exclusive discounts!</p>
        </section>
      </main>
    </div>
  );
}
