import styled from "styled-components";
import BLayout from "../../components/basic/BLayout";
import BWrapper from "../../components/basic/BWrapper";

const Footer = () => {

    return (
        <Wrapper>
            <Layout>

            </Layout>
        </Wrapper>
    );

};

export default Footer;

const Layout = styled(BLayout)`
`;
const Wrapper = styled(BWrapper)`
grid-area: footer;
`;