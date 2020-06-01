json.id tag.id
json.title tag.title
json.description tag.description
json.post_count tag.posts.count
json.post_count_in_words pluralize(tag.posts.count, "post")
json.created_at format_date(tag.created_at)
json.updated_at format_date(tag.updated_at)