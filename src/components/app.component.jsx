import { injectGlobal } from '@emotion/css';
import { container, headerBackground, headerText } from './app.style';
import { ReviewList } from './reviews';

const App = () => {
  return (
    <div className={container}>
      <div className={headerBackground} />
      <div className={headerText}>
        <p>ID: 091021</p>
        <p>La Casa Del Floras</p>
      </div>
      <ReviewList />
    </div>
  );
};

export default App;

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    height:100%;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height:100%;
    min-height: 100vh;
    font-size: 1.4rem;
    background-color: #f5f8f9;
    
    @media (min-width: 340px) {
      font-size: 1.6rem;
    }
  }
`;
