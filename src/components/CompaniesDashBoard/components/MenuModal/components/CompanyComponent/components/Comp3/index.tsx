import { useContext, useState } from 'react'
import { Context } from '../../../../../../../../context';
import { OutBox } from '../../../OutBox';
import { Label, Container, Button, Input, Content } from './styles'
export function Comp3() {
    const { handleChangePassword, controlOutBox } = useContext(Context);
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const [inputColor, setInputColor] = useState("gray")

    async function handleSubmit() {
       
            // const changed = await handleChangePassword({password, newPassword})
            if (password && newPassword && confirmNewPassword) {
                if (newPassword === confirmNewPassword) {
                    // window.location.href = "/homeCompanies"
                    controlOutBox("green", "Senha alterada com sucesso")
                }else{
                    controlOutBox("darkred", "Nova senha e repetir nova senha, devem ser iguais")
                }
            } else {
                controlOutBox("darkorange", "Preencha as informações")
                setInputColor("orange")
            }
      

    }
    return (
        <>
          <OutBox/>
            <Container>
                <Content>
                    <Label>Senha antiga</Label>
                    <Input value={password} onChange={(e: any) => setPassword(e.target.value)} inputColor={inputColor} />
                    <Label>Nova senha</Label>
                    <Input value={newPassword} onChange={(e: any) => setNewPassword(e.target.value)} inputColor={inputColor}/>
                    <Label>Repetir nova senha</Label>
                    <Input value={confirmNewPassword} onChange={(e: any) => setConfirmNewPassword(e.target.value)} inputColor={inputColor}/>
                    
                    <Button onClick={handleSubmit}>Confirmar</Button>
                  
                </Content>
            </Container>
        </>
    )
}