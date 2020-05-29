json.tag do
  json.partial! "api/v1/tags/tag", tag: @tag
  
  json.tag_posts do
    json.page_info do
      json.partial! "api/v1/page_infos/page_info", page_props: @tag_posts
    end

    json.posts @tag_posts do |post|
      json.partial! "api/v1/posts/post", post: post
    end
  end
end