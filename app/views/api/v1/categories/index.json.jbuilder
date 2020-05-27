json.page_info do
  json.partial! "api/v1/page_infos/page_info", page_props: @categories
end

json.categories @categories do |category|
  json.partial! "api/v1/categories/category", category: category
end