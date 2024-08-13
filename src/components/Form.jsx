import React, { useState } from "react";

const Form = ({ breweries, setBreweries }) => {
  const [formData, setFormData] = useState({
    name: "",
    brewery_type: "",
    address_1: "",
    address_2: null,
    address_3: null,
    city: "",
    state_province: "",
    postal_code: "",
    country: "",
    longitude: "",
    latitude: "",
    phone: "",
    website_url: "",
    state: "",
    street: "",
  });

  function handlesAdds(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handle_submit() {
    fetch("https://api.openbrewerydb.org/breweries", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((brew) => {
        setBreweries(brew, ...breweries);
        setFormData({
          name: "",
          brewery_type: "",
          address_1: "",
          address_2: null,
          address_3: null,
          city: "",
          state_province: "",
          postal_code: "",
          country: "",
          longitude: "",
          latitude: "",
          phone: "",
          website_url: "",
          state: "",
          street: "",
        });
      })
      .catch((err) => console.error(err));
  }
  return (
    <div>
      <h1>Add Your Brand</h1>
      <form onSubmit={handle_submit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            onchange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="brewery_type">Brewery Type: </label>
          {/* should have options */}
          <input
            type="text"
            name="name"
            value={formData.brewery_type}
            required
            onchange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="address_1">address_1: </label>
          <input
            type="text"
            name="address_1"
            value={formData.address_1}
            required
            onchange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="address_2">address_2: </label>
          <input
            type="text"
            name="address_2"
            value={formData.address_2}
            onchange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="address_3">address_3: </label>
          <input
            type="text"
            name="address_3"
            value={formData.address_3}
            onchange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="city">City: </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            required
            onchange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="state_province">State Province: </label>
          <input
            type="text"
            name="state_province"
            value={formData.state_province}
            required
            onchange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="postal_code">Postal Code: </label>
          <input
            type="number"
            name="postal_code"
            value={formData.postal_code}
            required
            onchange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="country">Country: </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            required
            onchange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="longitude">Longitude: </label>
          {/* Adding locations */}
          <input
            type="number"
            name="longitude"
            value={formData.longitude}
            required
            onchange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="latitude">Latitude: </label>
          {/* Adding locations */}
          <input
            type="number"
            name="latitude"
            value={formData.latitude}
            required
            onchange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input
            type="tel"
            name="phone"
            pattern="[0-9]{3}- [0-9]{2}- [0-9]{3}"
            value={formData.phone}
            required
            onchange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="website_url">Add Homepage: </label>
          <input
            type="url"
            name="website_url"
            value={formData.website_url}
            required
            onchange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="state">States: </label>
          <input
            type="text"
            name="state"
            value={formData.state}
            required
            onchange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="street">Street: </label>
          <input
            type="text"
            name="street"
            value={formData.street}
            required
            onchange={handlesAdds}
          />
        </div>
        <input type="submit" value="Add Brand" />
      </form>
    </div>
  );
};

export default Form;
