class MenController < ApplicationController
  def show
    @mypagetweet = Kotoba.where(hito_id: current_hito.id).page(params[:page]).per(5).order("id DESC")
  end

  private


end
