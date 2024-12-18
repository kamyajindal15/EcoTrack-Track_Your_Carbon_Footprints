import './Css/home.css'
import { Navigate , useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Logged_Button from './Logged_Button';

export default function Home()
{
    const nav = useNavigate();

    const [user, setuser] = useState(false);

    const About_page = () =>
    {
        nav('/aboutus');
    }
    const Contact_page = () =>
    {
        nav('/contact');
    }
    const Faqs_page = () =>
    {
        nav('/faqs');
    }
    const Stats = () =>
    {
        nav('/stats');
    }
    const Calculator = () =>
    {
        nav('/calc');
    }
    const Personal_form = () =>
    {
        nav('/personal');
    }


    useEffect(() => {
        if(!localStorage.getItem("jwtToken"))
        {
            setuser(false);
        }
        else
        {
            setuser(true);
        }
    }, [])
        
        
    const Scroll = () => {
        const element = document.getElementById('HIW');
        if (element) 
        {
            element.scrollIntoView({ behavior: 'smooth'});
        }
    };

    const Scroll_Top = () => {
        const element = document.getElementById('top');
        if (element) 
        {
            element.scrollIntoView({ behavior: 'smooth'});
        }
    };


    return (
        <div>
            <button className='Go_up' onClick={Scroll_Top}></button>
            <div className='image'>
                <div className='space' id='top'>
                    <Logged_Button Loggedin={user}></Logged_Button>
                </div>
                <div className="header">
                    <h1 color="white">Track Your Impact. Reduce Your Footprint.</h1>
                    <h3>Calculate your carbon footprint and discover ways to live a more sustainable lifestyle.</h3>
                    
                    <button onClick={Scroll}><p>Get Started</p></button>
                </div>
            </div>

            <div className='sec_2'>
                <h2>Why Track Your Footprint?</h2><br></br>
                <p>Understand your impact on the environment.</p>
                <p>Identify areas for improvement.</p>
                <p>Empower yourself to make a difference.</p>
            </div>

            <div className='sec_3' id='HIW'>
                <h2>How it Works</h2><br></br>
                <div className='sec_3_flex'>
                    <div className='sec_3_flexboxs' onClick={Calculator}>
                        <h1>We Calculate Your Footprint</h1>
                        <p>We analyze your data and estimate your footprint.</p>
                    </div>
                    <div className='sec_3_flexboxs' onClick={Stats}>
                        <h1>Statistical Analysis</h1>
                        <p>Some graphs to represent how carbon footprints have affected the environment over the years.</p>
                    </div>
                    <div className='sec_3_flexboxs' onClick={Personal_form}>
                        <h1>Get Personalized Tips</h1>
                        <p>Discover ways to reduce your footprint and live more sustainably.</p>
                    </div>
                </div>
            </div>

            <div className='sec_4'>
                <h2>Benefits of Reducing Your FootPrint</h2><br></br>
                <div className='sec_4_flex'>
                    <div className='sec_4_flexboxs'>
                        <h1>Cleaner Air</h1>
                        <p>Reduce pollution and breathe easier.</p>
                    </div>
                    <div className='sec_4_flexboxs'>
                        <h1>Healthy Forests</h1>
                        <p>Protect ecosystems and biodiversity.</p>
                    </div>
                    <div className='sec_4_flexboxs'>
                        <h1>Happy Wildlife</h1>
                        <p>Support a sustainable planet for all.</p>
                    </div>
                </div>
            </div>

            <div className='footer'>
                <h1>&copy; 2024 Compant Name. All Rights Reserved.</h1>
                <div className='footer_social'>
                    <div className='footer_anc' onClick={About_page}>AboutUs</div>
                    <div className='footer_anc' onClick={Contact_page}>Contact</div>
                    <div className='footer_anc' onClick={Faqs_page}>FAQs</div>
                </div>
            </div>
        </div>
    )
}