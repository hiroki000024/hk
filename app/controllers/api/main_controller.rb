class Api::MainController < ApplicationController
  def index
    co_lastword = params[:id]
    @love = Kotoba.where("id > #{co_lastword}")
  end
end