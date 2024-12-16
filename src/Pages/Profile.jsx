import axios from "axios";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import pic from ".././assets/images/image.PNG";

const url = "https://jsonplaceholder.typicode.com/users";

const Profile = () => {
  const navigate = useNavigate();
  const { userid } = useParams();
  const [user, setUser] = useState(null); // Initialize as null instead of an array
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${url}/${userid}`);
        console.log(response);

        setUser(response.data); // Set user data from the response
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress color="success" />
      ) : user ? (
        <div key={user.id}>
          <Card
            sx={{
              border: "2px solid lime",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              width: "20rem",
              margin: "2rem",
            }}
          >
            <img
              style={{ height: "80px", width: "80px" }}
              src={pic}
              alt="pic"
            />
            <CardContent sx={{ textAlign: "start" }}>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Name:</span> {user.name}
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>User Name:</span>{" "}
                {user.username}
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Phone No:</span>{" "}
                {user.phone}
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Email:</span> {user.email}
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Website:</span>{" "}
                {user.website}
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Company Name:</span>{" "}
                {user.company.name}
              </Typography>
              <br />
              <Button variant="contained" onClick={() => navigate("/")}>
                Home
              </Button>
            </CardContent>
          </Card>
        </div>
      ) : null}{" "}
      {/* If user is null, render nothing */}
    </>
  );
};

export default Profile;
