import ShowEmployeesAccordion from "./components/showEmployeesAccordion"
import { ContainerTableHeader, ContainerTableHeaderExpenses } from "./styles"

interface IShowMovimentationsDataComponent{
    companyEmployees: any
}
export default function ShowEmployeesDataComponent({companyEmployees}: IShowMovimentationsDataComponent){



    return (
        <>
     <table style={{textAlign: "left"}}>
      <thead>
        <ContainerTableHeaderExpenses>
          Funcionários
        </ContainerTableHeaderExpenses>
        
        <tr>
  
        
        </tr>
      </thead>
      <tbody>
      {companyEmployees.employees.all_employees.map((e: any) => {
        return (
          <tr>
           <td> <ShowEmployeesAccordion element={e} key={e.id}/></td>
          </tr>
        ) 
      })}
      </tbody>
     </table>
        </>
    )
}

