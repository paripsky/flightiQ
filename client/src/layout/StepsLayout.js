import React, { useState } from 'react';
import { Steps, Button, message, Layout, Col, Row, Space } from 'antd';
import UploadPage from '../pages/UploadPage';
import ResultsPage from '../pages/ResultsPage';
import axios from 'axios';

import styles from './StepsLayout.module.css';

const { Header, Content, Footer } = Layout;

const { Step } = Steps;

const steps = [
  {
    title: 'Upload',
    content: 'First-content'
  },
  {
    title: 'Results',
    content: 'Second-content'
  }
];

const uploadFlights = async flights => {
  try {
    const result = await axios.post('/api/flights', flights);
    console.log(result);
  } catch (error) {
    message.error(`couldn't upload flights`);
  }
};

const uploadPNR = async PNR => {
  try {
    const result = await axios.post('/api/flights/PNR', PNR);
    console.log(result);
  } catch (error) {
    message.error(`couldn't upload PNRs`);
  }
};

const StepsLayout = () => {
  const [step, setStep] = useState(0);
  const [flights, setFlights] = useState();
  const [PNR, setPNR] = useState();
  const [loading, setLoading] = useState(false);

  const next = async () => {
    setLoading(true);

    try {
      if (!flights || !PNR) {
        message.error(
          `you must select a flights and PNR csv files before proceeding`
        );

        return;
      }

      const [flightsResult, PNRResult] = await Promise.all([
        uploadFlights(flights),
        uploadPNR(PNR)
      ]);
      console.log(flightsResult, PNRResult);
      setStep(step + 1);
    } catch (error) {
      message.error(`uploading the flights and PNR csv files failed`);
    } finally {
      setLoading(false);
    }
  };

  const prev = () => {
    setStep(step - 1);
  };

  return (
    <Layout className="layout">
      <Header>
        <span className={styles['logo-text']}>flightiQ</span>
      </Header>
      <Content>
        <Row>
          <Col span={12} offset={6}>
            <Space direction="vertical">
              <Steps current={step}>
                {steps.map(item => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>
              {steps[step].title === 'Upload' && (
                <UploadPage setFlights={setFlights} setPNR={setPNR} />
              )}
              {steps[step].title === 'Results' && <ResultsPage />}
              <div className="steps-action">
                {step < steps.length - 1 && (
                  <Button type="primary" onClick={next} loading={loading}>
                    Next
                  </Button>
                )}
                {step === steps.length - 1 && (
                  <Button
                    type="primary"
                    onClick={() => message.success('Processing complete!')}
                  >
                    Done
                  </Button>
                )}
                {step > 0 && (
                  <Button style={{ margin: '0 8px' }} onClick={prev}>
                    Previous
                  </Button>
                )}
              </div>
            </Space>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Yonatan Paripsky 2020 ©</Footer>
    </Layout>
  );
};

export default StepsLayout;
