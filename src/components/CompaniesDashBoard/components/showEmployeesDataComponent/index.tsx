import { Container } from "./styles";

interface IShowEmployeesDataComponentProps{
    companyEmployees: any
}
export default function ShowEmployeesDataComponent({companyEmployees}: IShowEmployeesDataComponentProps){

console.log(companyEmployees)
    return (
        <>
     <Container>
      id: {companyEmployees.employees.all_employees[0].id} <br></br>
      name: {companyEmployees.employees.all_employees[0].name} <br></br>
      email: {companyEmployees.employees.all_employees[0].email} <br></br>
      cpf: {companyEmployees.employees.all_employees[0].cpf} <br></br>
      created_at: {companyEmployees.employees.all_employees[0].created_at} <br></br>
      updated_at: {companyEmployees.employees.all_employees[0].updated_at} <br></br>
     </Container>
        </>
    )
}