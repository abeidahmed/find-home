json.category do
  json.partial! "api/v1/categories/category", category: @category
  json.post_count @category_posts.count
  
  json.category_posts do
    json.page_info do
      json.partial! "api/v1/page_infos/page_info", page_props: @category_posts
    end

    json.posts @category_posts do |post|
      json.partial! "api/v1/posts/post", post: post
    end
  end
end