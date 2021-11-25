class BookmarksController < ApplicationController

  def index
    @bookmarks = Bookmark.all
    render json: @bookmarks
  end

  def create
    Bookmark.new(bookmarks_params)
    puts params[:desc]
  end  

  end
