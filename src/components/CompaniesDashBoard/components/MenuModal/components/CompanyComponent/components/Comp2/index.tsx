import { useContext, useState } from "react"
import { Context } from "../../../../../../../../context"


export function Comp2(){
  
const {handleEditCompany, companyData} = useContext(Context)
const [name, setName] = useState(companyData.name)
const [email, setEmail] = useState(companyData.email)
const [cnpj, setCnpj] = useState(companyData.cnpj)

async function handleSubmit(){
    handleEditCompany({name, email, cnpj})

}
    return (
        <>
        <div>
         <label>Nome</label><br></br>
         <input onChange={(e: any) => setName(e.target.value)} value={name}></input> <br></br>
         <label>Email</label><br></br>
         <input onChange={(e: any) => setEmail(e.target.value)} value={email}></input> <br></br>
         <label>Cnpj</label><br></br>
         <input onChange={(e: any) => setCnpj(e.target.value)} value={cnpj}></input> <br></br>
         <button onClick={handleSubmit}>Confirmar alterações</button>
        </div>
        </>
    )
}