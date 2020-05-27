json.id user.id
json.full_name "#{user.first_name} #{user.last_name}"
json.email user.email
json.admin user.admin?
json.avatar gravatar_for(user)
json.created_at format_date(user.created_at)
json.updated_at format_date(user.updated_at)