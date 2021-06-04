import React from 'react'
import storke2 from '../img/storke2.jpg'
import { BtnLink } from './nav-bar/elements'


export default function LandingPage() {
    return (
        <div className="LandingPage" style={{ display:'flex', flexDirection:'row', height:'650px' }}>
            <div className="left-container" style={{ flex: 3, flexDirection:'column', textAlign:'center' }}>
                <div className="content" style={{ display:'grid', justifyContent:'center', height:'100%' }}>
                    <div className="headers">
                        <h1 style={{ fontWeight:'bold', paddingTop: '2em'}}>Welcome to the UCSB Course Recommender</h1>
                        <h5 style={{ color:'GrayText', padding:'0px' }}>(For CS Students only currently)</h5>
                    </div>
                    <div className="text-container" style={{ padding: '5em 6em 1em 6em'}}>
                        <p>Hello! Our web app is designed to make the process of viewing and selecting prospective courses for Computer Science students here at the University of California, Santa Barbara an easier process by collecting the most essential pieces of information in one place.</p>
                        <p>For more detailed help choosing courses or if you have any concerns, we whole-heartedly recommend making an appointment with an academic counselor <a href="https://engineering.ucsb.edu/undergraduate/academic-advising" target="_blank">here</a>. </p>
                    </div>
                    <div className="btn-container" style={{ display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignSelf:'flex-start'}}>
                        <BtnLink to='/Survey'>Take the survey!</BtnLink>
                        <BtnLink to='/CourseList'>See all courses!</BtnLink>
                    </div>
                </div>
            </div>
            <div className="right-container" style={{ flex:2, textAlign:'right', maxWidth:'fit-content' }}>
                <img src={`${storke2}`} style={{ objectFit:'contain', maxHeight:'100%', maxWidth:'100%'}}></img>
            </div>
        </div>
    )
}
