json.user do
  json.id @user.id
  json.full_name "#{@user.first_name} #{@user.last_name}"
  json.email @user.email
  json.admin @user.admin?
end

json.token @hash