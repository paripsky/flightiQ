import React from 'react';
import { Upload, message, Space } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { readFileToString } from '../utils/fileReader';

const { Dragger: AntDragger } = Upload;

export default function FileUploader({ icon, accept, onUpload, title = '' }) {
  const UploadIcon = icon ? icon : InboxOutlined;

  const loadFile = async file => {
    try {
      const fileText = await readFileToString(file);
      onUpload && onUpload(fileText);
    } catch (error) {
      console.error(error);
      message.error(`couldn't upload file ${file.name}`);
    }
  };

  const beforeUpload = file => {
    loadFile(file);

    return false;
  };

  const onChange = info => {
    console.log(info);
  };

  return (
    <AntDragger beforeUpload={beforeUpload} onChange={onChange} accept={accept}>
      <Space>
        <p className="ant-upload-drag-icon">
          <UploadIcon />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload {title}
        </p>
        <p className="ant-upload-hint">only .csv files can be uploaded</p>
      </Space>
    </AntDragger>
  );
}
