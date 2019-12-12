class MainController < ApplicationController
  def index
    @main_tweet= Kotoba.all
    @kotoba = Kotoba.new
  end
  def create
    @kotoba= Kotoba.create(information)
    respond_to do|format|
      format.html {}
      format.json {render json: @kotoba}
    end
  end
  private
  def information
    params.permit(:word,:image).merge(hito_id:current_hito.id)
  end
end
