json.category do
  json.partial! "api/v1/categories/category", category: @category
  json.post_count @category.posts.count
  
  json.posts @category.posts do |post|
    json.partial! "api/v1/posts/post", post: post
  end
end