import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
`;

export const TitleBox = styled.Text`
    font-size: 20px;

    font-weight: bold;

    margin-bottom: 30px;

`;

export const BoxSelect = styled.View`
    flex-direction: row;
    justify-content: space-around;

    width: 400px;
    
`;

export const BoxMen = styled(RectButton)`
    flex-direction: column;
    align-items: center;

`;

export const TitleMen = styled.Text`
    font-size: 18px;
    font-weight: bold;

    margin-top: 10px;

`;

export const BoxWomen = styled(RectButton)`
    flex-direction: column;
    align-items: center;

`;

export const TitleWomen = styled.Text`
    font-size: 18px;
    font-weight: bold;

    margin-top: 10px;
`;

export const ImageMen = styled.Image`
    border-radius: 50px;

`;

export const ImageWomen = styled.Image`
    border-radius: 50px;
`;