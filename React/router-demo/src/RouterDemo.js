import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Project from './Project'

export default function RouterDemo() {
    return (
        
            <Router>

                <div>
                    <nav>

                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/project">Projects</Link>
                        </li>
                    </ul>
                    </nav>
              


                <Switch>



                <Route path="/home">
                        <Home />
                    </Route>
                  
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/project">
                        <Project />
                    </Route>

                    

                </Switch>


                </div>


            </Router>
       
    )
}

