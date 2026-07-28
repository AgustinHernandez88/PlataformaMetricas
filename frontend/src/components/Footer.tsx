import { footerLinks } from '../constants';

interface FooterLink {
  name: string;
  url: string;
}

const Footer = () => {
  return (
    <footer style={{
      width: '100%',
      marginTop: 'auto',
      padding: '1.5rem 1rem',
      backgroundColor: 'rgba(23, 23, 23, 0.8)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      color: '#a3a3a3',
      fontSize: '0.8125rem',
      boxSizing: 'border-box'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <div>
          <span>Copyright © {new Date().getFullYear()} </span>
          <strong style={{ color: '#fff' }}>Agustín Hernández</strong>. All rights reserved.
        </div>

        <nav style={{ display: 'flex', gap: '1.25rem' }}>
          {(footerLinks as FooterLink[]).map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#6366f1',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.2s'
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
