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
      return moment(date).format('YYYY-MM-DD HH:mm:ss');
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
