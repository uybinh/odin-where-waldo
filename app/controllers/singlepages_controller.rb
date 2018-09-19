class SinglepagesController < ApplicationController
  def index
    @levels = Level.all
  end
end
