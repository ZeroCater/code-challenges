require 'minitest/autorun'
require 'minitest/spec'
require 'minitest/pride'
require 'active_support/core_ext/string'
require_relative 'solutions'
require_relative 'human_date'

describe Solutions do
  include Solutions

  describe "#greater_than_avg" do
    it "returns all the numbers in the array greater than the average of the sum of the array" do
      assert_equal [3], greater_than_avg([1,2,3])
      assert_equal [8,5,11], greater_than_avg([-1,8,0,4,5,2,11])
    end
  end

  describe "#sort_fruit" do
    it "sorts the fruits by their count in ascending order" do
      fruits = [
        { word: 'orange', count: 1 },
        { word: 'banana', count: 2 },
        { word: 'plum', count: 3 },
        { word: 'apple', count: 5 },
        { word: 'cherry', count: 9 }
      ]

      assert_equal [1,2,3,5,9], sort_fruit(fruits).map { |f| f[:count] }
    end
  end

  describe "#reverse_hash_keys" do
    it "returns keys in reverse order" do
      hash = { 'item1' => 1, 'item2' => 'two', 5 => 'fiver' }
      assert_equal [5, 'item2', 'item1'], reverse_hash_keys(hash).keys
    end
  end

  describe "#get_week_for" do
    it "returns a Week" do
      assert_kind_of ::Week, get_week_for(HumanDate.today), <<-MSG.squish
      `get_week_for` should return a Week instance!
      MSG
    end

    describe "when given day is 2013-08-15" do
      let(:day) { HumanDate.parse('2013-08-15') }

      it "returned Week#start matches the beginning of the week for the given day" do
        assert_equal HumanDate.parse('2013-08-12'),
          HumanDate.convert(get_week_for(day).start)
      end

      it "returned Week#end matches the end of the week for the given day" do
        assert_equal HumanDate.parse('2013-08-18'),
          HumanDate.convert(get_week_for(day).end)
      end
    end

    describe "when given day is 2013-08-05" do
      let(:day) { HumanDate.parse('2013-08-05') }

      it "returned Week#start matches the beginning of the week for the given day" do
        assert_equal HumanDate.parse('2013-08-05'),
          HumanDate.convert(get_week_for(day).start)
      end

      it "returned Week#end matches the end of the week for the given day" do
        assert_equal HumanDate.parse('2013-08-11'),
          HumanDate.convert(get_week_for(day).end)
      end
    end
  end

  describe "#number_of_days_in_month_for" do
    answers = [
      [31, '2013-08-04'],
      [29, '2012-02-01'],
      [28, '2013-02-01'],
      [31, '2013-10-01']
    ]

    answers.each do |(answer, date_string)|
      month = Date.parse(date_string).strftime('%B %Y')

      it "returns the total number of days for #{month}" do
        result = number_of_days_in_month_for(Date.parse(date_string))

        assert_equal answer, result, <<-MSG.squish
        #{month} has #{answer} days, not #{result}!
        MSG
      end
    end
  end

  describe "#palindrome?" do
    palindromes = [
      'Doc, note: I dissent. A fast never prevents a fatness. I diet on cod',
      'Able was I ere I saw Elba',
      'Never odd or even',
      'aabbccddeefeeddccbbaa'
    ]

    palindromes.each do |palindrome|
      it "returns true" do
        assert palindrome?(palindrome), %("#{palindrome}" is a palindrome!)
      end
    end

    regular_strings = [
      'I am not one for sure',
      'abbccddeeffeddccbbaa'
    ]

    regular_strings.each do |palindrome|
      it "returns false" do
        refute palindrome?(palindrome), %("#{palindrome}" is NOT a palindrome!)
      end
    end
  end

  describe "#parse_ascii_table" do
    describe "two columns" do
      let(:ascii_table) { <<TABLE }
+------------------------------------+-----------------------------------+
| likes                              | dislikes                          |
+------------------------------------+-----------------------------------+
| Meritocracy                        | Favoritism, ass-kissing, politics |
+------------------------------------+-----------------------------------+
| Healthy debates and collaboration  | Ego-driven rhetoric, drama and FUD|
|                                    | to get one's way                  |
+------------------------------------+-----------------------------------+
| Fluid communication, brief, ad-hoc | Formal meetings, endless debate   |
| discussions, white-boarding, and   |                                   |
| quick but informed decisions       |                                   |
+------------------------------------+-----------------------------------+
| Clever and disruptive business     |                                   |
| ideas that solve real and immediate|                                   |
| needs in a marketplace             |                                   |
+------------------------------------+-----------------------------------+
TABLE

      expected_rows = [
        ['Meritocracy', 'Favoritism, ass-kissing, politics'],
        ['Healthy debates and collaboration', <<-DISLIKES.squish],
        Ego-driven rhetoric, drama and FUD to get one's way
        DISLIKES
        [<<-LIKES.squish, 'Formal meetings, endless debate'],
        Fluid communication, brief, ad-hoc discussions, white-boarding, and
        quick but informed decisions
        LIKES
        [<<-LIKES.squish, '']
        Clever and disruptive business ideas that solve real and immediate
        needs in a marketplace
        LIKES
      ]

      cols = %i(likes dislikes)

      expected_rows.each.with_index do |data, row|
        cols.each do |col|
          it %(#{col} for row ##{row + 1} should equal "#{data[cols.index(col)]}") do
            results = parse_ascii_table(ascii_table)

            assert_equal data[cols.index(col)], results[row].public_send(col)
          end
        end
      end
    end

    describe "BONUS QUESTION! a five column table!" do
      let(:ascii_table) { <<TABLE }
+------------------------------------+-----------------------------------+
| id  | name   | is_silly | theme_song           | description           |
+------------------------------------+-----------------------------------+
| 42  | Adams  | T        | so long and thanks   |                       |
|     |        |          | for all the fish     |                       |
+------------------------------------+-----------------------------------+
| 151 | Rummy  | T        |                      | a deliciously drunken |
|     |        |          |                      | card game             |
+------------------------------------+-----------------------------------+
| 777 | Boeing | F        |                      | no snakes on this     |
|     |        |          |                      | plane                 |
+------------------------------------+-----------------------------------+
TABLE


      expected_rows = [
        ['42', 'Adams', 'T', 'so long and thanks for all the fish', ''],
        ['151', 'Rummy', 'T', '', 'a deliciously drunken card game'],
        ['777', 'Boeing', 'F', '', 'no snakes on this plane']
      ]

      cols = %i(id name is_silly theme_song description)

      expected_rows.each.with_index do |data, i|
        cols.each do |col|
          it %(#{col} for row ##{i + 1} should equal "#{data[cols.index(col)]}") do
            assert_equal data[cols.index(col)],
              parse_ascii_table(ascii_table, cols: cols.size)[i].public_send(col)
          end
        end
      end
    end
  end
end
