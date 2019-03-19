import React, { Component } from 'react'
import './style.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className='logo'>
                    <h1><u>DRAGON BALL MEMORY GAME</u></h1>
                </div>
                <ul>
                    <li className='itemLeft'><h1><u>{this.props.text}</u></h1></li>
                    <li className='itemCenter'></li>
                    <li className='itemRight'><h1><u>Score : {this.props.score}</u></h1></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar