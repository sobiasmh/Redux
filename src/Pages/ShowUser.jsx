import { Button, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import pic from ".././assets/images/image.PNG";
import { removeItem } from "../features/userSlice/Userslice";
import { useDispatch } from "react-redux";

const ShowUser = () => {
  
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user); 

  const [loading, setLoading] = useState(true);

 

  useEffect(() => {
    if (users.length > 0) {
      setLoading(false); 
    }
  }, [users]);

  return (
    <div>
      {loading ? (
        <CircularProgress color="success" />
      ) : (
        users.map((user) => (
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
                  <span style={{ fontWeight: "bold" }}>Name:</span>{" "}
                  {user.name || "N/A"}
                </Typography>
                <Typography>
                  <span style={{ fontWeight: "bold" }}>User Name:</span>{" "}
                  {user.username || "N/A"}
                </Typography>
                <Typography>
                  <span style={{ fontWeight: "bold" }}>Phone No:</span>{" "}
                  {user.phone || "N/A"}
                </Typography>
                <Typography>
                  <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
                  {user.email || "N/A"}
                </Typography>
                <Typography>
                  <span style={{ fontWeight: "bold" }}>Website:</span>{" "}
                  {user.website || "N/A"}
                </Typography>
                <Typography>
                  <span style={{ fontWeight: "bold" }}>Company Name:</span>{" "}
                  {user.company?.name || "N/A"}
                </Typography>
                <br />
                <Button
                  variant="contained"
                  onClick={() => {
                    dispatch(removeItem(user.id));
                  }}
                >
                  Remove Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        ))
      )}
    </div>
  );
};

export default ShowUser;
