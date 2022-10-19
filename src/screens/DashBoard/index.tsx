import React from "react";
import { HighLightCard } from "../../components/HighLightCard";
import { Container, Header, Photo, User, UserGreeeting, UserInfo, UserName, UserWrapper, Icon, HighLightCards } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/104873917?v=4' }} />
                        <User>
                            <UserGreeeting>Olá, </UserGreeeting>
                            <UserName>Rodrigo</UserName>
                        </User>
                    </UserInfo>
                    <Icon />
                </UserWrapper>
            </Header>
            <HighLightCards >
                <HighLightCard />

            </HighLightCards>
        </Container>
    )
}