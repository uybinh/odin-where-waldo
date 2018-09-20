class Level < ApplicationRecord
  default_scope { order(:id) }
  has_many :players
end
