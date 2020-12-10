/* Consignes: Reproduire ce formulaire en HTML/CSS + ReactJS

A la soumission du formulaire, ajouter les données entrantes dans
un tableau "comments" situé dans l'objet state.
Ex: 
comments: [  
{ name: "JB", message: "Youhou la famille!"},
{ name: "Kirikou", message: "Je ne suis pas grand mais je suis vaillant"}
] */



class App extends React.Component {

    state = {
        name: "",
        message: "",
        comments: []
    }

    onChangeName = (event) => {
        console.log(event.target.value);

        this.setState({
            name: event.target.value
        })
    }

    onChangeMessage = (event) => {
        console.log(event.target.value);

        this.setState({
            message: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        
        const tmp = "Name :" + this.state.comments.concat(this.state.name) + ", Message: " + this.state.comments.concat(this.state.message);

        this.setState({
            comments: [{tmp}],
            name: "",
            message: ""
        })
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" 
                    value={this.state.name}
                    onChange={this.onChangeName}
                />
                <input type="text" 
                    value={this.state.message}
                    onChange={this.onChangeMessage}
                />
                <input type="submit" value="Envoyer" />
            </form>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('app'));