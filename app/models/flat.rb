class Flat < ApplicationRecord
   geocoded_by :address #decimos la forma en la que vamos a hacerlo basado en la columna 'addres' in my flats table
  after_validation :geocode, if: :will_save_change_to_address? #API code if you change the address
end
