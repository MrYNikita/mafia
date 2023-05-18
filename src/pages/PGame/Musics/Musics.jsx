import styled from "styled-components";
import BLayout from "../../../components/basic/BLayout";
import BWrapper from "../../../components/basic/BWrapper";

import trackBegin from '../../../music/begin.mp3';
import trackTheme from '../../../music/bondiana.mp3';
import trackAction from '../../../music/action.mp3';

const Musics = () => {

    return (
        <Wrapper>
            <Layout>
                <audio src={trackBegin} controls/>
                <audio src={trackTheme} controls/>
                <audio src={trackAction} controls/>
            </Layout>
        </Wrapper>
    );

};

export default Musics;

const Layout = styled(BLayout)`
flex-direction: column;
gap: 1vh 1vw;
`;
const Wrapper = styled(BWrapper)`
grid-area: musics;
`;