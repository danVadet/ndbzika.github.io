import React  from 'react';
import './Projects.css';

export default class Projects extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            repositories: []
        }
    }
    async componentDidMount() {
        const response = await fetch (`https://api.github.com/users/ndbzika/repos`);
        this.setState({ repositories: await response.json()});
      }
    render(){
        return (
            <>
            <div className='card-container'> 
            {this.state.repositories.map((repository, index) => (
                <div className='card'>
                <div key={index}>

               <a className='link-html-url' href={repository.html_url} >
                <img className='repository-avatar' src={repository.owner.avatar_url} alt="avatar_url"/>
                <h2 className='repository-name'>{repository.name}</h2>
                <h4 className='repository-description'>{repository.description}</h4>
               </a>
               </div>
               </div>
            ))}
            </div>
            </>
        );
    }
}
