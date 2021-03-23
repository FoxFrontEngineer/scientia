import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import { useAuth } from "../../../contexts/AuthContext";
import Alert from '@material-ui/lab/Alert';
import AlertTitle from "@material-ui/lab/AlertTitle";

import { useHistory } from "react-router-dom"

export default function Logout() {
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState(null)
    const history = useHistory()

    async function handleLogout() {
        try {
            if (currentUser) {
                const response = await logout();
                if (response) {
                    history.push("/login")
                }
            }
        } catch (e) {
            setError(e)
        }
    }

    return (
        <>
            {error && <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error alert — <strong>{error}</strong>
            </Alert>}
            <Button  type="submit" onClick={handleLogout}>Выйти</Button>
        </>

    )

}