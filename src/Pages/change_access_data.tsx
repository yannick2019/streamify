import { useState } from 'react';
import "./username.css";
import { Link, useParams } from "react-router-dom";


function AccessData() {
  const { username: routeUsername } = useParams();
  const storedUsername = localStorage.getItem('username');
  const username = storedUsername || routeUsername || null;

  const [newUsername, setUsername] = useState("");
  const [newEmail, setEmail] = useState("");
  const [newPassword, setPassword] = useState("");
  

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    if (newUsername || newEmail || newPassword) {
      try {
        const queryString = `username=${username}`;
        const url = `https://streamify-api.000webhostapp.com/update_profile.php?${queryString}`;
  
        const response = await fetch(url, {
          method: 'POST',
          mode: "cors",
          credentials: "omit",
          body: JSON.stringify({
            username: routeUsername,
            newUsername,
            newEmail,
            newPassword,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
  
          if (data.success) {
            if (newUsername) {
              localStorage.setItem("username", newUsername);
              window.location.assign(`/streamify/update-data/${newUsername}`);
            } else {
              window.location.assign(`/streamify/update-data/${username}`);
            }
            alert("Data has been saved.");
          } else {
            alert('Failed to update profile.');
          }
        } else {
          console.error('Failed to update profile:', response.statusText);
        }
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    } else {
      alert('Please fill out at least one field.');
    }
  };
  

  return (
    <div className="user d-flex justify-content-center align-items-center vh-100">
      <div className="overlay position-absolute">
      </div>
      <div className="form-user text-center">
        <form onSubmit={handleSubmit}>
          <h2 className="fw-bold pol">Choose you new Username</h2>
          <label className="m-4" style={{ color: "#0071b8" }} htmlFor="">
            <h3>Username:</h3>
          </label>
          <br />
          <input
            className="mb-3 border-0 border-bottom border-black w-50"
            type="text"
            value={newUsername}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <h2 className="fw-bold pol">Choose your new Email</h2>
          <label className="m-4" style={{ color: "#0071b8" }} htmlFor="">
            <h3>Email:</h3>
          </label>
          <br />
          <input
            className="mb-3 border-0 border-bottom border-black w-50"
            type="email"
            value={newEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <h2 className="fw-bold pol">Choose your new Password</h2>
          <label className="m-4" style={{ color: "#0071b8" }} htmlFor="">
            <h3>Password:</h3>
          </label>
          <br />
          <input
            className="mb-3 border-0 border-bottom border-black w-50"
            type="password"
            value={newPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            className="continue-button border-1 border-black"
            type="submit"
          >
            save
          </button>
          <Link className="  fs-6  text-decoration-none"  style={{color:'#0071b8'}} to={"/streamify/home"}>
            {" "}
            Home page
          </Link> |
          <Link className="  fs-6  text-decoration-none"  style={{color:'#0071b8'}} to={"/streamify/profile"}>
            {" "}
            Profile page
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AccessData;