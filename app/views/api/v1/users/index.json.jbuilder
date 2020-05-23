json.users @users do |user|
  json.id user.id
  json.full_name "#{user.first_name} #{user.last_name}"
  json.email user.email
end