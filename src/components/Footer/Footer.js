import React from 'react';
import './Footer.css'
import { FaFacebookSquare, FaGithub } from 'react-icons/fa';


const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer class="text-neutral-content ">
      <div className='footer-grid'>
        <div className='div'>
          <span className='title-footer text-center'>Developed By <a href="">Jawad Jisan</a> | &#169;

            {year} All rights reserved.</span>

        </div>
        <div className='items-center div'>
          <span class="title-footer">Social</span>
          <div class="social">
            <a className='footer-icon' target='_blank' href='https://web.facebook.com/profile.php?id=100054546439637'> <FaFacebookSquare /> </a>
            <a className='footer-icon' href='https://github.com/' target='_blank'> <FaGithub /> </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;