class Api::SinsController < ApplicationController

  def index
    @sins = Sin.all
  end

end
