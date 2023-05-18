import { useState } from "react";
import styled from "styled-components";
import BLayout from "../../components/basic/BLayout";
import BWrapper from "../../components/basic/BWrapper";
import Item from "./Item/Item";

const Menu = (props) => {

    const {

        items,

    } = props;

    const [thisItems] = useState(items);
    
    return (
        <Wrapper>
            <Layout>
                {thisItems.map((item, key) => <Item key={key} {...item} />)}
            </Layout>
        </Wrapper>
    );

};

export default Menu;

const Layout = styled(BLayout)`
gap: 1vh 1vw;
display: flex;
padding: 1vh 0.5vw;
align-items: start;
flex-direction: column;
justify-content: left;
`;
const Wrapper = styled(BWrapper)`
grid-area: menu;
padding: 2vh 1vw;
`;