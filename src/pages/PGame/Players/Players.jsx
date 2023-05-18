import { useState } from "react";
import styled from "styled-components";
import BLayout from "../../../components/basic/BLayout";
import BWrapper from "../../../components/basic/BWrapper";
import Player from "./Player/Player";

const Players = (props) => {

    const {

        count,

    } = props;

    const [players, setPlayers] = useState([...new Array(count).fill(0).map(player => player)]);

    return (
        <Wrapper>
            <Layout>
                {players.map((data, key) => <Player key={key} {...{id: key, ...data}} />)}
            </Layout>
        </Wrapper>
    );

};

export default Players;

const Layout = styled(BLayout)`
gap: 1vh 1vw;
flex-direction: column;
`;
const Wrapper = styled(BWrapper)`
grid-area: players;
padding: 1vh 1vw;
`;