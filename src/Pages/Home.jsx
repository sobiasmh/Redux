import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import pic from ".././assets/images/image.PNG";
import { useDispatch } from "react-redux";
import { add } from "../features/userSlice/Userslice";

const url = "https://jsonplaceholder.typicode.com/users";

const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        console.log("response", response.data);
        setProducts(response.data); 
        setLoading(false); 
      } catch (error) {
        console.log(error);
        setLoading(false); 
      }
    };
    fetchData();
  }, []);

  const addProfile = (item) => {
    dispatch(add(item));
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Active User's</h1>
      </div>
      <hr />
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          gap: "80px",
          padding: "10px",
          margin: "10px",
        }}
      >
        {loading ? (
          <CircularProgress /> 
        ) : (
          products?.map(
            (
              item 
            ) => (
              <div key={item.id}>
                <Card
                  sx={{
                    border: "2px solid lime",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    width: "20rem",
                    height: "17rem",
                  }}
                >
                  <img
                    style={{ height: "8rem", width: "8rem" }}
                    src={pic}
                    alt="pic"
                  />
                  <CardContent sx={{ textAlign: "start" }}>
                    <Typography>
                      <span style={{ fontWeight: "bold" }}>Name:</span>{" "}
                      {item.name}
                    </Typography>
                    <Typography>
                      <span style={{ fontWeight: "bold" }}>User Name:</span>{" "}
                      {item.username}
                    </Typography>

                    <br />
                    <Button
                      variant="contained"
                      onClick={() => navigate(`/profile/${item.id}`)}
                      sx={{ padding: "5px", margin: "5px" }}
                    >
                      View Profile
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => addProfile(item)}
                      sx={{ padding: "5px", margin: "5px" }}
                    >
                      Add Profile
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )
          )
        )}
      </div>
    </>
  );
};

export default Home;
