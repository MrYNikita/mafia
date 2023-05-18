import styled from "styled-components";
import BLayout from "../../../components/basic/BLayout";
import BWord from "../../../components/basic/BWord";
import BWrapper from "../../../components/basic/BWrapper";

const Item = (props) => {

    const {

        name,
        action,

    } = props;

    return (
        <Wrapper onClick={action}>
            <Layout>
                <Word>{name}</Word>
            </Layout>
        </Wrapper>
    );

};

export default Item;

const Word = styled(BWord)`
`;
const Layout = styled(BLayout)`
color: var(--color-2);
background: none;
`;
const Wrapper = styled(BWrapper)`
width: min-content;
height: min-content;
padding: 0.5vh 0.5vw;

&:hover {
    background-color: var(--color-3);
    border-radius: 14px;
}
`;