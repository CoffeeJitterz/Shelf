class BookmarksController < ApplicationController

  def index
    @bookmarks = Bookmark.all
    render json: @bookmarks
  end

  def create
    @bookmark = Bookmark.create(params[:bookmark])
    if @bookmark
      flash[:success] = "Thanks for adding new bookmark"
      redirect_to @bookmark
    else
      flash[:error] = 'Error, please try again.'
    redirect_to @bookmark
    end

  end
