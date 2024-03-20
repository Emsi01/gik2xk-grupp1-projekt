import SettingsIcon from '@mui/icons-material/Settings';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, Outlet} from 'react-router-dom';
import {Box, AppBar, Toolbar, Button, Typography} from '@mui/material';




const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function App() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Hem</Link>
          </Typography>
            <Button color="inherit"> <Link to="/products/new">{<SettingsIcon fontSize="large"></SettingsIcon>} </Link></Button>
            <Button color="inherit"><Link to="/cart/"><IconButton aria-label="cart">
            <StyledBadge badgeContent={0} color="secondary">
            <ShoppingCartIcon fontSize="large" color="inherit" />
            </StyledBadge>
            </IconButton></Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
      <Outlet/>
    </>
  );
}

export default App;
