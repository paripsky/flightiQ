import React from 'react';
import { Space } from 'antd';
import FileUploader from '../components/FileUploader';
import { RadarChartOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { csvToFlight, csvToPNR } from '../utils/csvParser';

const csvAccept = '.csv, text/csv';

export default function UploadPage({ setFlights, setPNR }) {
  const onUploadFlights = flightCsv => {
    const flight = csvToFlight(flightCsv);
    setFlights(flight);
  };

  const onUploadPNR = PNRCsv => {
    const PNR = csvToPNR(PNRCsv);
    setPNR(PNR);
  };

  return (
    <Space style={{ minHeight: '200px' }}>
      <FileUploader
        icon={RadarChartOutlined}
        accept={csvAccept}
        onUpload={onUploadFlights}
        title="Flights"
      />
      <FileUploader
        icon={UnorderedListOutlined}
        accept={csvAccept}
        onUpload={onUploadPNR}
        title="PNRs"
      />
    </Space>
  );
}
