import styled from "styled-components";
import BLayout from "../../components/basic/BLayout";
import BWrapper from "../../components/basic/BWrapper";
import Players from "./Players/Players";

import settings from '../../json/settings.json';

const Settings = () => {

    const {

        players,

    } = settings;

    return (
        <Wrapper>
            <Layout>
                <Players players={players} />
            </Layout>
        </Wrapper>
    );

};

export default Settings;

const Layout = styled(BLayout)`
display: grid;
grid-template-areas:
    "points ."
    "points players";
grid-template-rows: 35vh 65vh;
grid-template-columns: 50vw 50vw;
`;
const Wrapper = styled(BWrapper)`
`;