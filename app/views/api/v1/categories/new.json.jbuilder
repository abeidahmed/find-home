json.category do
  json.id @category.id
  json.title @category.title
  json.description @category.description
  json.created_at format_date(@category.created_at)
  json.updated_at format_date(@category.updated_at)
end