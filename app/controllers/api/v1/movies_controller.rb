require 'HTTParty'
require 'pp'

class Api::V1::MoviesController < ApplicationController
  def index
    # get new movies
    base_uri = "https://api.themoviedb.org/"
    q = "3/movie/upcoming?api_key="
    key = ENV["API_KEY"]
    extras = "&language=en-US&page=1"
    response = HTTParty.get("#{base_uri}#{q}#{key}#{extras}")



    #get ids from new movies
    titles = response["results"].collect do |r|
      r["id"]
    end
    #print the ids
    # titles.each do |t|
    #   puts "#{t}"
    # end

    #get movie info for each movie
    q1 = "3/movie/"
    q2 = "?api_key="
    responses = titles.collect do |t|
      HTTParty.get("#{base_uri}#{q1}#{t}#{q2}#{key}#{extras}")
    end

    #get movie posters
    # posters = {name: "Mortal Kombat", poster_id: 1}
    # data = {responses: responses, posters: posters}

    check = responses[0]["poster_path"]

    # pp response["results"][0]["description"]
    render json: responses
    # render json: check

  end
end
