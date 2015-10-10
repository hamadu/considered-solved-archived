require('bootstrap/dist/css/bootstrap.css');

var Vue = require('vue');
var moment = require('moment');
var Problem = require('./components/problem');

moment.locale('ja');

var app = new Vue({
  el: '#app',
  data: {
    mode: 'considered',
    problems: Problem.load()
  },
  methods: {
    addProblem: function () {
      this.problems.unshift(Problem.createWithEditMode());
    },

    removeProblem: function(problem) {
      var idx = this.problems.indexOf(problem);
      this.problems.splice(idx, idx+1);
      Problem.save(this.problems);
    },

    countProblems: function(state) {
      var count = 0;
      for (var i = 0; i < this.problems.length; i++) {
        if (this.problems[i].state === state) {
          count++;
        }
      }
      return count;
    },

    expressTime: function(date) {
      return moment(date).format('YYYY-MM-DD HH:mm:ss');
    },

    toggleThought: function(problem) {
      problem.showingThought = !problem.showingThought;
    },

    toggleForm: function(problem) {
      problem.editing = !problem.editing;
      if (!problem.editing) {
        problem.date = Date.now();
        Problem.save(this.problems);
      }
    },

    moveState: function(problem, newState) {
      problem.state = newState;
      problem.editing = false;
      problem.showingThought = false;
      Problem.save(this.problems);
    },

    toggleMode: function(mode) {
      this.mode = mode;
    }
  },
});
