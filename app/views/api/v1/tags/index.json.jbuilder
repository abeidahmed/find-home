json.page_info do
  json.partial! "api/v1/page_infos/page_info", page_props: @tags
end

json.tags @tags do |tag|
  json.partial! "api/v1/tags/tag", tag: tag
end