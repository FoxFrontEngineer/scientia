import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    grid: {
        padding: "20px 10px",
    },
    button: {
        margin: theme.spacing(1),
    },
}));

function AddIndicators() {
    const classes = useStyles();
    const { handleSubmit, control } = useForm();
    const onSubmit = data => console.log(data);

    return <Grid container spacing={3}><Grid item xs={6}><Paper elevation={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
            >
                <Grid item className={classes.grid}>
                    <Controller
                        name="distance"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <TextField placeholder="Дистанция" {...field} />}
                    />
                </Grid>
                <Grid item className={classes.grid}>
                    <Controller
                        name="calories"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <TextField placeholder="Калории" {...field} />}
                    />
                </Grid>
                <Grid item className={classes.grid}>
                    <Controller
                        name="time"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <TextField placeholder="Время тренировки" {...field} />}
                    />
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    onClick={handleSubmit(onSubmit)}
                >
                    Сохранить
                </Button>
            </Grid>
        </form>
    </Paper></Grid></Grid>
}

export default AddIndicators;