import React from 'react';
import Photo from './Photo';
// import comments
import Comments from './comments'

import { Link } from 'react-router';

const Single = React.createClass({
    render() {
        //index of the post
        const i = this.props.posts.findIndex((post) => post.code === 
        this.props.params.postId);
        const post = this.props.posts[i];
        console.log(post);
        <Photo i={i} post={post} {...this.props} />
        // get us the post
        return (
            <div className="single-photo">
            <Photo i={i} post={post} {...this.props} />
            <Comments  />
            </div>
        )
    }
});

export default Single;