import React from 'react';
import './Footer.css'; // Make sure to create a corresponding Footer.css file

function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} The Cat Chronicles Company</p>
      <p>Privacy Policy | Terms of Service | Ad Choices</p>
    </footer>
  );
}

export default Footer;
