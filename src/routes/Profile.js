
import React from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../myBase";


const History = () => {
    const history = useHistory();

    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };

    return (
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};

export default History;