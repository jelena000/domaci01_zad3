import axios from 'axios';
import React, { Component } from 'react';
import { blob } from '../blob';
import Card from '../components/Card';

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            posts : []
        }
    }

    async componentDidMount(){
        await this.getPostData();
    }

    generateCards(){
        let { posts} = this.state;

        return posts.map((post) => (
               <Card {...post}/>
        ))
    }

    async getPostData(){
        let postId = this.props.match.params.id;
        //nakon fetchovanja
        axios.get(blob)
        .then((res) => {
            this.setState({ posts : res.data});
        })
        .catch((err) => {
            console.log(err);
        });

    }

    render() {
        let cardsJSX = this.generateCards();

        return (
            <div style={{ margin: 'auto', marginTop: 50, width: '70%', textAlign: 'center'}}>
                <div className="cards-container" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap',}}>
                    {cardsJSX}
                </div>
            </div>
        );
    }
}

export default Home;
