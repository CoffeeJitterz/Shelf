class ShelvesController < ApplicationController

  def index
    # @shelves = Shelf.all

    @shelves = Shelf.includes(:bookmarks).where(user_id: 6).map do |shelf|
      bookmarks = shelf.bookmarks
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

  def destroy
    Shelf.destroy(params[:id])
  end

  def update
    shelf = Shelf.find(params[:id])
    shelf.update_attributes(shelf_params)
    render json: shelf

  end

  def shelf_params
    params.require(:shelf).permit(:id, :name)

  end

end
