import React from 'react';
import {Button} from 'antd';
import ModalForm from '../../components/ModalForm'
export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            visible:true
        }
    }
    newCreate = ()=>{
        this.setState({ visible: true });
    }
    handleOnSubmit = ()=>{
        const form = this.form.props.form;
        form.validateFields((err,values)=>{
            if(!err){
                console.log('Received values of form: ', values);
                form.resetFields();
                this.setState({visible:false})
            }
        });
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }

    render(){
        return (
            <div>
                <Button type="primary" icon="file-add" onClick={this.newCreate}>新建</Button>
                <ModalForm 
                    wrappedComponentRef={(form)=>this.form = form}
                    visible={this.state.visible}
                    onSubmit={this.handleOnSubmit}
                    onCancel={this.handleCancel}
                >
                </ModalForm>
            </div>
        );
    }
}