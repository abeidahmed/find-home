json.page_info do
  json.current_page page_props.current_page
  json.item_limit page_props.per_page
  json.total_items page_props.total_entries
  json.total_pages page_props.total_pages
  json.has_previous_page page_props.current_page > 1
  json.has_next_page page_props.count > (page_props.current_page * page_props.per_page)
end