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
    height: 180px;
    width: 150px;

    border: 1px;
    border-radius: 20px;

    border-color: #fff;

    
`;

export const BoxBorderMen = styled.View`
    flex-direction: column;
    align-items: center;
    align-items: center;

    width: 150px;
    height: 180px;

    border: 1px;
    border-radius: 20px;

    border-color: #fff;
`;

export const TitleMen = styled.Text`
    font-size: 18px;
    font-weight: bold;
    
    margin-top: 10px;

`;

export const BoxWomen = styled(RectButton)`
    flex-direction: column;
    align-items: center;
    height: 180px;
    width: 150px;
    
    border: 1px;
    border-radius: 20px;

    border-color: #fff;

`;

export const BoxBorderWomen = styled.View`
    flex-direction: column;
    align-items: center;
    align-items: center;

    border: 1px;
    border-radius: 20px;

    border-color: #fff;

    width: 150px;
    height: 180px;

`;

export const TitleWomen = styled.Text`
    font-size: 18px;
    font-weight: bold;

    margin-top: 10px;
`;

export const ImageMen = styled.Image`
    border-radius: 50px;
    margin-top: 5px;
`;

export const ImageWomen = styled.Image`
    border-radius: 50px;
    margin-top: 5px;
`;

export const TextTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 10px;
`;

export const BoxButton = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;    
`;
