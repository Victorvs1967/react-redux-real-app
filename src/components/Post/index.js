import { Button, Card } from 'antd';

const Post = ({ id, title, body, deletePost }) => (
    <Card >
        <h1>{title}</h1>
        <p>{body}</p>
        <Button type="primary" onClick={() => deletePost(id)}>Delete</Button>
    </Card>
);

export default Post;