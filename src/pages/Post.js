import React, { Component } from 'react';
import axios from 'axios'
import { blob } from '../blob';

class Post extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            title: '',
            content: '',
            imgUrl: '',
        }
    }

    async componentDidMount(){
        await this.getPostData();
    }

    async getPostData(){
        let postId = this.props.match.params.id;

        axios.get(blob)
        .then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                const post = res.data[i];
                console.log('nasao', post);

                if(post.id == postId){
                    this.setState({...post});
                    console.log('nasao', post);
                    return;
                }
            }
        })
        .catch((err) => {
            console.log(err);
        });

    }
   
    render() {
        let { title, name, imgUrl, content } = this.state;

        return (
            <div>
                <div style={{height: 350, backgroundImage: 'url("' + imgUrl + '")'}}>
                    <div style={{ padding: 100, color: 'black'}}>
                        <h2>
                            {title}
                        </h2>
                        <span style={{color: 'blue', fontWeight: 'bold'}}>{name}</span>
                    </div>
                </div>
                <div className="post-content" style={{ marginTop: 100, paddingLeft: 300 }}>
                    <p> {content}</p>
                </div>
            </div>
        );
    }
}

export default Post;
