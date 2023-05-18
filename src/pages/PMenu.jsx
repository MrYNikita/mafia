import styled from "styled-components";
import BLayout from "../components/basic/BLayout";
import BWrapper from "../components/basic/BWrapper";
import Menu from "../UI/Menu/Menu";

const PMenu = () => {

    return (
        <Wrapper>
            <Layout>
                <Menu
                    items={[

                        {
                            name: 'Сначала',
                            action() {

                                window.location = '/game';

                            },
                        },
                        {
                            name: 'Продолжить',
                        },
                        {
                            name: 'Музыка',
                            action() {

                                window.location = '/musics';

                            },
                        },
                        {
                            name: 'Рекорды',
                            action() {

                                window.location = '/records';

                            },
                        },
                        {
                            name: 'Настройки',
                            action() {

                                window.location = '/settings';

                            },
                        },

                    ]}
                />
            </Layout>
        </Wrapper>
    );

};

export default PMenu;

const Layout = styled(BLayout)`
display: grid;
grid-template-areas:
    "menu ."
    ". .";
grid-template-rows: 60vh 40vh;
grid-template-columns: 40vw 60vw;
`;
const Wrapper = styled(BWrapper)`
`;