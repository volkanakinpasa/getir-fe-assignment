import Body from './components/styles/Body.styled';
import Footer from './components/Footer';
import GlobalStyle from './components/styles/Global.styled';
import Header from './components/header/Header';
import LeftBar from './components/LeftBar';
import Main from './components/styles/Main.styled';
import RigthBar from './components/RigthBar';

function App() {
  return (
    <Body>
      <GlobalStyle />
      <Header />
      <Main>
        <LeftBar />
        <RigthBar />
      </Main>
      <Footer />
    </Body>
  );
}

export default App;
