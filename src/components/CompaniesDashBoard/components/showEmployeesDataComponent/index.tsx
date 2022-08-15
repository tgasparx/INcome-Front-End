import { Container, LeftContent, RightContent } from "./styles";

interface IShowEmployeesDataComponentProps{
    companyEmployees: any
}
export default function ShowEmployeesDataComponent({companyEmployees}: IShowEmployeesDataComponentProps){

console.log(companyEmployees)
    return (
        <>
     <Container>
        <LeftContent>
            <span>id:</span>
            <span>Nome:</span>
            <span>Email:</span>
            <span>CPF:</span>
            <span>Data de contratação:</span>
            <span>Data de atualização:</span>


        </LeftContent>
        <RightContent>
            <span>{companyEmployees.employees.all_employees[0].id}</span>
            <span>{companyEmployees.employees.all_employees[0].name}</span>
            <span>{companyEmployees.employees.all_employees[0].email}</span>
            <span>{companyEmployees.employees.all_employees[0].cpf}</span>
            <span>{companyEmployees.employees.all_employees[0].created_at}</span>
            <span>{companyEmployees.employees.all_employees[0].updated_at}</span>



        </RightContent>
     </Container>
        </>
    )
}