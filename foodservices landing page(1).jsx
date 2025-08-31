import React, { useState } from "react";

export default function FoodServices() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, location } = formData;

    if (name === "" || phone === "" || location === "") {
      alert("Please fill in all required fields!");
    } else {
      alert(`Thank you ${name}! We will contact you soon.`);
      setFormData({ name: "", phone: "", location: "", message: "" });
    }
  };

  const scrollToMenu = () => {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "linear-gradient(to right, #ffecd2, #fcb69f)" }}>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#ff5733",
          padding: "15px 50px",
          color: "white",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <h1 style={{ margin: 0, fontSize: "28px" }}>Food Services</h1>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex" }}>
          <li style={{ margin: "0 15px" }}>
            <a href="#home" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>Home</a>
          </li>
          <li style={{ margin: "0 15px" }}>
            <a href="#menu" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>Menu</a>
          </li>
          <li style={{ margin: "0 15px" }}>
            <a href="#contact" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: 'url("https://source.unsplash.com/1600x600/?restaurant,food") no-repeat center/cover',
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "40px" }}>Delicious Food Delivered To You</h2>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Order your favorite meals from the comfort of your home.
        </p>
        <button
          onClick={scrollToMenu}
          style={{
            padding: "12px 25px",
            background: "#ff5733",
            border: "none",
            color: "white",
            fontSize: "18px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.target.style.background = "#e74c3c")}
          onMouseOut={(e) => (e.target.style.background = "#ff5733")}
        >
          Order Now
        </button>
      </section>

      {/* Menu Section */}
      <section id="menu" style={{ padding: "50px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px", color: "#333" }}>Our Menu</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              img: "https://images.unsplash.com/photo-1601924582971-c9e1d4a5c1a5",
              title: "Pizza",
              desc: "Cheesy and hot pizzas made fresh for you.",
            },
            {
              img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
              title: "Burger",
              desc: "Juicy burgers with crispy fries.",
            },
            {
              img: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
              title: "Pasta",
              desc: "Creamy pasta with rich flavors.",
            },
            {
              img: "https://images.unsplash.com/photo-1606756790138-181f8f2e90f6",
              title: "Salad",
              desc: "Fresh and healthy salads with organic ingredients.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                width: "250px",
                padding: "15px",
                textAlign: "center",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <h3 style={{ margin: "10px 0", color: "#ff5733" }}>{item.title}</h3>
              <p style={{ fontSize: "14px", color: "#666" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "50px",
          background: "#ff5733",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "400px",
            margin: "auto",
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            color: "black",
          }}
        >
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              margin: "8px 0",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <input
            type="text"
            id="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              margin: "8px 0",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <input
            type="text"
            id="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              margin: "8px 0",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <textarea
            id="message"
            rows="4"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              margin: "8px 0",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px 20px",
              background: "#ff5733",
              border: "none",
              color: "white",
              fontWeight: "bold",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
            }}
            onMouseOver={(e) => (e.target.style.background = "#e74c3c")}
            onMouseOut={(e) => (e.target.style.background = "#ff5733")}
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "15px", background: "#333", color: "white" }}>
        <p>© 2025 Food Services. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
