import React from "react";
import { useSelector } from "react-redux";
import {
  Typography,
  Box,
  Modal,
  Container,
  FormGroup,
  CardMedia,
  ListItemText,
  Button,
} from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "500px",
  height: "550px",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const DetailModal = ({
  setShowModal = () => {},
  showModal = false,
  handleClose = () => {},
  item = {},
}) => {
  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Container>
          <CardMedia
            component='img'
            alt={item?.title}
            height='300'
            width='200'
            image={item?.cover_image}
            title={item?.title}
            style={{ objectFit: "contain" }}
          ></CardMedia>
          <Typography marginTop={2} align='center'>
            {item.title}
          </Typography>
          <Typography
            marginTop={1}
            align='center'
          >{`Style: ${item.style}`}</Typography>
          <Typography
            marginTop={1}
            align='center'
          >{`Genre: ${item.genre}`}</Typography>
          <Typography
            marginTop={1}
            align='center'
          >{`Country: ${item.country}`}</Typography>
        </Container>
        <Typography
          marginTop={1}
          align='center'
        >{`Year: ${item.year}`}</Typography>
        <Button
          aria-label='outlined primary button group'
          variant='contained'
          style={{ marginLeft: "44%", marginTop: "2vh" }}
          onClick={() => setShowModal(false)}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default DetailModal;
