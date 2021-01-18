import axios from 'axios';
import React, { Component } from 'react';
import { blob } from '../blob';
class AddPost extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            title: '',
            content: '',
            imgUrl: '',
            posts: []
        }
    }
    async componentDidMount(){
        await this.getPosts();
    }

    async getPosts(){
        axios.get(blob)
        .then((res) => {
            this.setState({ posts : res.data});
        })
        .catch((err) => {
            console.log(err);
        });
    }

    addPost = () => {
        let { name, title, content, imgUrl, posts } = this.state;
        let obj =  { name, title, content, imgUrl, id: Math.floor(Math.random() * 100) };
        let newPosts = [...posts, obj];
        
        let url = blob;
        fetch(url,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(newPosts)

            })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
    }

    onChange = (e) => {
        let name = e.currentTarget.name;
        let value = e.currentTarget.value;

        this.setState({ [name] : value})
    }

    render() {
        let { name, title, content, imgUrl } = this.state;
        return (
            <div>
                <div className="forma">
                    <input type="text" onChange={this.onChange} value={name} name="name" placeholder="autor"/>
                    <input type="text" onChange={this.onChange} value={title} name="title" placeholder="naslov" />
                    <input type="text" onChange={this.onChange} value={content} name="content" placeholder="opis" />
                    <input type="text" onChange={this.onChange} value={imgUrl} name="imgUrl" placeholder="url" />
                    <button onClick={this.addPost}> dodaj</button>
                </div>
            </div>
        );
    }
}

export default AddPost;
