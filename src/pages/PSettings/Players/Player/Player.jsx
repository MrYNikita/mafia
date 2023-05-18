import styled from "styled-components";
import BInput from "../../../../components/basic/BInput";
import BLayout from "../../../../components/basic/BLayout";
import BWrapper from "../../../../components/basic/BWrapper";

const Player = (props) => {

    const {

        name,

    } = props;

    return (
        <Wrapper>
            <Layout>
                <Input defaultValue={name}/>
            </Layout>
        </Wrapper>
    );

};

export default Player;

const Input = styled(BInput)`
    
`;
const Layout = styled(BLayout)`
`;
const Wrapper = styled(BWrapper)`
height: 5vh;
`;