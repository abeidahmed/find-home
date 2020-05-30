import React, { useState } from "react";
import { addCategoryApi } from "@api/category/add-category";
import { fetchCategoriesApi } from "@api/category/category-list";
import Icon from "@components/icon";
import { InputField, TextField } from "@components/field";
import { SearchField } from "@components/search";
import ToggleButton from "./toggle-button";
import { usePaginatedQuery, useMutation, queryCache } from "react-query";

const CategoryOption = ({ handleToggle, menuActive, catId, setCatId }) => {
  const [formActive, setFormActive] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState([]);
  const [search, setSearch] = useState("");

  const { status: fetchStatus, data } = usePaginatedQuery(
    ["categoryListOption", 1, search],
    fetchCategoriesApi
  );
  const [mutate, { status }] = useMutation(addCategoryApi, {
    onSuccess: () => {
      queryCache.refetchQueries("categoryListOption");
      setError([]);
      setTitle("");
      setDescription("");
    },
    throwOnError: true
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await mutate({
        title,
        description
      });
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="border-b border-gray-300">
      <ToggleButton handleToggle={handleToggle} menuActive={menuActive} buttonTitle="Categories" />
      <div className={`${menuActive ? "block" : "hidden"} px-4`}>
        <div
          style={{ maxHeight: 250 }}
          className="pt-1 px-1 h-full overflow-y-hidden flex flex-col"
        >
          <SearchField
            placeholder="Search categories"
            value={search}
            show={search}
            clear={() => setSearch("")}
            onChange={e => setSearch(e.target.value)}
          />
          <ul className="mt-2 flex-1 overflow-y-auto">
            {fetchStatus !== "loading" &&
              data &&
              data.data.categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setCatId(category.id)}
                  className={`${catId === category.id &&
                    "bg-indigo-200 text-indigo-900 font-medium hover:bg-indigo-200"} 
                    py-1.5 px-1 w-full text-left text-sm text-gray-700 border border-transparent 
                    border-dashed cursor-pointer hover:bg-gray-100 rounded focus:outline-none focus:border-gray-400`}
                >
                  {category.title}
                </button>
              ))}
          </ul>
        </div>
        <div className="mt-1 mb-4">
          <p className="flex items-center justify-between">
            <button
              onClick={() => setCatId("")}
              className="p-1 text-gray-600 rounded-full hover:text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:text-gray-800 focus:text-gray-800 transition duration-150 ease-in-out"
            >
              <Icon icon="reset" className="h-5 w-5" />
            </button>
            <button
              onClick={() => setFormActive(!formActive)}
              className="px-1 text-sm text-indigo-700 font-medium hover:text-indigo-900 transition duration-150 ease-in-out"
            >
              Add category
            </button>
          </p>
          <form onSubmit={handleSubmit} className={`${formActive ? "block" : "hidden"}`}>
            <div>
              <InputField
                size="sm"
                id="add_post_add_cat_title"
                label="Title"
                value={title}
                error={error}
                errorType="Title"
                onChange={e => setTitle(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="mt-2">
              <TextField
                id="add_post_add_cat_description"
                label="Description (optional)"
                rows="3"
                value={description}
                error={error}
                errorType="Description"
                onChange={e => setDescription(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <button
                disabled={status === "loading"}
                className="px-3 py-2 text-sm rounded-md bg-indigo-200 text-indigo-900 border border-transparent hover:bg-indigo-300 font-medium focus:outline-none focus:border-indigo-600 focus:shadow-outline-indigo transition duration-150 ease-in-out"
              >
                {status === "loading" ? "Adding..." : "Add Category"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryOption;
