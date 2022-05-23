import React from "react";
import { Button, Form } from "semantic-ui-react";

const FormNote = ({ handleSubmit, handleChange, errors, form = null }) => {
  return (
    <Form onSubmit={handleSubmit} className=" w-[40%] text-white p-4 ">
      <Form.Input
        label="Title"
        placeholder="Title"
        name="title"
        onChange={handleChange}
        error={
          errors.title
            ? { content: "Please enter a title", pointing: "below" }
            : null
        }
        value={form ? form.title : undefined}
      />
      <Form.TextArea
        label="Description"
        placeholder="Description"
        name="description"
        onChange={handleChange}
        error={
          errors.description
            ? { content: "Please enter a description", pointing: "below" }
            : null
        }
        value={form ? form.description : undefined}
      />
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default FormNote;
