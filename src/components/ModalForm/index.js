import React from 'react';
import {Modal, Form, Input} from 'antd';

class ModalForm extends React.Component {
    render() {
        const { visible, onCancel, onSubmit, form } = this.props;
        const { getFieldDecorator } = form;
        return (
          <Modal
            visible={visible}
            title="创建xxx"
            okText="提交"
            onCancel={onCancel}
            onOk={onSubmit}
          >
            <Form layout="vertical">
              <Form.Item label="白名单ID">
                {getFieldDecorator("listid", {
                  rules: [{required: true,message: "请输入白名单ID!"}]
                })(
                    <Input placeholder="listId" />
                    )}
              </Form.Item>
              <Form.Item label="服务名称">
                {getFieldDecorator("server_name",{
                    rules:[[{required: true,message: "请输入服务名称!"}]]
                })(<Input placeholder="serverName" />)}
              </Form.Item>
            </Form>
          </Modal>
        );
      }
}

const WrapperModalForm = Form.create({name:'modalform'})(ModalForm);

export default WrapperModalForm
