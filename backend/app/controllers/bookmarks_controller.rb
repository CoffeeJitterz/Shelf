class BookmarksController < ApplicationController

  def index
    @bookmarks = Bookmark.all
    render json: @bookmarks
  end

  # def create
  #   @bookmark = Bookmark.create(params[:bookmark])
  #   if @bookmark
  #     flash[:success] = "Thanks for adding new bookmark"
  #     redirect_to @bookmark
  #   else
  #     flash[:error] = 'Error, please try again.'
  #   redirect_to @bookmark
  #   end

   def create
  #   @bookmark = Bookmark.create(bookmark_params)
  #   if @bookmark
  #     flash[:success] = "Thanks for adding new bookmark"
  #     render json: @bookmark
  #   else
  #     flash[:error] = 'Error, please try again.'
  #   redirect_to @bookmark
  #   end
  # end
  # def bookmark_params 
  #   params.require(:bookmark).permit(:name, :url, :color)
  # end

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
