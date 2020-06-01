import React from "react";
import { Switch, Route } from "react-router-dom";
import AddPost from "@admin/views/post/add-post";
import CategoryList from "@admin/views/category/category-list";
import Dashboard from "@admin/views/dashboard";
import EditPost from "@admin/views/post/edit-post";
import Header from "@admin/views/header";
import PostList from "@admin/views/post/post-list";
import ShowCategory from "@admin/views/category/show-category";
import ShowTag from "@admin/views/tag/show-tag";
import Sidebar from "@admin/views/sidebar";
import TagList from "@admin/views/tag/tag-list";
import UserList from "@admin/views/user/user-list";

const AdminRoute = ({ match }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Header />
        <Switch>
          <Route path={`${match.path}/dashboard`} component={Dashboard} />
          <Route path={`${match.path}/users`} component={UserList} />
          <Route exact path={`${match.path}/categories`} component={CategoryList} />
          <Route path={`${match.path}/categories/:id`} component={ShowCategory} />
          <Route exact path={`${match.path}/tags`} component={TagList} />
          <Route path={`${match.path}/tags/:id`} component={ShowTag} />
          <Route exact path={`${match.path}/posts`} component={PostList} />
          <Route path={`${match.path}/posts/add`} component={AddPost} />
          <Route path={`${match.path}/posts/:id/edit`} component={EditPost} />
        </Switch>
      </div>
    </div>
  );
};

export default AdminRoute;
