import React, { useState } from "react";
import CategoryOption from "../shared/category-option";
import CustomInput from "../shared/custom-input";
import CustomTextarea from "../shared/custom-textarea";
import Excerpt from "../shared/excerpt";
import FeaturedImage from "../shared/featured-image";
import Icon from "@components/icon";
import SettingsButton from "../shared/settings-button";
import SettingsContainer from "../shared/settings-container";
import TagOption from "../shared/tag-option";

const EditPost = () => {
  const [settingsActive, setSettingsActive] = useState(true);
  const [menuActive, setMenuActive] = useState({ categories: true, tags: true, image: true });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [tagIds, setTagIds] = useState([]);
  const [excerpt, setExcerpt] = useState("");

  const handleToggle = menu => () => {
    setMenuActive(prevState => {
      const clickedMenu = { ...prevState };
      clickedMenu[menu] = !clickedMenu[menu];
      return clickedMenu;
    });
  };

  return (
    <>
      <section className="px-6 h-16 flex items-center justify-end border-b border-gray-200">
        <div className="space-x-4 flex items-center">
          <button className="group flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
            <span className="-ml-1 pr-1">
              <Icon
                icon="check"
                className="h-5 w-5 text-gray-200 group-hover:text-white transition ease-in-out duration-150"
              />
            </span>
            Update
          </button>
          <SettingsButton
            handleToggle={() => setSettingsActive(!settingsActive)}
            toggleState={settingsActive}
          />
        </div>
      </section>

      <section className="flex">
        <div className="px-4 mt-4 flex-1 max-w-xl mx-auto">
          <CustomInput
            type="text"
            placeholder="Add a title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <div className="mt-3">
            <CustomTextarea
              placeholder="Start writing here..."
              value={content}
              onChange={e => setContent(e.target.value)}
            />
          </div>
        </div>
        <SettingsContainer activeState={settingsActive}>
          <div className="flex-1 overflow-y-auto">
            <CategoryOption
              handleToggle={handleToggle("categories")}
              menuActive={menuActive["categories"]}
              catId={categoryId}
              setCatId={setCategoryId}
            />
            <TagOption
              handleToggle={handleToggle("tags")}
              menuActive={menuActive["tags"]}
              tagIds={tagIds}
              setTagIds={setTagIds}
            />
            <FeaturedImage handleToggle={handleToggle("image")} menuActive={menuActive["image"]} />
            <Excerpt
              handleToggle={handleToggle("excerpt")}
              menuActive={menuActive["excerpt"]}
              value={excerpt}
              onChange={e => setExcerpt(e.target.value)}
            />
          </div>
        </SettingsContainer>
      </section>
    </>
  );
};

export default EditPost;
