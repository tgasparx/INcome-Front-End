import { Container, DashSection, Up, Down, LabelDown, LabelUp, Mid } from "./styles"


interface IDashComponentProps {
    companySummary: any
    companyEmployees: any
}
export default function DashComponent({ companySummary, companyEmployees }: IDashComponentProps) {

    function returnConcluedOrders(type: string) {
       if(type === "qtd"){
        const concluedOrders = companySummary.orders_summary.all_orders.filter((e: any) => e.status !== "Pendente")
        return concluedOrders.length
       }else{
        let result = 0
        const concluedOrders = companySummary.orders_summary.all_orders.filter((e: any) => e.status !== "Pendente")
        for(let i = 0 ; i < concluedOrders.length; i++){
            result = result + concluedOrders[i].value
        }
        return result
       }
    }
    function returnTotalValue(elements: any[]){
        let result = 0
        for(let i = 0 ; i < elements.length; i++){
            result = result + elements[i].value
        }
        return `R$ ${result}`
    }
    return (
        <Container>
            <DashSection>
                <Up color1="blue" color2="darkblue"><LabelUp>{companyEmployees.employees.all_employees.length}</LabelUp></Up>
             
                <Down color="darkblue">
                    <LabelDown>
                        Funcionários
                    </LabelDown>
                </Down>
                <Mid color="blue"><span>Função:</span> Motorista</Mid>
            </DashSection>
            <DashSection>
                <Up color1="red" color2="darkred"><LabelUp>{companySummary.expenses_summary.all_expenses.length}</LabelUp></Up>
               
                <Down color="darkred">
                    <LabelDown>
                        Despesas
                    </LabelDown>
                </Down>
                <Mid color="red"><span>Valor total:</span>{returnTotalValue(companySummary.expenses_summary.all_expenses)}</Mid>

            </DashSection>
            <DashSection>
                <Up color1="darkgreen" color2="green"><LabelUp>{companySummary.orders_summary.all_orders.length}</LabelUp></Up>
              
                <Down color="darkgreen">
                    <LabelDown>
                        Pedidos
                    </LabelDown>
                </Down>
                <Mid color="green"><span>Valor total:</span> {returnTotalValue(companySummary.orders_summary.all_orders)}</Mid>

            </DashSection>
            <DashSection>
                <Up color1="lightgreen" color2="green"><LabelUp>{returnConcluedOrders("qtd")}</LabelUp></Up>
   
                <Down color="darkgreen">
                    <LabelDown>
                        Pedidos concluídos
                    </LabelDown>
                </Down>
                <Mid color="green"><span>Valor total:</span> {returnConcluedOrders("value")}</Mid>
            </DashSection>
        </Container>
    )
}