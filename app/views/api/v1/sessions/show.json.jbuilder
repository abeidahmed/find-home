json.user do
  json.partial! "api/v1/users/user", user: @current_user
end

json.token @token
