require('bootstrap/dist/css/bootstrap.css');

var Vue = require('vue');
var Problem = require('./components/problem');
var DateFormatter = require('./components/date');

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

    expressProgress: function() {
      var total = this.problems.length;
      var count = 0;
      for (var i = 0; i < total ; i++) {
        if (this.problems[i].state !== 'considered') {
          count++;
        }
      }
      if (count === 0) {
        return '';
      }
      return 'Solved ' + count + '/' + total;
    },

    solvedRate: function() {
      var total = this.problems.length;
      if (total === 0) {
        return 0;
      }
      var count = 0;
      for (var i = 0; i < total ; i++) {
        if (this.problems[i].state !== 'considered') {
          count++;
        }
      }
      return Math.ceil(count * 100 / total);
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
      return DateFormatter.format('YYYY-MM-DD HH:mm:ss', date);
    },

    toggleThought: function(problem) {
      problem.showingThought = !problem.showingThought;
    },

    toggleForm: function(problem) {
      problem.editing = !problem.editing;
      if (!problem.editing) {
        // remove if empty
        if (problem.name === '' && problem.url === '') {
          this.removeProblem(problem);
        } else {
          problem.date = Date.now();
        }
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
