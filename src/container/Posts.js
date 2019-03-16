import React from 'react';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import Post from '../components/Post';


export default class Posts extends React.Component {
    state ={
        posts: [],
        loading: true
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(data => data.json())
            .then(data => {
                this.setState({
                    posts: data,
                    loading: false
                })
            })
            .catch(err => {
                this.setState({
                    loading: false
                })
            })
    }

    render() {
        return (
            <div>
                <Loader loader={this.state.loading} />
                <Pagination posts={this.state.posts} perPage={10}>
                    <Post />
                </Pagination>
            </div>
        )
    }
}