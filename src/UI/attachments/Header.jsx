import styled from "styled-components";
import BLayout from "../../components/basic/BLayout";
import BWrapper from "../../components/basic/BWrapper";

const Header = () => {

    return (
        <Wrapper>
            <Layout>

            </Layout>
        </Wrapper>
    );

};

export default Header;

const Layout = styled(BLayout)`
`;
const Wrapper = styled(BWrapper)`
grid-area: header;
`;