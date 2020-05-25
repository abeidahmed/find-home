module Api::V1::PageInfoHelper
  def has_prev_page(current_page)
    current_page > 1
  end
  
  def has_next_page(total_items, current_page, per_page)
    total_items > (current_page * per_page)
  end

  def start_index(current_page, item_limit)
    current_page * item_limit - (item_limit - 1);
  end

  def end_index(current_page, item_limit, total_items)
    value = start_index(current_page, item_limit) + item_limit - 1
    [value, total_items].min
  end
end