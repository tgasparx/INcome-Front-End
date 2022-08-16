import { Container, ContainerTopCloseFlag, Content, ContentTopCloseFlag } from "./styles"

interface IEditOrderCompProps{
    setIsOptModalOpen: any
    order: any
}
export default function EditOrderComp({setIsOptModalOpen, order}: IEditOrderCompProps){

    return <Container onMouseLeave={() => setIsOptModalOpen(false)}>
        <ContainerTopCloseFlag
        >
            <ContentTopCloseFlag>
                <button onClick={() => setIsOptModalOpen(false)}> X <br></br>Fechar</button>
            </ContentTopCloseFlag>
        </ContainerTopCloseFlag>
        <Content>
            <div>
                Header
            </div>
         <div>
         <div>
                ID:<br></br>
                Descrição:<br></br>
                Valor:<br></br>
                Status:<br></br>
                Data de criação:<br></br>
                Data de atualização:<br></br>
            </div>
            <div>
            {order.order_id}<br></br>
            {order.description}<br></br>
            {order.value}<br></br>
            {order.status}<br></br>
            {order.created_at}<br></br>
            {order.updated_at}<br></br>
            </div>
         </div>
         <div>
            <label>Descrição</label>
            <input></input>
            <label>Valor</label>
            <input></input>
            <label>Status</label>
            <input></input>
            <button>Confirmar alterações</button>
         </div>
      
        </Content>
    
    
    </Container>
}