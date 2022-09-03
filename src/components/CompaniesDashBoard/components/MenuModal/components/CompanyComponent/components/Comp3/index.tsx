import { useContext, useState } from 'react'
import { Context } from '../../../../../../../../context';
import {Label, Container, Button, Input, Content} from './styles'
export function Comp3(){
    const {handleChangePassword} = useContext(Context);
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const[confirmNewPassword, setConfirmNewPassword] = useState("")

async function handleSubmit(){
    if(newPassword === confirmNewPassword){
        const changed = await handleChangePassword({password, newPassword})
        if(changed){
            window.location.href = "/homeCompanies"
        }else{
            window.alert("Senha incorreta")
        }
    }else{
        window.alert("Senhas diferem")
    }

}
    return (
        <>
        <Container>
      <Content>
      <Label>Senha antiga</Label>
           <Input value={password} onChange={(e: any) => setPassword(e.target.value)}/>
           <Label>Nova senha</Label>
           <Input value={newPassword} onChange={(e: any) => setNewPassword(e.target.value)}/>
           <Label>Repetir nova senha</Label>
           <Input value={confirmNewPassword} onChange={(e:any) => setConfirmNewPassword(e.target.value)}/>
           <Button onClick={handleSubmit}>Confirmar</Button>
      </Content>
        </Container>
        </>
    )
}