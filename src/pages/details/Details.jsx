import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Details.module.css";
import { useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Details = () => {
  const [data, setData] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setData(response.data));
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={styles.container}>
      <div>
        <span>Name:{data?.title}</span>
        <span>
          <Button onClick={handleOpen}>Click to show Desc</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {data?.title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {data?.description}
              </Typography>
            </Box>
          </Modal>
        </span>
      </div>
    </div>
  );
};

export default Details;
