import styled from "styled-components";
import BLayout from "../../components/basic/BLayout";
import BWrapper from "../../components/basic/BWrapper";

const Main = (props) => {

    const {

        children,

    } = props;

    return (
        <Wrapper>
            <Layout>
                {children}
            </Layout>
        </Wrapper>
    );

};

export default Main;

const Layout = styled(BLayout)`
`;
const Wrapper = styled(BWrapper)`
grid-area: main;
animation: 0.5s hide reverse forwards;
`;