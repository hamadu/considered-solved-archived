var Vue = require('vue');
var moment = require('moment');
var Problem = require('./components/problem');

var app = new Vue({
  el: '#app',
  data: {
    mode: 'considered',
    problems: Problem.load()
  },
  methods: {
    addProblem: function () {
      this.problems.unshift(Problem.createWithEditMode());
      this.mode = 'considered';
    },

    removeProblem: function (problem) {
      var idx = this.problems.indexOf(problem);
      this.problems.splice(idx, idx+1);
    },

    expressTime: function(date) {
      return moment(date).fromNow();
    },

    toggleForm: function (problem) {
      problem.editing = !problem.editing;
      if (!problem.editing) {
        problem.date = Date.now();
      }
    },

    moveState: function (problem, newState) {
      problem.state = newState;
      problem.editing = false;
    },

    toggleMode: function (mode) {
      this.mode = mode;
    }
  },
});
