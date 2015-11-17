class Api::SinsController < ApplicationController

  def index
    @sins = Sin.all
  end

  def show
    @sin = Sin.find(params[:id])
  end

end
