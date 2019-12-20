class Api::MainController < ApplicationController
  def index
    if params[:id].blank?
      @love = []
    else
      co_lastword = params[:id]
      @love = Kotoba.where("id > #{co_lastword}")
    end
  end
end