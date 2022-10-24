import React from "react";
import { HighLightCard } from "../../components/HighLightCard";
import { TransectionCard, TransectionCardProps } from "../../components/TransectionCard";
import { Container, Header, Photo, User, UserGreeeting, UserInfo, UserName, UserWrapper, Icon, HighLightCards, Transections, Title, TransectionList } from "./styles";

export interface DataListProps extends TransectionCardProps {
    id: string;
}
export function Dashboard() {
    const data: DataListProps[] = [{
        id: '123',
        type: 'positive',
        title: 'Desenvolvimento de site',
        amount: "12.000",
        category:
        {
            name: 'Vendas',
            icon: 'dollar-sign'
        }
        ,
        date: '20/05/2022'
    }]
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
                <HighLightCard title="Entradas" amount="R$ 123.000" lastTransaction="Data tal" type="up"/>

            </HighLightCards>

            <Transections>
                <Title>Listagem</Title>
                <TransectionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransectionCard data={item} />} />
            </Transections>
        </Container>
    )
}