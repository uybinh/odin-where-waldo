class PlayersController < ApplicationController
  def create
    player = Player.new(player_params)
    if player.save
      @players = player.level.players.order(:score)
      redirect_to root_path
    else
      puts 'nooooooooooooooooooo'
    end
  end

  private

  def player_params
    params.require(:player).permit(:name, :score, :level_id)
  end
end
