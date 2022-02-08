import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import DetailModal from "../DetailModal";
import { SET_RELEASE } from "../../store/types";

const ReleaseItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton edge='end' aria-label='delete' size='large'>
            <AddIcon />
          </IconButton>
        }
        key={item.id}
      >
        <ListItemAvatar>
          <Avatar src={item.thumb}></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={item.title}
          secondary={`${item.style ? item.style : ""}`}
          className='results-list-item'
          onClick={(event) => {
            setShowModal(true);
            dispatch({
              type: SET_RELEASE,
              payload: item,
            });
          }}
        />
      </ListItem>
      <DetailModal
        showModal={showModal}
        setShowModal={setShowModal}
        item={item}
      />
    </>
  );
};

export default ReleaseItem;
