import React, { useEffect } from "react";
import { AdminLayout } from "@components/layout";
import CategoryTable from "./components/category-table";
import { connect } from "react-redux";
import { fetchAllCategories } from "@api/category/category-list";
import { SearchField } from "@components/search";

const CategoryList = ({ categories, fetchCategories }) => {
  useEffect(() => {
    const fetchAllCategories = () => {
      fetchCategories();
    };
    fetchAllCategories();
  }, [fetchCategories]);

  return (
    <AdminLayout>
      <div className="flex items-center justify-between space-x-4">
        <div className="max-w-md flex-1">
          <SearchField placeholder="Search categories by title" />
        </div>
        <div></div>
      </div>
      <CategoryTable categories={categories} />
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
    fetchCategories: () => dispatch(fetchAllCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
