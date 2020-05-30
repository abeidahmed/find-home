import React from "react";
import Icon from "@components/icon";
import { Link } from "react-router-dom";
import { TableWrapper, Th, Td } from "@components/table";

const PostTable = () => {
  return (
    <TableWrapper>
      <thead>
        <tr>
          <Th>Title</Th>
          <Th>Author</Th>
          <Th>Category</Th>
          <Th>Tags</Th>
          <Th>Created on</Th>
          <Th></Th>
        </tr>
      </thead>
      <tbody className="bg-white">
        <tr className="border-b border-gray-200">
          <Td>
            <Link
              to=""
              className="flex items-center text-sm leading-5 text-gray-900 font-medium hover:text-gray-600"
            >
              Post 1
              <Icon icon="link" className="h-5 w-5 text-gray-500 pl-1" />
            </Link>
          </Td>
          <Td>Post author</Td>
          <Td>Post category</Td>
          <Td>Post tags</Td>
          <Td>Post creation date</Td>
          <Td textRight>
            <button className="font-medium text-red-600 hover:text-red-900">Delete</button>
            <button className="font-medium text-indigo-600 hover:text-indigo-900">Edit</button>
          </Td>
        </tr>
      </tbody>
    </TableWrapper>
  );
};

export default PostTable;
