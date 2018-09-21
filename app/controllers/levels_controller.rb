class LevelsController < ApplicationController

  def show
    @level = Level.find(params[:id])
    @players = @level.players.order(score: :asc)
    respond_to do |format|
      format.html
      format.json { render json: @level.key_cord }
    end
  end
end
