class FlatsController < ApplicationController
def index
    @flats = Flat.where.not(latitude: nil, longitude: nil)

    @markers = @flats.map do |flat|
      {
        lng: flat.longitude,
        lat: flat.latitude,
        infoWindow: render_to_string(partial:"/flats/map_box", locals: {flat: flat})
      }
    end
  end

  #NoMethodError in Flats#new = CREAR EL METODO!

  def new
    @flat = Flat.new

  end

end
