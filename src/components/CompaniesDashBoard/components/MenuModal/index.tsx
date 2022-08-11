
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import BreadCrumbMenu from './components/BreadCrumbMenu';
import CompanyComponent from './components/CompanyComponent';
import EmployeesComponent from './components/EmployeesComponent';
import MovimentationsComponent from './components/MovimentationsComponent';
import { Container, Content } from './styles';

interface IMenuModalProps{
    setIsOpen: any
    modalIsOpen: any
  
}
export default function MenuModal({setIsOpen, modalIsOpen}:IMenuModalProps){
    const [selectedPortal, setSelectedPortal] = useState("")
    const customStyles = {
        content: {
            width: "100%",
            height: "80%",
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
    
      function controlSelectedPortal(){
        switch (selectedPortal) {
            case "company":
                return <CompanyComponent/>
            case "employees":
                return  <EmployeesComponent/>
            case "movimentations":
                return <MovimentationsComponent/>
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
            contentLabel="Example Modal"
          >
            <Container>
            <BreadCrumbMenu setSelectedPortal={setSelectedPortal}/>
            </Container>
            <Content>
           {controlSelectedPortal()}
               
                
            </Content>



        
           
          </Modal>
        </div>
      );
}