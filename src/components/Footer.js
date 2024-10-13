import React from 'react';
import './Footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <div className='line-container'>
                <div className="line"></div>
            </div>
            <div className='text-container'>
                <div className="links">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Membership Terms</p>
                    <p>IP Policy</p>
                    <p>Cookie Settings</p>
                    <p>Accessibility</p>
                    <p>California Transparency Act</p>
                    <p className="copyright">© {new Date().getFullYear()} Brian's Stud Muffins. All rights reserved.</p>
                </div>
                <div className='logo'>
                    Logo Here
                </div>
            </div>

        </footer>
    );
};