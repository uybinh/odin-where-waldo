class LevelsController < ApplicationController

  def show
    @level = Level.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render json: @level.key_cord }
    end
  end
end
