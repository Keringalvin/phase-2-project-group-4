import React, { useState } from "react";
import Swal from "sweetalert2";

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

  function handle_submit(e) {
    e.preventDefault();
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
        setBreweries([brew, ...breweries]);
        setFormData({
          name: "",
          brewery_type: "",
          address_1: "",
          address_2: "",
          address_3: "",
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
        Swal.fire({
          title: 'Success!',
          text: 'Brewery added successfully.',
          icon: 'success',
          confirmButtonText: 'Okay'
        });
      })
      .catch((err) => {console.error(err)
        Swal.fire({
          title: 'Error!',
          text: 'There was an error adding the brewery.',
          icon: 'error',
          confirmButtonText: 'Okay'
        });
      });
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
            onChange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="brewery_type">Brewery Type: </label>
          {/* should have options */}
          <select name="brewery_type" value={formData.brewery_type} required onChange={handlesAdds}>
            <option value="micro">micro</option>
            <option value="nano">nano</option>
            <option value="regional">regional</option>
            <option value="brewpub">brewpub</option>
            <option value="large">large</option>
            <option value="planning">planning</option>
            <option value="bar">bar</option>
            <option value="contract">contract</option>
            <option value="proprietor">proprietor</option>
            <option value="closed">closed</option>
          </select>
        </div>
        <div>
          <label htmlFor="address_1">Address 1: </label>
          <input
            type="text"
            name="address_1"
            value={formData.address_1}
            required
            onChange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="address_2">Address 2: </label>
          <input
            type="text"
            name="address_2"
            value={formData.address_2}
            onChange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="address_3">Address 3: </label>
          <input
            type="text"
            name="address_3"
            value={formData.address_3}
            onChange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="city">City: </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            required
            onChange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="state_province">State/Province: </label>
          <input
            type="text"
            name="state_province"
            value={formData.state_province}
            required
            onChange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="postal_code">Postal Code: </label>
          <input
            type="number"
            name="postal_code"
            value={formData.postal_code}
            required
            onChange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="country">Country: </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            required
            onChange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="longitude">Longitude: </label>
          <input
            type="number"
            name="longitude"
            value={formData.longitude}
            onChange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="latitude">Latitude: </label>
          <input
            type="number"
            name="latitude"
            value={formData.latitude}
            onChange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input
            type="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={formData.phone}
            required
            onChange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="website_url">Homepage: </label>
          <input
            type="url"
            name="website_url"
            value={formData.website_url}
            required
            onChange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="state">States: </label>
          <input
            type="text"
            name="state"
            value={formData.state}
            required
            onChange={handlesAdds}
          />
        </div>
        <div>
          <label htmlFor="street">Street: </label>
          <input
            type="text"
            name="street"
            value={formData.street}
            required
            onChange={handlesAdds}
          />
        </div>
        <input type="submit" value="Add Brand" />
      </form>
    </div>
  );
};

export default Form;
