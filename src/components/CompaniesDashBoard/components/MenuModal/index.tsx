
import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import BreadCrumbMenu from './components/BreadCrumbMenu';
import CompanyComponent from './components/CompanyComponent';
import EmployeesComponent from './components/EmployeesComponent';
import MovimentationsCOmponent from './components/MovimentacionsComponent';
import { OutBox } from './components/OutBox';
import { Button, Container, ContainerButtons, Content } from './styles';
import {MdOutlineRefresh} from 'react-icons/md'
import { Context } from '../../../../context';

interface IMenuModalProps{
    setIsOpen: any
    modalIsOpen: any
  
}
export default function MenuModal({setIsOpen, modalIsOpen}:IMenuModalProps){
    const [selectedPortal, setSelectedPortal] = useState("")
    const {getSummaryCompany, getCompanyData, getCompanyEmployees} = useContext(Context)
    const customStyles = {
        content: {
            width: "100%",
            height: "95%",
            // display: "flex",
            // flexDirection: "row",
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
        //   marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: "#e5e5e5"
        },
      };
      function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }
      function handleRefreshData(){
        getSummaryCompany()
        getCompanyData()
        getCompanyEmployees()
      }
    
      function controlSelectedPortal(){
        switch (selectedPortal) {
            case "portal1":
                return <CompanyComponent/>
            case "portal2":
                return  <EmployeesComponent/>
            case "portal3":
                return <MovimentationsCOmponent/>
            default:
                return <CompanyComponent/>
        }
      }
    return (
        <div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel=""
          >
            <Container>
           
            <BreadCrumbMenu setSelectedPortal={setSelectedPortal}/>

          <ContainerButtons>
          <Button name="refresh"onClick={handleRefreshData}><MdOutlineRefresh  style={{color:"white"}}/></Button>
          <Button name="close" onClick={closeModal}>X</Button>
          
          </ContainerButtons>
        
            </Container>
           
            <Content>
           {controlSelectedPortal()}
               
                
            </Content>



        
           
          </Modal>
        </div>
      );
}