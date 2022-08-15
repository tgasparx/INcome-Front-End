import { Button, Container, Input, Label } from "./styles";


export default function Comp2(){

    return (
        <Container>
            <Label>Nome</Label>
        <Input value=""/>
        <Label>Email</Label>
        <Input value=""/>
        <Label>Cnpj</Label>
        <Input value=""/>
        <Button>Adicionar</Button>
        </Container>
    )
}