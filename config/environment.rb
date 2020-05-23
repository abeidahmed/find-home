# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!
# Camelize json response
Jbuilder.key_format camelize: :lower