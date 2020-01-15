import React from 'react';


import './global.css'
import './App.css'
import './Sidebar.css'

function App() {
    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form>
                    <div className="input-block">
                        <label htmlFor="github_username">GitHub Username</label>
                        <input name="github_username" id="username_github" required />
                    </div>

                    <div className="input-block">
                        <label htmlFor="techs">Tecnologias</label>
                        <input name="techs" id="techs" required />
                    </div>

                    <div className="input-group">
                        <div className="input-block">
                            <label htmlFor="username_github">Latitude</label>
                            <input name="latitude" id="latitude" required />

                        </div>
                        <div className="input-block">
                            <label htmlFor="longitude">Longitude</label>
                            <input name="longitude" id="longitude" required />

                        </div>


                    </div>

                    <button type="submit">Salvar</button>
                </form>


            </aside>
            <main>
                <ul>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/40634276?s=460&v=4" alt="Josejuniorr"></img>
                            <div className="user-info">
                                <strong>Josejuniorr</strong>
                                <span>React JS, React Native</span>

                            </div>
                        </header>
                        <p>Iniciante dev</p>
                        <a href="https://github.com/JoseJuniorr">Acessar perfil</a>

                    </li>

                </ul>



            </main>

        </div>






    );

}

export default App;