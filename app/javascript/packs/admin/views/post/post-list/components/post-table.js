import React from "react";
import { Link } from "react-router-dom";
import { TableWrapper, Th, Td } from "@components/table";

const PostTable = ({ posts }) => {
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
        {posts.map(post => (
          <tr key={post.id} className="border-b border-gray-200">
            <Td>
              <Link to="" className="text-blue-600 font-medium hover:text-blue-800">
                {post.title}
              </Link>
            </Td>
            <Td>
              <Link
                to={`/admin/users/${post.author.id}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {post.author.fullName}
              </Link>
            </Td>
            <Td>
              <Link
                to={`/admin/categories/${post.category.id}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {post.category.title}
              </Link>
            </Td>
            <Td>
              {post.tags.map(tag => (
                <Link
                  key={tag.id}
                  to={`/admin/tags/${tag.id}`}
                  className="comma-separate text-blue-600 hover:text-blue-800"
                >
                  {tag.title}
                </Link>
              ))}
            </Td>
            <Td>{post.createdAt}</Td>
            <Td textRight>
              <button className="font-medium text-red-600 hover:text-red-900">Delete</button>
              <button className="font-medium text-indigo-600 hover:text-indigo-900">Edit</button>
            </Td>
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default PostTable;
