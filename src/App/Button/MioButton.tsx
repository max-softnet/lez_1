import { useState } from "react";
import {navi}  from "../../servizi/servizio";

export function MioButton () {


  const [text, setText] = useState ("test")

  function cambiaTesto (nuovoTesto: string) {

    if (text==="cambiato") {   
      setText("test");
    } else {
      //setText(nuovoTesto);
      navi.get('/AllAttivi')
      .then(function (risultato) {

        console.log(risultato);
      })

    }

  }
return (
  <button onClick={() => cambiaTesto("cambiato")}>
    
  {text}
  </button>



)
}