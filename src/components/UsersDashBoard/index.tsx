import { Container, Content, ContentInfoLeft, ContentInfoRight, Info1, Info2, Info3, Info4} from "./styles";


export default function UsersDashBoard(){


    return (
        <>
      <Container>
        <Content>
            <ContentInfoLeft>
                Nome: <br></br>
                Email: <br></br>
                Função: <br></br>
            </ContentInfoLeft>
            <ContentInfoRight>
                <Info1>Total KM Percorridos</Info1>
                <Info1>Total de pedidos recebidos</Info1>
                <Info3>Total de pedidos finalizados</Info3>
                <Info4>Total de dias trabalhados</Info4>
            </ContentInfoRight>
        </Content>
      </Container>
        </>
    )
}