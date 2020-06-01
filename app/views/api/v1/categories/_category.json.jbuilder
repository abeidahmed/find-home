json.id category.id
json.title category.title
json.description category.description
json.post_count category.posts.count
json.post_count_in_words pluralize(category.posts.count, "post")
json.created_at format_date(category.created_at)
json.updated_at format_date(category.updated_at)