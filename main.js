class Hero
  attr_reader :name
  attr_accessor :position, :health, :damage, :experience

  def initialize(name = 'Hero')
    @name = name
    @position = '00'
    @health = 100
    @damage = 5
    @experience = 0
  end
end