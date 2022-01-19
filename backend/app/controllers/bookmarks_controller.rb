class BookmarksController < ApplicationController

  def index
    @bookmarks = Bookmark.all
    render json: @bookmarks
  end


   def create
    bookmark = Bookmark.create(bookmark_params)
    render json: bookmark
  end
  
    def update
      bookmark = Bookmark.find(params[:id])
      bookmark.update(bookmark_params)
      render json: bookmark
  
    end

  def destroy
    Bookmark.destroy(params[:id])
  end

  def bookmark_params
    params.require(:bookmark).permit(:id, :name, :url, :color, :font, :shelf_id)
  end
  end
