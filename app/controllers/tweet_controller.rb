class TweetController < ApplicationController
  before_action :kyousei_index, except: :index
  def index
    @tweet = Kotoba.includes(:hito).order("id DESC").page(params[:page]).per(5)
  end

  def new
  end
  
  def create
    Kotoba.create(information)
  end
  def destroy
  end


  private
  def information
    params.permit(:image,:word).merge(hito_id: current_hito.id)
  end

  def kyousei_index
    redirect_to action: :index unless hito_signed_in?
  end
end
