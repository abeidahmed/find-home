import React, { useEffect, useState } from "react";
import { AdminLayout } from "@components/layout";
import CategoryTable from "./components/category-table";
import { connect } from "react-redux";
import { fetchAllCategories } from "@api/category/category-list";
import Icon from "@components/icon";
import Pagination from "./components/pagination";
import queryString from "query-string";
import { SearchField } from "@components/search";
import { useAddQuery } from "@utils/add-query";

const CategoryList = ({ categories, fetchCategories, location }) => {
  const [searchValue, setSearchValue] = useState("");
  const query = useAddQuery();

  let queryParam = queryString.parse(location.search);
  let pageNumber = queryParam.page;
  let searchTerm = queryParam.search;

  useEffect(() => {
    const fetchAllCategories = () => {
      fetchCategories(queryParam);
    };
    fetchAllCategories();
  }, [fetchCategories, pageNumber, searchTerm]);

  return (
    <AdminLayout>
      <div className="flex items-center justify-between space-x-4">
        <div className="max-w-md flex-1">
          <SearchField
            placeholder="Search categories by title"
            value={searchValue}
            onChange={e => {
              setSearchValue(e.target.value);
              query("search", e.target.value);
            }}
          />
        </div>
        <div>
          <button className="group flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
            <span className="-ml-1 pr-1">
              <Icon
                icon="plus"
                className="h-5 w-5 text-gray-200 group-hover:text-white transition ease-in-out duration-150"
              />
            </span>
            Add category
          </button>
        </div>
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
