import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';
import Payment from '../Payment/Payment';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import AddProduct from '../AddProduct/AddProduct';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct';


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const { user, logout, admin } = useAuth();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/home">
                <Button color="inherit">Home</Button>
            </Link>
            {!admin &&
                <Box>
                    <Divider />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/payment`}>
                        <Button color="inherit">Payment</Button>
                    </Link>
                    <br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/myorders`}>
                        <Button color="inherit">My Orders</Button>
                    </Link>
                    <br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}`}>
                        <Button color="inherit">Review</Button>
                    </Link>
                </Box>
            }
            <br />
            {admin &&
                <Box>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/makeadmin`}>
                        <Button color="inherit">Make admin</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/manageallorders`}>
                        <Button color="inherit">Manage All Orders</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/addproduct`}>
                        <Button color="inherit">Add Product</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/manageallproduct`}>
                        <Button color="inherit">Manage All Product</Button>
                    </Link>
                </Box>
            }
            <br />
            <List>
                {user?.email ?
                    <Box>
                        <Button onClick={logout} color="inherit">Logout</Button>
                    </Box>
                    :
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                        <Button color="inherit">Login</Button>
                    </NavLink>

                }
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <MyOrders />
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageallorders`}>
                        <ManageAllOrder></ManageAllOrder>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageallproduct`}>
                        <ManageAllProduct />
                    </AdminRoute>
                </Switch>



            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
