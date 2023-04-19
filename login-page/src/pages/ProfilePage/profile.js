import React from "react";
import "./profile.css";
import NavBar from "../../components/navBar/NavBar";
import ProfileBox from "../../components/profileBox/ProfileBox";
import { rows } from "../../components/mainTable/mainTable";
import {useLocation} from 'react-router-dom';

export default function ProfilePage(){
    const location = useLocation();
    return (
        <>
        <NavBar/>
        
        {rows((p) => (
            <ProfileBox key={p.id} firstName = {p.firstName} lastName = {p.lastName} profile={p}/>
        ))}
        
        </>
    
    )
}