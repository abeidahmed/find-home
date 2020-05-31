json.id post.id
json.title post.title
json.content post.content
json.excerpt post.excerpt
json.category_id post.category_id
json.category post.category.title
json.tags post.tags
json.author "#{post.user.first_name} #{post.user.last_name}"
json.created_at format_date(post.created_at)
json.updated_at format_date(post.updated_at)