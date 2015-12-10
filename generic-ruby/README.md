# Generic Ruby

This project folder contains the file [`spec.rb`](https://github.com/ZeroCater/code-challenges/blob/master/generic-ruby/spec.rb) with a bunch of tests that describe the behavior of all the (yet-to-be-implemented) methods in [`solutions.rb`](https://github.com/ZeroCater/code-challenges/blob/master/generic-ruby/solutions.rb).

Your task is to get all the tests passing!

**NOTE** The last spec block is a _bonus_ question!

## Setup Instructions

**NOTE** We're assuming you have `ruby` installed on your system, preferrably
`2.0` or greater.

1. `gem install bundler` (if you don't already have it)
1. `bundle install`
1.  Run all tests with `bundle exec ruby spec.rb`

  If you want to run a subset of tests, you can do so by using a regex
  like this:

  ```
  bundle exec ruby spec.rb --name /sort_fruit/
  ```

  or (equivalently)

  ```
  bundle exec ruby spec.rb -n /sort_fruit/
  ```

  That would only run tests with "sort\_fruit" in their names.

Good luck!
