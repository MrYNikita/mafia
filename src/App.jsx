import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styled from "styled-components";
import BLayout from "./components/basic/BLayout";
import BWrapper from "./components/basic/BWrapper";
import PGame from "./pages/PGame/PGame";
import PMenu from "./pages/PMenu";
import PMusics from "./pages/PMusics/PMusics";
import PSettings from "./pages/PSettings/PSettings";
import StyleGlobal from "./Style";
import Footer from "./UI/attachments/Footer";
import Header from "./UI/attachments/Header";
import Main from "./UI/attachments/Main";

function App() {

    return (
        <>
            <StyleGlobal />
            <Wrapper>
                <Layout>
                    <Header />
                    <Main>
                        <Router>
                            <Routes>
                                <Route exact path='/' Component={PMenu} />
                                <Route path='/game' Component={PGame} />
                                <Route path='/music' Component={PMusics} />
                                <Route path='/restart' />
                                <Route path='/records' />
                                <Route path='/settings' Component={PSettings} />
                            </Routes>
                        </Router>
                    </Main>
                    <Footer />
                </Layout>
            </Wrapper>
        </>
    );

}

export default App;

const Layout = styled(BLayout)`
display: grid;
grid-template-areas:
    "header"
    "main"
    "footer";
grid-template-rows: 0vh 100vh 0vh;
grid-template-columns: 100vw;
`;
const Wrapper = styled(BWrapper)`
background-image: linear-gradient(to bottom right, var(--color-0) 50%, var(--color-1) 50%);
`;