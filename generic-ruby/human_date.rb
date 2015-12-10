require 'date'

class HumanDate < Date
  FORMAT = '%B %d, %Y'

  def inspect
    "#<Date: #{strftime(FORMAT)}>"
  end

  def self.convert(date)
    self.parse(date.strftime(FORMAT))
  end
end
