import React from 'react'
import "./Contact.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <div>BE IN TOUCH WITH US.</div>
            <div className="input">
                <input type="text" placeholder='Enter Your EMAIL...' />
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                <EmailIcon />
                <WhatsAppIcon />
            </div>
        </div>
    </div>
  )
}

export default Contact