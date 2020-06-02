json.id post.id
json.title post.title
json.content post.content
json.excerpt post.excerpt
json.category  Hash[id: post.category_id, title: post.category.title ]
json.tags post.tags
json.author Hash[id: post.user.id, fullName: post.user.full_name]
json.created_at format_date(post.created_at)
json.updated_at format_date(post.updated_at)