json.user do
  json.partial! "api/v1/users/user", user: @user
  json.post_count @user_posts.count
  
  json.user_posts do
    json.page_info do
      json.partial! "api/v1/page_infos/page_info", page_props: @user_posts
    end

    json.posts @user_posts do |post|
      json.partial! "api/v1/posts/post", post: post
    end
  end
end