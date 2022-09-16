import { UserContext } from "./context/UserContext"


export const HomePage = () => {

  const { user } = UserContext( UserContext );
  return (
    <div>
        <h1>Home Page <small>{ user?.name }</small></h1>
        <hr/>

        <pre>
          {JSON.stringify( user, null, 3 )}
        </pre>
    </div>
  )
}
