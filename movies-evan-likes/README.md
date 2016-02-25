# Movies Evan Likes!

## Setup

1. `npm install`
1. `npm run dev`

### Objective

You've been provided with a set of movies I really like, in `data.js`.

1. Output the results of `data.js` as table rows in the `<Results />`
  component.

1. After you've displayed the results on the screen, build a set of filters at
  the top to filter the data:

  - **by `genre`**: Should only show movies with a matching `genre`. This
    should be implemented as a drop-down select menu.
  - **by `wonBestPiecture`**: Should only show movies that won the
    "Best Picture" award. This should be implemented as a checkbox.
  - **by decade**: Should only show movies in the selected decade.

    Example options: 1990's, 2000's, 2010's, etc.
  - **by matching title**: Should only show movies with a title containing the
    user's input. This should be implemented as a text input.

    *Note*: A literal substring match is totally fine.

  The filters do not need to be "live": you only need to apply them when the
  user clicks the <kbd>Filter</kbd> button.

  The filters **MUST** be additive: for example, it must be possible to filter
  by both **decade** and **matching title**.

  Values for the select menus for "decade" and "genre" **MUST** compute their
  values from the data presented in `data.js`. If `data.js` were to change to
  a new set of movies with different information, no new code changes should
  be necessary.

### Notes

I care most about "does it work to specification?". All other concerns are
secondary (code style, etc.). An ugly solution that works is better than a
beautiful solution that doesn't.

Feel free to change whatever you want about the boilerplate. Try to avoid
installing additional libraries--this is all accomplishable using the libraries
provided.

### Bonus

These aren't necessary, but give you some awesome bonus points!

- Add tests
- Make the "title" match fuzzy
- Find (or make) a live API and do the querying over the network
