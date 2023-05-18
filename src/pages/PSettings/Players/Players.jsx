import styled from "styled-components";
import BLayout from "../../../components/basic/BLayout";
import BTitle from "../../../components/basic/BTitle";
import BWrapper from "../../../components/basic/BWrapper";
import Player from "./Player/Player";

const Players = (props) => {

    const {

        players,

    } = props;

    return (
        <Wrapper>
            <Layout>
                <Title>Игроки</Title>
                {players.map((player, key) => <Player key={key} {...player}/>)}
            </Layout>
        </Wrapper>
    );

};

export default Players;

const Title = styled(BTitle)`
    
`;
const Layout = styled(BLayout)`
display: flex;
flex-direction: column;
justify-content: start;
`;
const Wrapper = styled(BWrapper)`
padding: 1vh 1vw;
grid-area: players;
border-radius: var(--border-radius-1);
`;