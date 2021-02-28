import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getPosts as getPostsAction, deletePost as deletePostAction } from './redux/modules/posts';
import Post from './components/Post'
import CreatePost from './components/CreatePost';

const App = ({ posts, getPosts, deletePost }) => {

  useEffect(() => {getPosts()}, []);

  return (
    <>
      <div style={{padding: 20}}>
        <CreatePost />
      </div>
      <div className="App">
        {posts.map(post => <Post key={post.id} deletePost={deletePost} id={post.id} title={post.title} body={post.body} />)}
      </div>
    </>
  );
};

const mapStateToProps = ({ posts }) => ({ posts: posts.posts });
const mapDispatchToProps = {getPosts: getPostsAction, deletePost: deletePostAction};

export default connect(mapStateToProps, mapDispatchToProps)(App);