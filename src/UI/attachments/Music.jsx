import styled from "styled-components";
import BLayout from "../../components/basic/BLayout";
import BWrapper from "../../components/basic/BWrapper";

import trackBegin from '../../music/begin.mp3';
import trackTheme from '../../music/bondiana.mp3';
import trackAction from '../../music/action.mp3';

const Music = () => {

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

export default Music;

const Layout = styled(BLayout)`
`;
const Wrapper = styled(BWrapper)`
width: 30vw;
height: 10vh;
`;
