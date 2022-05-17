import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useAppSelector } from "../../../store";
import CloseIcon from "@mui/icons-material/Close"; 
import BasketProductList from "./BasketProductList";
import Badge from '@mui/material/Badge'; 

export default function DrawerMenu() {
  const productsArrayInCard = useAppSelector((state) => state.basket.data);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className="col-12-sm"
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="row drawer-title justify-space-between">
        <h2>Card ({productsArrayInCard.length}) </h2>
        <CloseIcon
          sx={{ cursor: "pointer" }}
          onClick={toggleDrawer(`right`, false)}
        />
      </div>

      <Divider />

      {productsArrayInCard == 0 ? (
        <div className="row justify-center basket-empty">Your card is empty.</div>
      ) : (
        <BasketProductList />
      )}
    </Box>
  );

  return (
    <div>
      <React.Fragment key={`right`}>
      <Badge  badgeContent={productsArrayInCard.length}  overlap="circular" color="primary">
        <div className="row icon" onClick={toggleDrawer(`right`, true)}> 
        
        <MdOutlineShoppingCart size="20px" /> Card
 
         
          
        </div>
        </Badge>

        <Drawer
          anchor={`right`}
          open={state[`right`]}
          onClose={toggleDrawer(`right`, false)}
        >
          {list(`right`)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
