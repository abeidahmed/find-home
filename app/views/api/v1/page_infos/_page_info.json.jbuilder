json.current_page page_props.current_page
json.total_items page_props.total_entries
json.total_pages page_props.total_pages
json.start_index start_index(page_props.current_page, page_props.per_page)
json.end_index end_index(page_props.current_page, page_props.per_page, page_props.total_entries)
json.has_previous_page has_prev_page(page_props.current_page)
json.has_next_page has_next_page(page_props.count, page_props.current_page, page_props.per_page)
