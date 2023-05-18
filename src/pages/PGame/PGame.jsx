import styled from "styled-components";
import BLayout from "../../components/basic/BLayout";
import BWrapper from "../../components/basic/BWrapper";

// import Musics from "./Musics/Musics";
// import Players from "./Players/Players";

const PGame = () => {

    return (
        <Wrapper>
            <Layout>

            </Layout>
        </Wrapper>
    );

};

export default PGame;

const Layout = styled(BLayout)`
display: grid;
grid-template-areas:
    ". . . . ."
    ". . . . ."
    ". . . . ."
    ". . . . ."
    ". . . . .";
grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
const Wrapper = styled(BWrapper)`
`;