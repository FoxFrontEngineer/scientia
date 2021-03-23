import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { useAuth } from "../../../contexts/AuthContext";


import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Registration() {
    const classes = useStyles();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)
    const history = useHistory()

    useEffect(() => {
        const clickEvent = () => {
            if (error !== null) {
                setError(null)
            }
        }
        document.addEventListener("click", clickEvent);
        return function () {
            document.removeEventListener("click", clickEvent);
        }
    }, [error]);

    async function handleSubmit(e) {
        e.preventDefault()
        setError(null)
        setLoading(true);
        try {
            const response = await signup(emailRef.current.value, passwordRef.current.value)
            if (response.additionalUserInfo.isNewUser) {
                setSuccess('Пользователь зарегистрирован');
                setTimeout(() => {
                    history.push("/")
                }, 1000)
            } else {
                setError('Что-то пошло не так :(')
            }
        } catch (e) {
            setError(e.message)
        }
        setLoading(false);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                Регистрация
            </Typography>
            {error &&  <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">{success}</Alert>}
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                    inputRef={emailRef}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email адрес"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    inputRef={passwordRef}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Пароль"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    disabled={loading}
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Регистрация
                </Button>
            </form>
        </Container>
    )
}