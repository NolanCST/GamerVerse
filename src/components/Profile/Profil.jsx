import NavBar from "../layouts/NavBar";
import './Profil.css'


function ProfilPage (){

    



return(
    <>

    <NavBar/>

    <div className="profilInput">

        <h1>Profil</h1>

        <div className="choise">
        <select name="Plateforme" className="plateforme">
            <option value="Plateforme">Plateforme</option>
            <option value="playstation">Playstation</option>
            <option value="Xbox">Xbox</option>
            <option value="switch">Switch</option>
            <option value="Pc">PC</option>
        </select>
        </div>

        <div className="identity">
        <input type="text" name="firstName" placeholder="Nom"/>
        <input type="text" name="lastName" placeholder="Prénom"/>
        </div>
    
        <div className="mailInput">
        <input type="text" name="mail" className="email" placeholder="E-mail"/>
         <input type="password" name="passewordChange" className="Mdp" placeholder="Mot de passe"/>
        </div>

        <div className="passewordChange">
            
       

        </div>
        
        <button className="switchMdp">Modifier Profil</button>
    </div>
    </>
)
}

export default ProfilPage;
