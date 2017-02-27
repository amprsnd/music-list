class TracksController < ApplicationController
  def index

    @tracks = Track.all
    respond_to do |format|
      format.html { render json: @tracks}
      format.json { render json: @tracks}
    end

  end
end
