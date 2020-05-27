json.page_info do
  json.partial! "api/v1/page_infos/page_info.json.jbuilder", page_props: @categories
end

json.categories @categories do |category|
  json.id category.id
  json.title category.title
  json.description category.description
  json.created_at format_date(category.created_at)
  json.updated_at format_date(category.updated_at)
end