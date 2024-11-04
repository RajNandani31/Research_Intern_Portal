import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { z } from "zod";

const fileSchema = z.object({
  name: z.string().nonempty(),
  size: z.number().max(5 * 1024 * 1024, "File size should be less than 5MB"), // Limit to 5MB
  type: z.enum(["image/jpeg", "image/png", "application/pdf"]) // Only allow these types
});

const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",

  onChange(info) {
    const { status, file } = info;
    try {
      fileSchema.parse(file);
    } catch (error) {
      message.error(`Validation failed: ${error.errors[0].message}`);
      return;
    }

    if (status !== "uploading") {
      console.log(file, info.fileList);
    }
    if (status === "done") {
      message.success(`${file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  }
};

const App = () => (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text dark:text-white">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint dark:text-white">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
  </Dragger>
);

export default App;
