class Api::V1::MoviesController < ApplicationController
  def index
    data = [
      {movie: "Mortal Kombat", key: 1},
      {movie: "Step Brothers", key: 2}
    ]
    render json: data
  end
end
