import React, { useState } from "react";

function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    flowerColor: "red",
    quantity: 1,
    deliveryDate: "",
    deliveryTime: "",
    paymentMethod: "elBankininkyste",
    comment: "",
  });

  const [availableTimes, setAvailableTimes] = useState([
    "10:00", "12:00", "14:00", "16:00", "18:00",
  ]);

  const flowerPrices = {
    red: 2,
    pink: 2.5,
    white: 2,
    lightpink: 3,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ačiū už užsakymą! Jūsų užsakymas buvo priimtas.`);
    setAvailableTimes(availableTimes.filter((time) => time !== formData.deliveryTime));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto", textAlign: "left" }}>
        <h1 style={{ textAlign: "center" }}>Užsakymo forma</h1>

        {/* Vardas */}
        <label>Vardas:</label>
        <input
          type="text"
          name="name"
          placeholder="Jūsų vardas"
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        {/* El. paštas */}
        <label>El. paštas:</label>
        <input
          type="email"
          name="email"
          placeholder="Jūsų el. paštas"
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        {/* Telefonas */}
        <label>Telefonas:</label>
        <input
          type="tel"
          name="phone"
          placeholder="Jūsų telefono numeris"
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        {/* Pristatymo adresas */}
        <label>Pristatymo adresas:</label>
        <input
          type="text"
          name="address"
          placeholder="Adresas pristatymui"
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        {/* Gėlių spalva */}
        <label>Gėlių spalva:</label>
        <select
          name="flowerColor"
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px" }}
        >
          <option value="red">Raudona</option>
          <option value="pink">Rožinė</option>
          <option value="white">Balta</option>
          <option value="lightpink">Rausva</option>
        </select>

        {/* Kiekis */}
        <label>Kiekis:</label>
        <input
          type="number"
          name="quantity"
          onChange={handleChange}
          min="1"
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        {/* Kainos rodymas */}
        <p style={{ textAlign: "center", fontWeight: "bold", marginBottom: "10px" }}>
          Kaina: {formData.quantity * flowerPrices[formData.flowerColor]} €
        </p>

        {/* Pristatymo data */}
        <label>Pristatymo data:</label>
        <input
          type="date"
          name="deliveryDate"
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        {/* Pristatymo laikas */}
        <label>Pristatymo laikas:</label>
        <select
          name="deliveryTime"
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        {/* Apmokėjimo būdas */}
        <label>Pasirinkite apmokėjimo būdą:</label>
        <select
          name="paymentMethod"
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        >
          <option value="elBankininkyste">El. bankininkystė</option>
          <option value="kortele">Mokėjimo kortelė</option>
          <option value="pristatymoMetu">Pristatymo metu</option>
        </select>

        {/* Komentarai */}
        <label>Komentarai:</label>
        <textarea
          name="comment"
          placeholder="Jūsų komentaras..."
          onChange={handleChange}
          style={{ width: "100%", height: "100px", marginBottom: "10px" }}
        />

        {/* Pateikimo mygtukas */}
        <button
          type="submit"
          style={{ width: "100%", backgroundColor: "#ff66b2", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}
        >
          Apmokėti ir užsakyti
        </button>
      </form>

      {/* Puslapio žemėlapis */}
      <footer style={{ marginTop: "50px", borderTop: "1px solid #eb097a", paddingTop: "20px" }}>
        <h3>Puslapio žemėlapis</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}><a href="/">Pagrindinis puslapis</a></li>
          <li style={{ marginBottom: "10px" }}><a href="/catalog">Prekių katalogas</a></li>
          <li style={{ marginBottom: "10px" }}><a href="/order">Užsakyti</a></li>
          <li style={{ marginBottom: "10px" }}><a href="/admin">Administratoriaus prisijungimas</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default OrderForm;