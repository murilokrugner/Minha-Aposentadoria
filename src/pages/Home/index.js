import React from 'react';
import { Alert } from 'react-native'
import {Container, TitleBox, BoxSelect, BoxMen, TitleMen, BoxWomen, TitleWomen, ImageMen, ImageWomen} from './styles';

import Women from '../../assets/women.jpg';
import Men from '../../assets/men.jpg';

function Home() {
    return (
        <Container>
            <TitleBox>Você é: </TitleBox>
            <BoxSelect>
                <BoxMen onPress={() => {Alert.alert('homem')}}>
                    <ImageMen source={Men} />
                    <TitleMen>Homem</TitleMen>
                </BoxMen>
                <BoxWomen>
                    <ImageWomen source={Women} />
                    <TitleWomen>Mulher</TitleWomen>
                </BoxWomen>                
            </BoxSelect>
        </Container>
    )
}

export default Home;