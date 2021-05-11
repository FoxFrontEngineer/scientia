import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AuthProvider } from "contexts/AuthContext";
import PrivateRoute from "components/services/PrivateRoute/PrivateRoute";

import Grid from '@material-ui/core/Grid';

import AddIndicators from "components/ui/AddIndicators";
import ComposeCharts from "components/ui/charts/ComposeCharts";
import MenuSidebar from "components/ui/MenuSidebar";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

export default function MainScreen() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>This is Main Screen after Login</h1>
            <Grid container>
                <Grid item xs={1}>
                    <MenuSidebar />
                </Grid>
                <Grid item xs={11}>
                        <AuthProvider>
                                <PrivateRoute path="/diagrams" component={ComposeCharts} />
                                <PrivateRoute path="/create-indicators" component={AddIndicators} />
                        </AuthProvider>
                </Grid>
            </Grid>
        </div>
    )
}