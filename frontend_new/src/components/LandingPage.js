import React from 'react'
import storke from '../img/storke.jpg'
import storke2 from '../img/storke2.jpg'
import { BtnLink } from './nav-bar/elements'


export default function LandingPage() {
    return (
        <div style={{ display:'flex', flexDirection:'row', height:'640px' }}>
            <div className="left-container" style={{ flex: 3, textAlign:'center', background:'#d8dded' }}>
                <h1 style={{ fontWeight:'bolder', marginBlock:'40px'}}>Welcome to the UCSB Course Recommender</h1>
                <h4 style={{ color:'GrayText'}}>(For CS Students only currently)</h4>
                <div className="btn-container" style={{ display:'flex', flexDirection:'row', justifyContent:'space-evenly', transform:'translateY(500%)'}}>
                    <BtnLink to='/Survey'>Take the survey!</BtnLink>
                    <BtnLink to='/Input'>See all courses!</BtnLink>
                </div>
            </div>
            <div className="right-container" style={{ flex:2, textAlign:'right', maxWidth:'fit-content' }}>
                <img src={`${storke2}`} style={{ objectFit:'contain', maxHeight:'100%', maxWidth:'100%'}}></img>
            </div>
        </div>
    )
}
