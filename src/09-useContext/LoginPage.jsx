import { useContext } from "react"
import { UserContext } from "./context/UserContext";


export const LoginPage = () => {

  const { user, setUser } = useContext( UserContext );
  console.log();

  return (
    <div>
        <h1>Login Page</h1>
        <hr/>

        <pre>
          { JSON.stringify( user , null , 3)}
        </pre>

        <button 
          className="btn btn-primary"
          onClick={ () => setUser({ id: 123, name:'Rodrigo', email:'pipo@google.com'})}>
          Establecer usuario 
        </button>
    </div>
  )
}
