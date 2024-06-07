import { useState } from 'react';
import './App.css';
import {
  Pets 
 } from './ui-components';
 import {
  NavBar 
 } from './ui-components';
 import {
  Footer 
 } from './ui-components';

 import {
  AddPet 
 } from './ui-components';

 import {
  PetDetails 
 } from './ui-components';

 import {
  withAuthenticator
 }from '@aws-amplify/ui-react'


 
function App({user, signOut}) {
  const [showForm, setShwForm] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [pet, setPet] = useState()
  
  const navBarOveride = {
    Button: {
      onClick: signOut,
    },
    image: {
      // src: user?.attributes?.profile
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    },
    "Add Pet": {
      style: {
        cursor: "pointer"
      },
      onClick: () => {
          setShwForm(!showForm);
      }
    }
  }
  const formOverride = {
    Vector : {
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        setShwForm(!showForm);
      },
    }
  }
  return (
    <div className="App">
      <NavBar 
          width={"100%"}
          overrides={navBarOveride}
      />
      <header className="App-header">
      {/* <PetDetails 
        pet={pet}
        style= {{
          textAlign: "left",
          margin: "1rem",
        }}
        overrides={{
          Close: {
            onClick: () => {
              setShowDetails(false)
            },
            style: {
              cursor: "pointer"
            },
          }
        }}
      /> */}
          {
            showDetails && <PetDetails 
             
            />
          }
     
          {
            showForm && (
              <AddPet 
                overrides={formOverride}
                style={{
                  textAlign: "left",
                  margin: "1rem"
              }}
            />
            )
          }
            <Pets 
              overrideItems={({item, index}) => ({
                  overrides: {
                      Breed: {color:'blue'},
                      Button29766907: {
                        onClick: () => {setShowDetails(!showDetails);
                          setPet(item)
                          
                        },
                      },
                  }
              })
              }
            />
      </header>
      <Footer  width={"100%"}/>
    </div>
  );
}

export default   withAuthenticator(App);
