import { ThemeProvider, createTheme } from '@mui/material/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, Outlet } from 'react-router-dom';
import { Box, AppBar, Toolbar, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


const customTheme = createTheme({
  palette: {
    primary: {
      main: '#c6e2ff',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='primary'>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} m={3} >
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>{<HomeIcon fontSize='large'></HomeIcon>}</Link>
            </Typography>
            <Typography variant="h4" component="div" sx={{ flexGrow: 20, }} fontFamily={'Brush Script MT'}  > Webbshopp GIK2XK 
            </Typography>
            <Button > <Link to="/products/new" style={{ textDecoration: 'none', color: 'black' }} > {<SettingsIcon fontSize="large"></SettingsIcon>} </Link></Button>
            <IconButton aria-label="cart"><Link to="/cart/">
              <StyledBadge badgeContent={0} color="secondary">
                <ShoppingCartIcon fontSize="large" style={{ textDecoration: 'none', color: 'black' }} />
              </StyledBadge>
              </Link></IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;


