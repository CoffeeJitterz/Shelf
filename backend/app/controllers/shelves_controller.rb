class ShelvesController < ApplicationController

  def index
    # @shelves = Shelf.all

    @shelves = Shelf.includes(:bookmarks).where(user_id: 6).order(created_at: :desc).map do |shelf|
      bookmarks = shelf.bookmarks.order(created_at: :desc)
      shelf.as_json.merge({bookmarks: bookmarks})
    end

    # @shelves = Shelf.includes(:bookmarks).where(user_id: current_user.id).map do |shelf|
    #   bookmarks = shelf.bookmarks
    #   shelf.as_json.merge({bookmarks: bookmarks})
    # end

    render json: @shelves
  end

  def create
    shelf = Shelf.create(shelf_params)
    render json: shelf
    
  end

  def update
    shelf = Shelf.find(params[:id])
    shelf.update(shelf_params)
    render json: shelf

  end

  def destroy
    Shelf.destroy(params[:id])
  end

  def shelf_params
    params.require(:shelf).permit(:id, :name, :color, :user_id)

  end

end
