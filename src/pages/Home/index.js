import React, {useEffect, useState, useRef, useCallback} from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native'
import {Container, TitleBox, BoxSelect, BoxMen, TitleMen, BoxWomen, 
    TitleWomen, ImageMen, ImageWomen, BoxBorderMen, BoxBorderWomen, TextTitle, BoxButton} from './styles';

import { useNavigation } from '@react-navigation/native';    
import { withNavigationFocus } from '@react-navigation/compat';

import { TextInputMask } from 'react-native-masked-text'

import ButtonSubmit from '../../components/ButtonSubmit';
import ButtonClear from '../../components/ButtonClear';

import Women from '../../assets/women.jpg';
import Men from '../../assets/men.jpg';

import { Form } from '@unform/mobile';

function Home({isFocused}) {
    const {navigate} = useNavigation();

    const [loading, setLoading] = useState(false);

    const [selectMen, setSelectMen] = useState(false);
    const [selectWomen, setSelectWomen] = useState(false);

    const [inputYears, setInputYears] = useState();
    const [inputMonth, setInputMonth] = useState();

    const formRef = useRef(null);

    useEffect(() => {
        if (isFocused) {
            setSelectMen(false);
            setSelectWomen(false);
            setLoading(false);
            setInputYears();
            setInputMonth();
        }
         
    }, [isFocused]);

    function men() {
        if (selectMen === false) {
            setSelectMen(true);
            setSelectWomen(false);
        }
    }

    function women() {
        if (selectWomen === false) {
            setSelectMen(false);
            setSelectWomen(true);
        }
    }

    const handleSubmit = useCallback(() => {
        navigate('Result');
     }, [navigate])

    function handleClear() {
        setSelectMen(false);
        setSelectWomen(false);
        setLoading(false);
        setInputYears();
        setInputMonth(); 
    }

    return (
        <KeyboardAvoidingView style={{flex : 1}}>
            <ScrollView style={{flex: 1}}>
                <Container>
                    <TitleBox>Você é: </TitleBox>
                    <BoxSelect>
                        <BoxMen onPress={men}>
                            <BoxBorderMen style={selectMen === true && {borderColor: '#00004F'}}>
                                <ImageMen source={Men}/>
                                <TitleMen>Homem</TitleMen>
                            </BoxBorderMen>                    
                        </BoxMen>
                        <BoxWomen onPress={women}>
                            <BoxBorderWomen style={selectWomen === true && {borderColor: '#00004F'}}>                    
                                <ImageWomen source={Women} />
                                <TitleWomen>Mulher</TitleWomen>
                            </BoxBorderWomen>
                        </BoxWomen>                
                    </BoxSelect>
                
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <TextTitle>Sua idade:</TextTitle>
                        <TextInputMask
                            type={'only-numbers'}
                            value={inputYears}
                            onChangeText={text => {
                                setInputYears(text);
                            }}                        
                            style={{
                                backgroundColor: '#FAFBFD',
                                width: 350,
                                borderRadius: 20,
                                padding: 15,
                                fontSize: 18,
                                color: '#000',
                            }}
                            placeholder={'Exemplo: 18'}
                            placeholderTextColor={'#000'}

                            />    
                        <TextTitle>Tempo total de contribuição em meses:</TextTitle>
                        <TextInputMask
                            type={'only-numbers'}
                            value={inputMonth}
                            onChangeText={text => {
                                setInputMonth(text);
                            }}
                            style={{
                                backgroundColor: '#FAFBFD',
                                width: 350,
                                borderRadius: 20,
                                padding: 15,
                                fontSize: 18,
                                color: '#000',
                            }}
                            placeholder={'Exemplo: 64'}
                            placeholderTextColor={'#000'}
                            /> 
                        </Form>

                        <BoxButton>
                            <ButtonSubmit loading={loading} 
                                onPress={() => {formRef.current.submitForm()}} style={{width: 300}}>Calcular</ButtonSubmit>
                            <ButtonClear onPress={handleClear} style={{width: 300}}>Limpar</ButtonClear>
                        </BoxButton>
                    </Container>
                </ScrollView>
        </KeyboardAvoidingView>
        
    )
}

export default withNavigationFocus(Home);