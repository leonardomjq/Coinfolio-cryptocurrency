import ThemeContainer from '../contexts/theme/ThemeContainer';
import '../styles/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  );
}

export default MyApp;
