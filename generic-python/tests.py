from devtest import Solutions
import unittest
from datetime import datetime

fruit = [
    {
        'word': 'apple',
        'count': 5
    },
    {
        'word': 'banana',
        'count': 2
    },
    {
        'word': 'orange',
        'count': 1
    },
    {
        'word': 'cherry',
        'count': 9
    },
    {
        'word': 'plum',
        'count': 3
    }
]


class SolutionsTestCase(unittest.TestCase):

    def setUp(self):
        self.solutions = Solutions()

    def test_greater_than_avg(self):
        self.assertEqual([3], self.solutions.greater_than_avg([1, 2, 3]))
        self.assertEqual([8, 5, 11], self.solutions.greater_than_avg([-1, 8, 0, 4, 5, 2, 11]))

    def test_sort_fruit(self):
        sorted_fruit = self.solutions.sort_fruit(fruit)
        last = 0
        for f in sorted_fruit:
            self.assertTrue(f.get('count') > last)
            last = f.get('count')

    def test_transpose_dict(self):
        d = {'item1': 1, 'item2': 'two', 5: 'fiver'}
        transposed_dict = self.solutions.transpose_dict(d)
        self.assertEqual(transposed_dict.get('fiver'), 5)
        self.assertEqual(transposed_dict.get('two'), 'item2')
        self.assertEqual(transposed_dict.get(1), 'item1')

    def test_week_start_end(self):
        # assume Monday is first day
        answer = self.solutions.week_start_end(datetime(2013, 8, 15, 12, 0, 0))
        self.assertEqual(answer, (datetime(2013, 8, 12, 0, 0, 0, 0), datetime(2013, 8, 18, 23, 59, 59, 999999)))
        answer = self.solutions.week_start_end(datetime(2013, 8, 5, 12, 0, 0))
        self.assertEqual(answer, (datetime(2013, 8, 5, 0, 0, 0, 0), datetime(2013, 8, 11, 23, 59, 59, 999999)))

    def test_month_last_day(self):
        self.assertEqual(self.solutions.month_last_day(datetime(2013, 8, 4)), 31)
        self.assertEqual(self.solutions.month_last_day(datetime(2012, 2, 1)), 29)
        self.assertEqual(self.solutions.month_last_day(datetime(2013, 2, 1)), 28)
        self.assertEqual(self.solutions.month_last_day(datetime(2013, 10, 1)), 31)

    def test_is_palindrome(self):
        # https://en.wikipedia.org/wiki/Palindrome
        """
        This function should return a function object that will accept 1
            argument and can be called to check for palindromes.
        """

        test_function = self.solutions.palindrome_test_function()
        self.assertTrue(test_function('Doc, note: I dissent. A fast never prevents a fatness. I diet on cod'))
        self.assertFalse(test_function('I am not one for sure'))
        self.assertTrue(test_function('Able was I ere I saw Elba'))
        self.assertTrue(test_function('Never odd or even'))
        self.assertTrue(test_function('aabbccddeefeeddccbbaa'))
        self.assertFalse(test_function('abbccddeeffeddccbbaa'))

    def test_string_parse(self):
        developer_likes_and_dislikes = """

+------------------------------------+-----------------------------------+
| likes                              | dislikes                          |
+------------------------------------+-----------------------------------+
| Meritocracy                        | Favoritism, ass-kissing, politics |
+------------------------------------+-----------------------------------+
| Healthy debates and collaboration  | Ego-driven rhetoric, drama and FUD|
|                                    | to get one's way                  |
+------------------------------------+-----------------------------------+
| Autonomy given by confident leaders| Micro-management by insecure      |
| capable of attracting top-tier     | managers compensating for a weak, |
| talent                             | immature team                     |
+------------------------------------+-----------------------------------+
| Fluid communication, brief, ad-hoc | Formal meetings, endless debate   |
| discussions, white-boarding, and   |                                   |
| quick but informed decisions       |                                   |
+------------------------------------+-----------------------------------+
| Where else can I help out?         | I'm blocked by..., I only know how|
|                                    | to...                             |
+------------------------------------+-----------------------------------+
| Getting things done.               | Contrived company culture         |
+------------------------------------+-----------------------------------+
| Clever and disruptive business     |                                   |
| ideas that solve real and immediate|                                   |
| needs in a marketplace             |                                   |
+------------------------------------+-----------------------------------+
| Software and system abstractions   | Hard-coding, brute-force          |
+------------------------------------+-----------------------------------+
| Frameworks and best-practices      | Hermetic code-base                |
+------------------------------------+-----------------------------------+
| Best tool for the job              | One size fits all                 |
+------------------------------------+-----------------------------------+
| Simple design                      | Over-engineering                  |
+------------------------------------+-----------------------------------+
| Leveraging open-source             | Re-inventing the wheel            |
+------------------------------------+-----------------------------------+
| Practical solutions to business    | Let's do this or use that because |
| core competency                    | it's new and cool                 |
+------------------------------------+-----------------------------------+
| Building solutions to current      | Over-emphasizing "nice-to-haves"  |
| business needs and customer demand | and conjecture                    |
+------------------------------------+-----------------------------------+

"""
        answer = self.solutions.string_parse(developer_likes_and_dislikes)
        self.assertEqual(answer, [
            (u'Meritocracy', u'Favoritism, ass-kissing, politics'),
            (u'Healthy debates and collaboration',
             u"Ego-driven rhetoric, drama and FUD to get one's way"),
            (u'Autonomy given by confident leaders capable of attracting top-tier talent',
             u'Micro-management by insecure managers compensating for a weak, immature team'),
            (u'Fluid communication, brief, ad-hoc discussions, white-boarding, and quick but informed decisions',
             u'Formal meetings, endless debate'),
            (u'Where else can I help out?', u"I'm blocked by..., I only know how to..."),
            (u'Getting things done.', u'Contrived company culture'),
            (u'Clever and disruptive business ideas that solve real and immediate needs in a marketplace',
             u''),
            (u'Software and system abstractions', u'Hard-coding, brute-force'),
            (u'Frameworks and best-practices', u'Hermetic code-base'),
            (u'Best tool for the job', u'One size fits all'),
            (u'Simple design', u'Over-engineering'),
            (u'Leveraging open-source', u'Re-inventing the wheel'),
            (u'Practical solutions to business core competency',
             u"Let's do this or use that because it's new and cool"),
            (u'Building solutions to current business needs and customer demand',
             u'Over-emphasizing "nice-to-haves" and conjecture')
        ])

if __name__ == "__main__":
    unittest.main()
