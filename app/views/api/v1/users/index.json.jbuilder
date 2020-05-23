json.page_info do
  json.partial! "api/v1/page_infos/page_info.json.jbuilder", page_props: @users
end

json.users @users do |user|
  json.id user.id
  json.full_name "#{user.first_name} #{user.last_name}"
  json.email user.email
  json.role user.role
  json.created_at format_date(user.created_at)
  json.updated_at format_date(user.updated_at)
end