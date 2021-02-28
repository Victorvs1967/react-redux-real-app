import { connect } from 'react-redux';
import { Button, Input, Form } from 'antd';
import { createPost as createPostAction } from '../../redux/modules/posts';

const CreatePost = ({ createPost }) => {
    
    const onSubmit = values => {
        createPost(values);
    };

    return (
        <Form name='basic' onFinish={onSubmit}>
            <Form.Item name='title'>
                <Input style={{marginBottom: 10}} placeholder='Enter title' />
            </Form.Item>
            <Form.Item name='body'>
                <Input.TextArea rows={4} placeholder='Enter post text' />
            </Form.Item>
            <Form.Item>
                <Button style={{marginTop: 10}} type="primary" htmlType='submit'>Submit</Button>
            </Form.Item>
        </Form>
    );
};

const mapDispatchToProps = {createPost: createPostAction};

export default connect(null, mapDispatchToProps)(CreatePost);