import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-light text-center text-lg-start footer">
                    <div className="text-center"> 
                        <a className="text-dark" href="https://spoonacular.com">Data from SpoonacularAPI</a>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer