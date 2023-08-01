import { useState } from "react";
import {navi}  from "../../servizi/servizio";
import { Alert, Button, TableRow } from "@mui/material";
import { Network, defaultNetwork } from  "../../servizi/network";

export function MioButton () {


  const [text, setText] = useState ("test")
  const [errore, setErrore] = useState ("") 
  const [mioNetwork, setMioNetwork] = useState([{name:"bici1",id:"1",company:"max"}])

  function cambiaTesto (nuovoTesto: string) {

    if (text==="cambiato") {   
      setText("test");
    } else {
      //setText(nuovoTesto);
      navi.get('')
      .then(function (risultato) {

       // console.log(risultato.data?.networks);
        setMioNetwork([...risultato.data?.networks])
      })


      .catch(function (risultato) {
        // handle error
        console.log(risultato);
        setErrore(risultato.message)
        
      })


      .finally(function () {
          console.log(mioNetwork)
      });


    }

  }
return ( <>
  <Button variant="contained" color="success" onClick={() => cambiaTesto("cambiato")}>
    
  {text}
  </Button>

  {errore!=="" && <Alert severity="error">{errore}</Alert> }

  <table>
     {mioNetwork.map((n)=> (<TableRow>{n.name}</TableRow>)) }
</table>
  </>
  

)
}