json.users @users do |user|
  json.id user.id
  json.full_name "#{user.first_name} #{user.last_name}"
  json.email user.email
  json.created_at format_date(user.created_at)
  json.updated_at format_date(user.updated_at)
end