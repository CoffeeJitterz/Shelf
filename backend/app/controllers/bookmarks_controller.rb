class BookmarksController < ApplicationController

  def index
    @bookmarks = Bookmark.all
    render json: @bookmarks
  end

  def create
    @bookmark = Bookmark.create(bookmark_params)
    if @bookmark
      flash[:success] = "Thanks for adding new bookmark"
      render json: @bookmark
    else
      flash[:error] = 'Error, please try again.'
    redirect_to @bookmark
    end
  end
  def bookmark_params 
    params.require(:bookmark).permit(:name, :url, :color)
  end
  end
