json.page_info do
  json.partial! "api/v1/page_infos/page_info.json.jbuilder", page_props: @users
end

json.users @users do |user|
  json.partial! "api/v1/users/user", user: user
end