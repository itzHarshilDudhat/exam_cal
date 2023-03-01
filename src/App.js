import { Button, Card, Form, Input } from "antd";
import React, { useState } from "react";

const App = () => {
  const [percentage, setPR] = useState()
  const [grade, setGrade] = useState()


  const [form] = Form.useForm();


  const onFinish = (values) => {
    let PR = ((Number(values.english) + Number(values.maths) + Number(values.history)) / 300) * 100;

    setPR(Math.ceil(PR))
    if (PR <= 100 && PR >= 50) {
      setGrade("A")
    } else if (PR <= 74 && PR >= 50) {
      setGrade("B")
    } else {
      setGrade("C")
    }
  };

  const onReset = () => {
    form.resetFields();
    setGrade()
    setPR()
  }

  return (
    <>
      <div className="card">
        <div className="main-form">
          <Card title="Marks form">
            <Form name="Marks calculator" form={form} layout="vertical" className="form" onFinish={onFinish} autoComplete="off">
              <Form.Item
                label="English"
                name="english"
                rules={[
                  { required: true, message: "Please input your english marks!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Maths"
                name="maths"
                rules={[
                  { required: true, message: "Please input your gujarati marks!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="History"
                name="history"
                rules={[
                  { required: true, message: "Please input your history marks!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <div className="btn-div">
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button onClick={onReset}>Reset</Button>
                </div>
              </Form.Item>
            </Form>
          </Card>
        </div>
        <Card title="Result" className="result-card" style={{ height: 300, width: 300 }}>
          {grade ?
            <div>
              <p>You got <strong>{grade}</strong> grade in Exam, And You got PR :<strong> {percentage}</strong> in your exam</p>
            </div>

            : <>
              <p>Please give your marks history to find Result</p>
            </>
          }
        </Card>
      </div>

    </>
  );
};

export default App;
