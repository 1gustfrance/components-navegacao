import React from 'react';
import { FiThumbsUp} from 'react-icons/fi';

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles';

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://i.pinimg.com/736x/11/8d/6b/118d6b80f0f5e9e132b0f9baa0717567.jpg" />
            <Content>
                <UserInfo>
                    <UserPicture  src="https://avatars.githubusercontent.com/u/108553946?v=4"/>
                    <div>
                        <h4>Gustavo de França</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto React CLI</h4>
                    <p>Projeto de Estudo ... <strong>Saiba mais</strong> </p> 
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript</h4>
                    <p>
                        <FiThumbsUp /> 16
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }