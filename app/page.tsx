'use client';
import Footer from '@/components/Footer';
import Header from '@/components/header/Header';

export default function Home() {
  return (
    <>
      {/* <Header />
      <main>main</main>
      <Footer /> */}

      <div
        className='w-full bg-olive'
        style={styles.container}
      >
        <header
          style={styles.header}
          className='font-playfair font-black text-gold-400'
        >
          Welcome to My Website
        </header>
        <p style={styles.text}>
          This is a simple example of how to use a dark green background and
          golden foreground while maintaining accessibility and readability.
        </p>
        <button
          style={styles.button}
          onMouseEnter={styles.hoverButton}
          onMouseLeave={styles.defaultButton}
        >
          Click Me
        </button>
      </div>
    </>
  );
}
const styles = {
  container: {
    // backgroundColor: '#0A1402', // Dark green background '#182D09'
    color: '#FFB366', // Neutral off-white for text
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: '2rem',
    // color: '#6C9B34', // Golden foreground
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#2f3a07', // Off-white for better readability
    textAlign: 'center',
    maxWidth: '600px',
    marginBottom: '30px',
  },
  button: {
    backgroundColor: '#cf9353', // Golden
    color: '#1b271f', // Dark green text for contrast
    border: 'none',
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  hoverButton: {
    backgroundColor: '#d8a67d', // Lighter golden on hover
  },
  defaultButton: {
    backgroundColor: '#cf9353', // Default button color
  },
};
