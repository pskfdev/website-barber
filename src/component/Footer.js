import React from 'react'
import { ImPhone, ImMail4, ImLocation2, ImClock2, ImFacebook2, ImTwitter, ImBehance, ImLinkedin, ImPinterest } from "react-icons/im";
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className='container-footer'>
                <div className='content-footer1'>
                    <div className='contect-items'>
                        <a><ImPhone /></a>
                        <div className='items-data'>
                            <h4>CALL US</h4>
                            <p>+61 3 8376 6284</p>
                        </div>
                    </div>
                    <div className='contect-items'>
                        <a><ImMail4 /></a>
                        <div className='items-data'>
                            <h4>EMAIL</h4>
                            <p>support@bestlooker.pro</p>
                        </div>
                    </div>
                    <div className='contect-items'>
                        <a><ImLocation2 /></a>
                        <div className='items-data'>
                            <h4>ADDRESS</h4>
                            <p>245 Quigley Blvd, Ste K</p>
                        </div>
                    </div>
                    <div className='contect-items'>
                        <a><ImClock2 /></a>
                        <div className='items-data'>
                            <h4>WE ARE OPENED</h4>
                            <p>Monday-Friday: 11am to 12pm</p>
                            <p>Saturday, Sunday: 9am to 3pm</p>
                        </div>
                    </div>
                </div>

                <div className='content-footer2'>
                    <div className='icon-items'>
                        <a href='#' title='facebook' target='_blank'><ImFacebook2 /></a>
                        <a href='#' title='twitter' target='_blank'><ImTwitter /></a>
                        <a href='#' title='behance' target='_blank'><ImBehance /></a>
                        <a href='#' title='linkedin' target='_blank'><ImLinkedin /></a>
                        <a href='#' title='pinterest' target='_blank'><ImPinterest /></a>
                    </div>
                    <div className='text-items'>
                        <a>© RHYTHM 2022.</a>
                        <p>Made with love for great people.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
