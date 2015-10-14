var Grid = React.createClass({
  componentDidMount: function() {
    var titles = this._getRefs(this.refs, /_title$/);
    this._positionTitles(titles, this.refs);
  },

  _positionTitles: function(titles, refs) {
    // TODO implement
  },

  _getRefs: function(refs, pattern) {
    var returnRefs = new Map();

    for (var ref in refs) {
      if (pattern.test(ref)) {
        returnRefs.set(ref, refs[ref]);
      }
    }

    return returnRefs;
  },

  render: function() {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    var months = monthNames.map(function(month) {
      return React.createElement("h1", {
        key: month,
        ref: month + "_title"
      }, month);
    });

    var days = [].concat.apply([], monthNames.map(function(month) {
      var monthMoment = moment(month + " 2015", "MMMM YYYY");
      var daysInMonth = monthMoment.daysInMonth();
      var days = [];

      for (var i = 1; i <= daysInMonth; i++) {
        var ref = null;

        if (i == 1) {
          ref = month + "_start";
        }

        if (i == daysInMonth) {
          ref = month + "_end";
        }

        var classes = ["day"];

        if (monthNames.indexOf(month) % 2 === 0) {
          classes.push("even-month");
        }

        days.push(React.createElement("span", {
          key: month + i,
          ref: ref,
          className: classes.join(" "),
          month: month
        }, i));
      }

      return days;
    }));

    return React.createElement("div", {
      id: "grid"
    }, days.concat(months));
  }
});

var App = React.createClass({
  render: function() {
    return React.createElement(Grid);
  }
});

React.render(
  React.createElement(App),
  document.getElementById("app")
);
