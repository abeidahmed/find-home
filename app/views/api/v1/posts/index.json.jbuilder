json.page_info do
  json.partial! "api/v1/page_infos/page_info", page_props: @posts
end

json.posts @posts do |post|
  json.partial! "api/v1/posts/post", post: post
end