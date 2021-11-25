class ShelvesController < ApplicationController

  def index
    # @shelves = Shelf.all

    @shelves = Shelf.includes(:bookmarks).where(user_id: 7).map do |shelf|
      bookmarks = shelf.bookmarks
      shelf.as_json.merge({bookmarks: bookmarks})
    end

    # @shelves = Shelf.includes(:bookmarks).where(user_id: current_user.id).map do |shelf|
    #   bookmarks = shelf.bookmarks
    #   shelf.as_json.merge({bookmarks: bookmarks})
    # end

    render json: @shelves
  end

end
