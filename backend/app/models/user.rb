class User < ActiveRecord::Base
  has_many :shelves
  

  has_secure_password

end
