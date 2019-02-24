class FlatsController < ApplicationController
def index
    @flats = Flat.where.not(latitude: nil, longitude: nil)

    @markers = @flats.map do |flat|
      {
        lng: flat.longitude,
        lat: flat.latitude,
        infoWindow: render_to_string(partial:"infowindow", locals: {flat: flat})
      }
    end
  end

end
