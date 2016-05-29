def die_roll()
  Random.rand(6) + 1
end

def attacking_roll()
  Array.new(3) { die_roll }
end

def defending_roll()
  Array.new(2) { die_roll }
end

def battle_casualties
  defend = defending_roll.sort
  attack = attacking_roll.sort
  attack.shift(1)
  casualties = 0
  casualties += defend[0] >= attack[0] ? 1 : -1
  casualties += defend[1] >= attack[1] ? 1 : -1
  casualties
end


def simulate_casualties
  sum = 0
  sample_size = 10000
  sample_size.times do |i|
    sum += battle_casualties
  end
  puts sum.to_f / sample_size
end
