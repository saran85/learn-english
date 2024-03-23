import React from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { EASY_ENGLISH_ROUTES } from '../router/routes';
import { Title, TitleLevel } from '@ui5/webcomponents-react';
import Logo from "../../Image/EE.jpg"

export const Home=()=> {
const navigate = useNavigate()
  const onClick=()=>{
    navigate(EASY_ENGLISH_ROUTES.MAIN_ROUTES)
  }
  return (
    <div className="App">
      <header className="App-header">
    {/* <div className="Title">Easy Exercises for English</div>    */}
    <img src={Logo} alt="log" style={{
    height: 350,
    resizeMode: 'stretch',}}/>
      </header>
      <Title level={TitleLevel.H3} style={{color:"#cadbe7"}}>தமிழ் வழி ஆங்கிலம்</Title>
      <button className="mainBtn_navigate" onClick={onClick}> Click to Start</button>
    </div>
  )
}
