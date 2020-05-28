import React, { useEffect } from "react";
import { AdminLayout } from "@components/layout";
import CategoryTable from "./components/category-table";
import { connect } from "react-redux";
import { fetchAllCategories } from "@api/category/category-list";
import Pagination from "./components/pagination";
import queryString from "query-string";
import { SearchField } from "@components/search";

const CategoryList = ({ categories, fetchCategories, location }) => {
  let queryParam = queryString.parse(location.search);
  let pageNumber = queryParam.page;

  useEffect(() => {
    const fetchAllCategories = () => {
      fetchCategories(queryParam);
    };
    fetchAllCategories();
  }, [fetchCategories, pageNumber]);

  return (
    <AdminLayout>
      <div className="flex items-center justify-between space-x-4">
        <div className="max-w-md flex-1">
          <SearchField placeholder="Search categories by title" />
        </div>
        <div></div>
      </div>
      <CategoryTable categories={categories} />
      <Pagination />
    </AdminLayout>
  );
};

const mapStateToProps = state => {
  const { categories } = state.categoryList;
  return {
    categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: param => dispatch(fetchAllCategories(param))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
