import { useState } from "react";
import { Form, Input, Button, InputNumber } from "antd";

const SearchForm = ({ searchFunction }) => {
  const [form] = Form.useForm();
  const [extra, setExtra] = useState(false);

  return (
    <Form
      form={form}
      name="imdb_search_form"
      onFinish={searchFunction}
      initialValues={{
        year: "",
        type: "movie",
        plot: "full",
      }}
    >
      <div className="mt-6 flex">
        <div className="relative ml-auto flex-1 pr-5 sm:block hidden">
          <Form.Item
            name="title"
            rules={[
              {
                required: true,
                message: "Blank search cannot be made!",
              },
            ]}
          >
            <Input
              placeholder="Search"
              type="text"
              className="w-full border rounded border-gray-400 focus:outline-none py-3 px-6 text-gray-700 text-sm"
            />
          </Form.Item>
        </div>

        <Button
          htmlType="submit"
          className="bg-teal-500 text-white py-2 h-12 text-sm px-3 rounded focus:outline-none"
        >
          Search
        </Button>
        <Button
          onClick={() => setExtra(!extra)}
          className="ml-4 text-gray-600 py-2 text-sm px-3 h-12 rounded focus:outline-none border border-gray-400"
        >
          Advanced
        </Button>
      </div>

      {extra && (
        <div className="mt-6 flex h-10 ">
          <div className="relative ml-auto flex-2 pr-5 sm:block hidden">
            <Form.Item name="year">
              <InputNumber
                placeholder="Year"
                className="number-input"
                min={1800}
                max={new Date().getFullYear()}
              />
            </Form.Item>
          </div>

          <div className="relative ml-auto flex-1 mr-4 pr-0 sm:block hidden">
            <Form.Item name="type">
              <select value="movie" className="w-full border rounded border-gray-400 focus:outline-none py-3 px-4 pr-40 text-gray-700 text-sm">
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>
              </select>
            </Form.Item>
          </div>

          <div className="relative ml-auto flex-1 pr-0 sm:block hidden">
            <Form.Item name="plot">
              <select className="w-full border rounded border-gray-400 focus:outline-none py-3 px-4 pr-40 text-gray-700 text-sm">
                <option value="full">Full</option>
                <option value="short">Short</option>
              </select>
            </Form.Item>
          </div>

        </div>
      )}
    </Form>
  );
};

export default SearchForm;
